import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Success from './components/Success'
import Home from './components/Home'
import ShowAlumni from './components/BookListAdmin'
import AlumniForm from './components/AddBookForm'
import StudentPage from './components/StudentPage'




export default function Routing() {
    return (
        <div>
         <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='show' element={<ShowAlumni></ShowAlumni>}></Route>
          <Route path='add' element={<AlumniForm></AlumniForm>}> </Route>
          <Route path='home' element={<Home></Home>}> </Route>
          <Route path='std' element={<StudentPage></StudentPage>}> </Route>
         
         </Routes>
        
        </div>
    )
}
