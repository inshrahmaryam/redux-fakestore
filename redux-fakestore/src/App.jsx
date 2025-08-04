import React from 'react';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails'; // ✅ Matches your filename
import ProductList from './components/ProductList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product/:id' element={<ProductDetails />} /> 
      </Routes>
    </Router>
  );
}

export default App;
