package com.satya.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.satya.Model.Book;
import com.satya.Repository.BookRepository;

@Service
public class BookServiceImplementation implements BookService{
	
	@Autowired
	private BookRepository bookRepo;

	@Override
	public Book registerBook(Book book) {

		 Book newBook = new Book();
		 
		 newBook.setAuthor(book.getAuthor());
		 newBook.setBookDes(book.getBookDes());
		 newBook.setBookImgUrl(book.getBookImgUrl());
		 newBook.setBookPdfUrl(book.getBookPdfUrl());
		 newBook.setTitle(book.getTitle());
		 
		 Book savedBook = bookRepo.save(newBook);
		
		return savedBook;
	}

	@Override
	public Book findBookById(int id) {
		
		Optional<Book> book = bookRepo.findById(id);
		
		return null;
	}
	
	

}
