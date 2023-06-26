import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css'
import One from './components/One';
import Two from './components/Two';
import Three from './components/Three';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import Footer from './components/Footer';

function App() {

  return (
    <div className='app'>
      <Navbar2 />
      <Routes>
        <Route path='/' element={<One />} />
        <Route path='/code' element={<Two />} />
        <Route path='/short' element={<Three />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
