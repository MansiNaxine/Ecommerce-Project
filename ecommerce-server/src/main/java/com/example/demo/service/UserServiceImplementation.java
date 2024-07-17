package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.config.JwtProvider;
import com.example.demo.exception.UserException;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

@Service
public class UserServiceImplementation implements UserService {

	@Autowired
	private UserRepository userRepo;
	@Autowired
	private JwtProvider jwtProvider;
	
	@Override
	public User findUserById(Long userId) throws UserException {
		
		Optional<User> user=userRepo.findById(userId);
		if(user.isPresent()) {
			return user.get();
		}
		throw new UserException("User Not Found wih id: "+userId);
	}

	@Override
	public User findUserProfileByJwt(String jwt) throws UserException {
		String email=jwtProvider.getEmailFromToken(jwt);
		
		User user=userRepo.findByEmail(email);
		if(user==null) {
			throw new UserException("User Not Found wih email: "+email);
		}
		return user;
	}

	@Override
	public List<User> findAllUsers() {
		return userRepo.findAllByOrderByCreatedAtDesc();
	}

}
