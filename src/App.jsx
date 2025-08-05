import React from 'react'
import NavBar from './components/navbar/navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import Formss from './components/forms/forms';
import Gallery from './pages/Gallery/gallery';
import LoginPage from './pages/Login/login';
import ErrorPage from './pages/errorpage/errorpage';

function App() {
  return (
    <>
        <NavBar link1={"Home"} link2="Forms"/>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/forms' element={<Formss/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/*' element={<ErrorPage/>}/>
        </Routes>
    </>
  )
}

export default App