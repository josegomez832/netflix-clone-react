import React, { Component } from 'react'
import logo from './../Netflix_Logo_RGB.png';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
export class Navbar extends Component {
    componentDidMount() {
        const script = document.createElement("script");
        script.async = true;
        script.src = "/scripts.js";
        //For head
        document.head.appendChild(script);
    
        
      }
  render() {
      
    return (
     
         <div className="navbar" id="navbar">
          <ul className="nav">
          
            <li>
              <Link to="/"><img src={logo} alt="Netflix Clone" className="logo" /></Link>
            </li>
          </ul>
          </div>
      
    )
  }
}

export default Navbar
