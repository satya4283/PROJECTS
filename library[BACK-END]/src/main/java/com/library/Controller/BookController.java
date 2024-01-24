package com.library.Controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.library.DAO.BookRepository;
import com.library.entity.Books;
import com.library.service.BooksService;

@RestController
@CrossOrigin("http://localhost:3000")
public class BookController {

	@Autowired
	BooksService bookservice;
	@Autowired
	BookRepository booksrepo;
	
	@RequestMapping("")
	public String run() {
		return "hi";
	}
	// add book handler

	@PostMapping("/add")
	public String addBook(@RequestBody Books b) {
		System.out.println("data" + b);
		return bookservice.addBook(b);
	}

	// fetching books handler
	@GetMapping("/data")
	public List<Books> data() {
		return bookservice.getAllBooks();
	}

	@DeleteMapping("/delete/{id}")
	public String delete(@PathVariable Integer id) {
		return bookservice.deleteBook(id);
	}

	@DeleteMapping("/delete")
	public String deleteall() {
		return bookservice.deleteall();
	}

	// update book handler

	@PutMapping("/update/{bookId}")
	public Books updateBook(@PathVariable("bookId") int bookId, @RequestBody Books book) {
		this.bookservice.updateBook(book, bookId);
		return book;
	}


}
