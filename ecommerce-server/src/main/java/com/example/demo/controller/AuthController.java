package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.example.demo.config.JwtProvider;
import com.example.demo.exception.UserException;
import com.example.demo.model.Cart;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.request.LoginRequest;
import com.example.demo.response.AuthResponse;
import com.example.demo.service.CartService;
import com.example.demo.service.CustomerUserServiceImplementation;

@RestController
@RequestMapping("/auth")//this indicates that every endpoint will starts with ("/auth")
public class AuthController {
	
	@Autowired
	private UserRepository repo;
	@Autowired
	private JwtProvider jwtProvider;
	@Autowired
	private PasswordEncoder passwordEncoder;
	@Autowired
	private CustomerUserServiceImplementation customUserService;
	@Autowired
	private CartService cartService;
	
	
//	public AuthController(UserRepository repo, PasswordEncoder passwordEncoder,
//			CustomerUserServiceImplementation customUserService,JwtProvider jwtProvider) {
//		super();
//		this.repo = repo;
//		this.passwordEncoder = passwordEncoder;
//		this.customUserService = customUserService;
//		this.jwtProvider=jwtProvider;
//	}

	@PostMapping("/signup")
	public ResponseEntity<AuthResponse> createUserHandler(@RequestBody User user) throws UserException{
		
		String email=user.getEmail();
		String password=user.getPassword();
		String firstString=user.getFirstName();
		String lastString=user.getLastName();
		
		User isEmailExist=repo.findByEmail(email);
		
		if(isEmailExist!=null) {
			throw new UserException("Email is Already Used with Another Account");
		}
		
		User createdUser=new User();
		createdUser.setEmail(email);
		createdUser.setPassword(passwordEncoder.encode(password));
		createdUser.setFirstName(firstString);
		createdUser.setLastName(lastString);
		
		
		User savedUser=repo.save(createdUser);
		Cart cart=cartService.createCart(savedUser);
		
		Authentication authentication=new UsernamePasswordAuthenticationToken(savedUser.getEmail(),savedUser.getPassword());
		SecurityContextHolder.getContext().setAuthentication(authentication);
		
		String token=jwtProvider.generateToken(authentication);
		AuthResponse authResponse=new AuthResponse();
		authResponse.setJwt(token);
		authResponse.setMessage("Signup Success!");
		
		return new ResponseEntity<AuthResponse>(authResponse,HttpStatus.CREATED) ; 
	}
	
	@PostMapping("/signin")
	public ResponseEntity<AuthResponse> loginUserHandler(@RequestBody LoginRequest loginRequest){
		
		String userName=loginRequest.getEmail();
		String password=loginRequest.getPassword();
		
		
		Authentication authentication=authenticate(userName,password);
		SecurityContextHolder.getContext().setAuthentication(authentication);//it marks as a user is authenticated
		String token=jwtProvider.generateToken(authentication);
		AuthResponse authResponse=new AuthResponse();
		authResponse.setJwt(token);
		authResponse.setMessage("Signin Success!");
		
		return new ResponseEntity<AuthResponse>(authResponse,HttpStatus.CREATED) ;
	}

	private Authentication authenticate(String userName, String password) {
		
		UserDetails userDetails=customUserService.loadUserByUsername(userName);
		if(userDetails==null) {
			throw new BadCredentialsException("Invalid Username");
		}
		
		if(!passwordEncoder.matches(password,userDetails.getPassword())) {
			throw new BadCredentialsException("Invalid Password");
		}
		return new UsernamePasswordAuthenticationToken(userDetails,null,userDetails.getAuthorities());
	}

}
