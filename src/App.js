import React from 'react';

import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home';
import Single from './components/Single';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {

  return (
    <Router>
        <div className="App">
         
        <Navbar />
      
      <Switch>
        <Route exact path="/">
        <Home />
      </Route>
      <Route path="/:id" children={<Single/>} />
      </Switch>
    </div>

    </Router>
    
  );
}

export default App;
