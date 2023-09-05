import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Components/Home';
import About from '../Components/About';
import Play from '../Components/Play';

function MyRoutes() {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/about' element={ <About /> } />
      <Route path='/play' element={ <Play /> } />
    </Routes>
  );
}

export default MyRoutes;