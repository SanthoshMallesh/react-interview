import React from 'react';
import { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Counter from './components/Counter';
import SearchTable from './components/SearchTable';
import SearchTableAxios from './components/SearchTableAxios';
import SearchTableFetch from './components/searchTableFetch';
import GetDataOnClick from './components/GetDataOnClick';
import SelectBoxOnApi from './components/SelectBoxOnApi';

function App() {
  return (
  <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/counter" element={<Counter />}/>
        <Route path="/searchtable" element={<SearchTable />}/>
        <Route path="/searchtableaxios" element={<SearchTableAxios />}/>
        <Route path="/searchtablefetch" element={<SearchTableFetch />}/>
        <Route path="/getDataOnClick" element={<GetDataOnClick />}/>
        <Route path="/selectBoxOnApi" element={<SelectBoxOnApi />}/>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
