package com.satya.Service;

import com.satya.Model.Book;

public interface BookService {
	
	public Book registerBook(Book book);
	
	public Book findBookById(int id);
	

}
