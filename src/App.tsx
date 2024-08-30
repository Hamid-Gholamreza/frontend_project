import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router';
import login from './pages/login';
import register from './pages/register';
import homepage from './pages/homepage';




function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' Component={login} />
        <Route path='/register' Component={register} />
        <Route path='/home' Component={homepage} />
      </Routes>
    </Router>
  );
}

export default App;
