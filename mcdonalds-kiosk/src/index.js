import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Cart from './components/Cart';
import products from './data/data';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cart" element={<Cart props={products} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


