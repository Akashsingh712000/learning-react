import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import NotFound from './pages/errorpage';
import Productdetail from './pages/Productdetail';
import Product from './pages/Product';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/product/detail/:id" element={<Productdetail />} />
         <Route path="*" element={<NotFound />} />
         <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  )
}

export default App