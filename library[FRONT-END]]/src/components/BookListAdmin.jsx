import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [editingBook, setEditingBook] = useState(null);
  const [updatedBook, setUpdatedBook] = useState({
    title: '',
    author: '',
    bookDes: '',
    bookImgUrl: '',
    bookPdfUrl: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/data');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching book data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const confirmed = window.confirm(`Are you sure you want to delete this book...?`);

    if (!confirmed) {
      return;
    }
      await axios.delete(`http://localhost:8080/delete/${id}`);
      setBooks((prevData) => prevData.filter((book) => book.id !== id));
      window.alert(`${books.title}  Deleted book Successfully!..`);
      
    } catch (error) {
      console.error('Error deleting book data:', error);
    }
  };

  const handleEditClick = (book) => {
    setEditingBook(book);
    setUpdatedBook({
      title: book.title,
      author: book.author,
      bookDes: book.bookDes,
      bookImgUrl: book.bookImgUrl,
      bookPdfUrl: book.bookPdfUrl
    });
  };

  const handleUpdateClick = async () => {
    try {
      
      await axios.put(`http://localhost:8080/update/${editingBook.id}`, updatedBook);
      const response = await axios.get('http://localhost:8080/data');
      
      setBooks(response.data);
      setEditingBook(null);
      setUpdatedBook({
        title: '',
        author: '',
        bookDes: '',
        bookImgUrl: '',
        bookPdfUrl: '',
      });
    } catch (error) {
      console.error('Error updating book data:', error);
    }
  };

  const handleSearch = (e) => {
    setSearchKeyword(e.target.value);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );




  return (
    <div className='container-fluid d-flex flex-column align-items-center'>
  
      <div className="m-3">
        <Link to="/M10">
          <button className="btn btn-warning m-3">Go to Home</button>
        </Link>
        <Link to="/bookform">
          <button className="btn btn-warning m-3">Go to Add Book</button>
        </Link>
      </div>
  
      <div className="input-group mb-3" style={{ width: '80%' }}>
        <input
          type="text"
          className="form-control"
          placeholder="Search by book Title"
          value={searchKeyword}
          onChange={handleSearch}
        />
      </div>
  
      <div className='card' style={{ background: '#f0f0f0', width: '80%', padding: '30px', marginTop: '20px' }}>
        <div>
          <h2>Available Books</h2>
        </div>
        <table className="table table table-bordered table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Book Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{editingBook === book ? <input type="text" value={updatedBook.title} onChange={(e) => setUpdatedBook({ ...updatedBook, title: e.target.value })} /> : book.title}</td>
                <td>{editingBook === book ? <input type="text" value={updatedBook.author} onChange={(e) => setUpdatedBook({ ...updatedBook, author: e.target.value })} /> : book.author}</td>
                <td>{editingBook === book ? <input type="text" value={updatedBook.bookDes} onChange={(e) => setUpdatedBook({ ...updatedBook, bookDes: e.target.value })} /> : book.bookDes}</td>
                <td>
                  {editingBook === book ? (
                    <button onClick={handleUpdateClick} className="btn btn-primary">
                      Update
                    </button>
                  ) : (
                    <>
                      <button onClick={() => handleEditClick(book)} className="btn btn-secondary">
                        Edit
                      </button>
                    &nbsp;&nbsp; &nbsp;
                      <button onClick={() => handleDelete(book.id)} className="btn btn-danger ml-1">
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
  
};

export default BookList;
