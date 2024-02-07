import React from "react";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import { CartContext } from './context/CartContext';
import { useContext } from 'react';

import { Route, Routes, BrowserRouter } from "react-router-dom"
import FinishedOrder from "./components/FinishedOrder";


function App() {
  const {cartItems} = useContext(CartContext)
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/cart" element={<Cart props={cartItems} />} />
        <Route path="/finished" element={<FinishedOrder />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
