import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' />
        <Route path='/register' />
      </Routes>
    </Router>
  );
}

export default App;
