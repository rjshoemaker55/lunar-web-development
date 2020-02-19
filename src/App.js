import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Landing} />
      <Route exact path='/home' component={Home} />
    </Router>
  );
}

export default App;
