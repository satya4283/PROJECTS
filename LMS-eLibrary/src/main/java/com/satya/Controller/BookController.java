package com.satya.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.satya.Model.Book;
import com.satya.Service.BookService;

@RestController
public class BookController {
	
	@Autowired
	private BookService bookService;
	
	@PostMapping("/books")
	public Book createBook(@RequestBody Book book) {
		
		Book registerdBook = bookService.registerBook(book);
		
		return registerdBook;
	}

}
