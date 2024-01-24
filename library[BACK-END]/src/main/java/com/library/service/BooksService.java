package com.library.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.library.DAO.BookRepository;
import com.library.entity.Books;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class BooksService {

	@Autowired
	BookRepository booksrepo;

	public String addBook(Books b) {
		booksrepo.save(b);
		return "success";
	}
	//get all books
	
	public List<Books> getAllBooks() {
		return (List<Books>) booksrepo.findAll();
	}

	// get single book by id
	public Books getBookById(int id) {
		return this.booksrepo.findById(id);
	}
	
	// delete all books
	public String deleteall() {
		booksrepo.deleteAll();
		return "deleted";
	}
	
	// delete single book by id
	public String deleteBook(Integer id) {
		booksrepo.deleteById(id);
		return "deleted";
	}
	
	// update the book
	public void updateBook(Books book, int id) {
		book.setId(id);
		this.booksrepo.save(book);
	}

		
	

}
