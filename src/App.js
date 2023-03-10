import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Addtocart from './pages/Addtocart';
import Product from './pages/Product';
import About from './pages/About';
import ViewProduct from './pages/ViewProduct';
import Home from './pages/Home';
import Navbar from './components/Navbar';



const App = () => {
  return (

    <Router>
 
      <Routes>
      <Route path="/nav" element={<Navbar/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/all" element={<Product/>}/>
      <Route path="/add" element={<Addtocart/>}/>

        <Route path="/about" element={<About/>}/>
        <Route path="/products/:id" element={<ViewProduct/>}/>
      </Routes>
   
    </Router>
 
  );
}

export default App;
