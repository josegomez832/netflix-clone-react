import React, { Component } from 'react';
import './Home.css';
import {
  BrowserRouter as Router,
  Link,
  useRouteMatch
} from "react-router-dom";
import Hero from './Hero'
import Popular from './Popular'
import TopRated from './TopRated'
import Upcoming from './Upcoming'
import NowPlaying from './NowPlaying'
const axios = require('axios');

export class Home extends Component {


  render() {

      
    return (
      <div className="page__wrapper">
        <Hero />
        <div className="row">
          <Popular />
          <TopRated />
          <Upcoming />
          <NowPlaying />
        </div>        
    </div>
     
    )
  }
}

export default Home