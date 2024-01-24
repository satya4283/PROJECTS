import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function StudentPage() {
  const [books, setBooks] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/data');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching book data:', error);
      }
    }; fetchData();
  }, []);



  const handleSearch = (e) => {
    setSearchKeyword(e.target.value);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );


  return (
    <div className='container-fluid ' style={{ background: '#f0f0f0' }}>

      <h1>Welcome to the E-Library</h1>

      <h3>Explore, Learn, Succeed</h3>

      <Link to="/M10">
        <button className="btn btn-warning m-3">BACK</button>
      </Link>
      

      <div className="d-flex justify-content-center mt-3 " >
      <div className="input-group mb-1   " style={{width:'50%'}}>
        <input
          type="text"
          className="form-control"
          placeholder="Search Book by  Book title "
          value={searchKeyword}
          onChange={handleSearch}
        />
      </div>
      </div>

      <div className="row row-cols-3 row-col-md-4 " >

        {filteredBooks.map((book) => (

          <div key={book.id} className="card  mx-auto my-5" style={{ width: '20rem' }}>

            <img src={book.bookImgUrl} width={'auto'} height={'200px'} class="card-img-top" alt="Book cover" />

            <div className="card-body">
              <h5 class="card-title">{book.title}</h5>
              <p class="card-text">{book.author}</p>

              <div class="overlay">
                <img src={book.bookImgUrl} class="card-img-top" id="b" alt="Book cover" />

                <div class="overlay-text">
                  <h5 class="card-title">{book.title}</h5>
                  <p class="card-text">{book.author}</p>
                  <p class="card-text">{book.bookDes}</p>
                  <a href={book.bookPdfUrl} class="btn btn-primary">view/Download</a>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentPage;

