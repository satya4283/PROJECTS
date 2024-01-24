package com.satya.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.satya.Model.User;
import com.satya.Repository.UserRepository;
import com.satya.Service.UserService;

@RestController
public class UserController {

	@Autowired
	private UserRepository userRepo;

	@Autowired
	private UserService userService;
	
	

	@PostMapping("/users")
	public User createUser(@RequestBody User user) {

		User savedUser = userService.registerUser(user);

		return savedUser;
	}

	@GetMapping("/users")
	public List<User> getUsers() {

		List<User> users = userRepo.findAll();

		return users;
	}

	@GetMapping("/users/{userId}")
	public User getUserById(@PathVariable("userId") Integer id) throws Exception {

		User user = userService.findUserById(id);

		return user;
	}

	@PutMapping("/user/{userId}")
	public User updateUser(@RequestBody User user, @PathVariable int userId) throws Exception {

		User updatedUser = userService.updateUser(user, userId);

		return updatedUser;
	}
	
	
	@PutMapping("/user/follow/{userId1}/{userId2}")
	public User followUserHandler(@PathVariable int userId1, @PathVariable int userId2) throws Exception {
		
		User user= userService.followUser(userId1, userId2);
		
		return user;
		
	}
	
	
	@GetMapping("/users/search")
	public List<User> searchUser(@Param("query") String query){
		
		List<User> users = userService.searchUser(query);
		
		return users;
	}
	
	

	/*
	 * @DeleteMapping("/user/{userId}") public String deleteUser(@PathVariable int
	 * userId) throws Exception {
	 * 
	 * Optional<User> user = userRepo.findById(userId);
	 * 
	 * if (user.isEmpty()) { throw new Exception("user does not exist with Id: " +
	 * userId); }
	 * 
	 * userRepo.delete(user.get());
	 * 
	 * return "user deleted successfully with id: " + userId; }
	 */

}
