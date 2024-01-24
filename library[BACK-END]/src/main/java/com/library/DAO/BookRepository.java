package com.library.DAO;



import org.springframework.data.repository.CrudRepository;

import com.library.entity.Books;

public interface BookRepository extends CrudRepository<Books, Integer> {

	public Books findById(int id);
	
	 
}
