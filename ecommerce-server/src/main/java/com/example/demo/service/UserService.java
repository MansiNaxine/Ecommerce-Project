package com.example.demo.service;

import java.util.List;

import com.example.demo.exception.UserException;
import com.example.demo.model.User;

public interface UserService {
	
	public User findUserById(Long userId) throws UserException;
	
	public User findUserProfileByJwt(String jwt) throws UserException;
	
	public List<User> findAllUsers();
	
	

}
