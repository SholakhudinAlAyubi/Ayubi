import logo from './logo.svg';
import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const Product = lazy(() => import('./Product'));
const Inspirasi = lazy(() => import('./Inspirasi'));
const Product2 = lazy(() => import('./Product2'));
const Footer = lazy(() => import('./Footer'));
const Product3 = lazy(() => import('./Product3'));
const Tips = lazy(() => import('./Tips'));
const Produk = lazy(() => import('./Produk'));
const Product4 = lazy(() => import('./Product4'));
const Product5 = lazy(() => import('./Product5'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Inspirasi" element={<Inspirasi />} /> 
        <Route path="/Product2" element={<Product2 />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/Product3" element={<Product3 />} />
        <Route path="/Tips" element={<Tips />} />
        <Route path="/Produk" element={<Produk />} />
        <Route path="/Product4" element={<Product4 />} />
        <Route path="/Product5" element={<Product5 />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;
