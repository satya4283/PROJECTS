package com.library.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "BOOKS")
public class Books {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@Column
	private String title;
	@Column
	private String author;
	
	@Column(columnDefinition = "VARCHAR(500)")
	private String bookDes;
	
	@Column(columnDefinition = "VARCHAR(1600)")
	private String bookImgUrl;
	
	@Column(columnDefinition = "VARCHAR(1600)")
	private String bookPdfUrl;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getBookDes() {
		return bookDes;
	}

	public void setBookDes(String bookDes) {
		this.bookDes = bookDes;
	}

	public String getBookImgUrl() {
		return bookImgUrl;
	}

	public void setBookImgUrl(String bookImgUrl) {
		this.bookImgUrl = bookImgUrl;
	}

	public String getBookPdfUrl() {
		return bookPdfUrl;
	}

	public void setBookPdfUrl(String bookPdfUrl) {
		this.bookPdfUrl = bookPdfUrl;
	}

	public Books(int id, String title, String author, String bookDes, String bookImgUrl, String bookPdfUrl) {
		super();
		this.id = id;
		this.title = title;
		this.author = author;
		this.bookDes = bookDes;
		this.bookImgUrl = bookImgUrl;
		this.bookPdfUrl = bookPdfUrl;
	}

	public Books() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	

}	