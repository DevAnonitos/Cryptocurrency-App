import React from 'react';

import {Route, Routes, Link } from "react-router-dom";

import { Layout, Typography, Space } from "antd";

import { 
  Exchanges, 
  Homepage, 
  News, 
  Cryptocurrencies, 
  CryptoDetails, 
  Navbar 
} from './components';
import './App.css';


function App() {
  return (
    <>
      <div className='app'>
        {/* ======================NAVBAR====================== */}
        <div className='navbar'>
          <Navbar />
        </div>
        {/* ++++++++==============Main===============+++++++++ */}
        <div className='main'>
          <Layout />
        </div>
        {/* =====================Footer======================= */}
        <div className='footer'>

        </div>
      </div>
    </>
  );
}

export default App;
