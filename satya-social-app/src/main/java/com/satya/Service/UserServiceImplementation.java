package com.satya.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.satya.Model.User;
import com.satya.Repository.UserRepository;

@Service
public class UserServiceImplementation  implements UserService{
	
	@Autowired
	UserRepository userRepo;
	

	@Override
	public User registerUser(User user) {

		User newUser = new User();
		newUser.setFirstName(user.getFirstName());
		newUser.setLastName(user.getLastName());
		newUser.setEmail(user.getEmail());
		newUser.setPassword(user.getPassword());
		newUser.setId(user.getId());
		
		User savedUser =userRepo.save(newUser);
		
		return savedUser;
	}

	@Override
	public User findUserById(int id) throws Exception {
		Optional<User> user = userRepo.findById(id);
		
		if(user.isPresent())
		{
			return user.get();
		}
		
		throw new Exception("user is not exist with Id: "+ id);
	}

	
	@Override
	public User findUserByEmail(String email) {
		
		User user = userRepo.findByEmail(email);
		return user;
	}
	
	

	@Override
	public User followUser(int userId1, int userId2) throws Exception {
		
		User user1 = findUserById(userId1);
		
		User user2 =  findUserById(userId2);
		
		user2.getFollowers().add(user1.getId());
		
		user1.getFollowings().add(user2.getId());
		
		
		userRepo.save(user1);
		userRepo.save(user2);
		
		
		return user1;
	}
	

	@Override
	public User updateUser(User user,int userId) throws Exception {
		
		Optional<User> user1 = userRepo.findById(userId);
		
		if(user1.isEmpty())
		{
			throw new Exception("user is not exit with id: "+userId);
		}
		
		User oldUser = user1.get();
		
		if(user.getFirstName()!=null) {
			oldUser.setFirstName(user.getFirstName());
		}
		if(user.getLastName()!=null) {
			oldUser.setLastName(user.getLastName());
		}
		if(user.getEmail()!=null) {
			oldUser.setEmail(user.getEmail());
		}
		
		User updatedUser = userRepo.save(oldUser);
		
		return updatedUser;
	}
	
	

	@Override
	public List<User> searchUser(String query) {
		
		List<User> user = userRepo.searchUser(query);
		
		return user;
	}

}
