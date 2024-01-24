// import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Home = () => {
//     return (
//         <div className="=className="container text-center"">
            //<h2>Welcome to E-library</h2>
            //<p>Explore our collection of books and manage your library here.</p>

//             <h2>Home</h2>
//          <Link to={"/show"}> <a href=""><button onc>view-Edit-Delete Book</button></a> </Link>
//          <Link to={"/add"}><a href=""> <button>Add Book</button></a></Link>

//         </div>
//     );
// };

// export default Home;


import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import './Home.css'; // Import a custom CSS file for additional styling if needed

const Home = () => {
    return (
        <div className="container text-center">
             <h2>Home</h2>
            <h2>Welcome to E-library</h2>
            <p>Explore our collection of books and manage your library here.</p>

            <div className="options-buttons mt-4">
                <Link to="/show">
                    <button className="btn btn-success mr-3">View/Edit/Delete Books</button>
                </Link>
                <Link to="/add">
                    <button className="btn btn-success">Add Book</button>
                </Link>
                <Link to="/std">
                    <button className="btn btn-danger">Student</button>
                </Link>
                
            </div>

            <div className="book-images">
                {/* Display some book images here */}
                {/* You can use an image carousel or grid to showcase book covers */}
                {/* Example: */}
                <img src="/images/book1.jpg" alt="Book 1" />
                <img src="/images/book2.jpg" alt="Book 2" />
                <img src="/images/book3.jpg" alt="Book 3" />
            </div>

            
        </div>
    );
};

export default Home;
