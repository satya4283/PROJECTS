package com.satya.Service;

import java.util.List;

import com.satya.Model.User;

public interface UserService {
	
	public User registerUser(User user);
	
	public User findUserById(int id) throws Exception;
	
	public User findUserByEmail(String email);
	
	public User followUser(int userId1, int userId2) throws Exception;
	
	public User updateUser(User user,int userId) throws Exception;
	
	public List<User> searchUser(String query);

}