import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routing';
import Home from './components/Home';
import Success from './components/Success';
import ShowAlumni from './components/BookListAdmin';
import Navbar from './components/Navbar';
import AdmSideNavRoute from './components/AdminConsole/AdmSideNavRoute';
import 'bootstrap-icons/font/bootstrap-icons.css';
import NavbarAdmin from './components/NavbarAdmin';
import NavbarFacultys from './components/NavbarFacultys';
import FacultySideNavRoute from './components/FacultyConsole/FacultySideNavRoute';
import NavbarStudent from './components/NavbarStudent';
import StdSideNavRoute from './components/StudentConsole/StdSideNavRoute';

function App() {
  return (
    <div className="App">
  
    {/* <BrowserRouter>
  <Routing></Routing>
    </BrowserRouter> */}
     
    <Navbar></Navbar>
    <NavbarAdmin></NavbarAdmin>
    <AdmSideNavRoute></AdmSideNavRoute> 


    {/* <Navbar></Navbar>
    <NavbarFacultys></NavbarFacultys>
    <FacultySideNavRoute></FacultySideNavRoute> */}

{/* <Navbar></Navbar>
<NavbarStudent></NavbarStudent>
<StdSideNavRoute></StdSideNavRoute> */}


    </div>
  );
}

export default App;
