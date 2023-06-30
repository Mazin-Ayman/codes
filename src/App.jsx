import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { ErrorBoundary } from 'react-error-boundary';
import './App.css'
import One from './components/One';
import Two from './components/Two';
import Three from './components/Three';
import Four from './components/Four';
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
        <Route path='/cr' element={<Four />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
