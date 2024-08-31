import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router';
import login from './pages/login';
import register from './pages/register';
import Homepage from './pages/homepage';
import HouseAdPage from './pages/houseAdPage';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' Component={login} />
        <Route path='/register' Component={register} />
        <Route path='/home' Component={Homepage} />
        <Route path='/ad/:id' Component={HouseAdPage} />
      </Routes>
    </Router>
  );
}

export default App;
