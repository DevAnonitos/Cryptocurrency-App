import React from 'react';

import { Switch, Route, Link } from 'react-router-dom';

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
          <Layout>
            <div className='routes'>
              <Switch>
                <Route exact path="/">
                  <Homepage />
                </Route>
                <Route exact path="/exchanges">
                  <Exchanges />
                </Route>
                <Route exact path="/cryptocurrencies">
                  <Cryptocurrencies />
                </Route>
                <Route exact path="/crypto/:coinId">
                  <CryptoDetails />
                </Route>
                <Route exact path="/news">
                  <News />
                </Route>
              </Switch>
            </div>
          </Layout>
        </div>
        {/* =====================Footer======================= */}
        <div className='footer'>
          <Typography.Title 
            level={5} 
            style={{ color: 'white', textAlign: 'center' }}
          >
            Copyright © 2023
            <Link to="/">
             CryptosVeris Inc.
            </Link> <br />
            All Rights Reserved.
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </>
  );
}

export default App;
