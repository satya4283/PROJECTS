import React from 'react'
import { Link } from 'react-router-dom'
import AddBookForm from '../AddBookForm'
import BookList from '../BookListAdmin'

const M10 = () => {
  return (
    <div >

      <h1>Library Management by Admin </h1>

      <div className="options-buttons mt-4">
      <Link to="/home">
          <button className="btn btn-primary m-3">Home</button>
        </Link>
        <Link to="/bookform">
          <button className="btn btn-primary m-3">Add New Book</button>
        </Link>
        <Link to="/bookDetails">
          <button className="btn btn-primary mr-3">Show Book Details</button>
        </Link>
        


      </div>
      {/* <AddBookForm></AddBookForm> */}
      {/* <BookList></BookList> */}

    </div>
  )
}

export default M10