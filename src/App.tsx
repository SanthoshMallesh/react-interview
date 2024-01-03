import React from 'react';
import { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Counter from './components/Counter';

function App() {
  return (
  <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/counter" element={<Counter />}/>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
