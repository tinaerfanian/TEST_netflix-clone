import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Movies from './components/Movies';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-dark text-light">
      <Navbar />
      <div className="container">
        <Movies title="Harry Potter Saga" searchQuery="Harry Potter" />
        <Movies title="Lord of the Rings Saga" searchQuery="Lord of the Rings" />
        <Movies title="Marvel Cinematic Universe" searchQuery="Marvel" />
      </div>
      <Footer />
    </div>
  );
};

export default App;