import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AddBookForm = () => {
  const navigate = useNavigate();
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    bookDes: '',
    bookImgUrl:'',
    bookPdfUrl:'',
  });

  const handleChange = (e) => {
    setBookData({
      ...bookData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Use axios for sending a POST request
      await axios.post("http://localhost:8080/add", bookData);

      console.log('Data saved successfully!');

      // Redirect to the success component
      navigate('/home');

      // You can perform additional actions here after successful submission
    } catch (error) {
      console.error('Error saving data:', error);
      // Handle error
    }
  };

  return (
    <div className="container mt-5 ">
         <Link to="/M10">
          <button className="btn btn-success m-3">Go to Home</button>
        </Link>
        <Link to="/bookDetails">
          <button className="btn btn-success">Go to BookDetails</button>
        </Link>

<div className='card ' style={{background:'#f0f0f0',width:'50%',marginLeft:'300px'}}>
      <h2 className="mb-4 text-center">ADD BOOK</h2>

      

      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="d-flex justify-content-center mt-3 "  >
        <div className="mb-3 " style={{width:'80%'}}>
          <label htmlFor="title" className="form-label">
            Book Name
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={bookData.title}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        </div>
        
        <div className="d-flex justify-content-center mt-3 " >
        <div className="mb-3" style={{width:'80%'}}>
          <label htmlFor="bookImgUrl" className="form-label">
            Book IMG URL
          </label>
          <input
            type="text"
            className="form-control"
            id="bookImgUrl"
            name="bookImgUrl"
            value={bookData.bookImgUrl}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        </div>

        <div className="d-flex justify-content-center mt-3 " >
        <div className="mb-3" style={{width:'80%'}}>
          <label htmlFor="author" className="form-label">
            Book Author
          </label>
          <input
            type="text"
            className="form-control"
            id="author"
            name="author"
            value={bookData.author}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        </div>

        <div className="d-flex justify-content-center mt-3 " >
        <div className="mb-3" style={{width:'80%'}}>
          <label htmlFor="bookDes" className="form-label">
            Book Description
          </label>
          <input
            type="text"
            className="form-control"
            id="bookDes"
            name="bookDes"
            value={bookData.bookDes}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        </div>

        <div className="d-flex justify-content-center mt-3 " >
        <div className="mb-3" style={{width:'80%'}}>
          <label htmlFor="bookPdfUrl" className="form-label">
            Book PDF URL
          </label>
          <input
            type="text"
            className="form-control"
            id="bookPdfUrl"
            name="bookPdfUrl"
            value={bookData.bookPdfUrl}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        </div>
        
        <div className="d-flex justify-content-center mt-3 pb-3 " >
        <div className="d-grid gap-2 " style={{width:'30%'}}>
          <Button variant="primary"  type="submit">
            Add Book
          </Button>
        </div>
        </div>
      
      </form>
      </div>
    </div>
  );
};

export default AddBookForm;
