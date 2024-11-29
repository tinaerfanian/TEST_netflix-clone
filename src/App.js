import './App.css';
import React from 'react';

import Navbar from './components/Navbar';

import Footer from './components/Footer';
import MovieGallery from './components/Movies';

const App = () => {
  return (
    <div className="bg-dark text-light">
    <Navbar />
    <div className="container">
    <MovieGallery   film={'Harry potter'} />
    <MovieGallery  film={'Godfather'}/>
    <MovieGallery film={'Lord of the rings'}/>
    <MovieGallery  film={'Marvel'}/>

     
    </div>
    <Footer />
  </div>
  );
};

export default App;