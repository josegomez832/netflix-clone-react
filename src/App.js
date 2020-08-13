import React from 'react';

import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home';
import Single from './components/Single';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
      <div className="footer"><p>See project in <a href="https://github.com/josegomez832/netflix-clone-react" target="_blank">Github</a></p></div>
    </div>

    </Router>
    
  );
}

export default App;
