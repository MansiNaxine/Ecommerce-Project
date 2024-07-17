package com.example.demo.config;

import java.util.Date;

import javax.crypto.SecretKey;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@Service
@Component
public class JwtProvider {
	
	SecretKey key=Keys.hmacShaKeyFor(JwtConstant.SECRET_KEY.getBytes());//setting up the key for signing into JWT
	
	public String generateToken(Authentication auth) {
		@SuppressWarnings("deprecation")
		String jwt=Jwts.builder()
				.setIssuedAt(new Date())
				.setExpiration(new Date(new Date().getTime()+846000000))//token will expire after 24 hours
				.claim("email", auth.getName())
				.signWith(key).compact();
		
		return jwt;
			
	}

	//to get email from JWT token
	public String getEmailFromToken(String jwt) {
		
		jwt=jwt.substring(7);
		
		@SuppressWarnings("deprecation")
		Claims claims=Jwts.parser().setSigningKey(key).build().parseClaimsJws(jwt).getBody();
		
		String email=String.valueOf(claims.get("email"));
		
		return email;
		
	}
}
