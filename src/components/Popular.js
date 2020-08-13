import React, { Component } from 'react';
import './Popular.css';
import {
  BrowserRouter as Router,
  Link,
  useRouteMatch
} from "react-router-dom";
const axios = require('axios');

export class Popular extends Component {

state = {
    movies: {
      results:[]
    },
    videos:{
      results:{}
    }
}
componentDidMount(){
 
  axios.get('https://api.themoviedb.org/3/movie/popular?api_key=3fe0146e60722e9fc1e2731f6e6bea06')
        .then(response => this.setState({
                movies: response.data
            }))
        .catch(function(err){
            console.log(err)
      })
    }

  render() {
     
      const {movies} = this.state;
      
    return (
      <div className="row__feed-panel">
                
            <h2>Popular</h2>
            <div className="row__feed">
              {/*https://image.tmdb.org/t/p/original/ */}
              {this.state.movies.results.map( (movie, id) =>
              
                  <div className="row__movie-poster" key={movie.id}>
                    <Link to={`/${movie.id}`}>
                      <img src={"https://image.tmdb.org/t/p/original"+movie.poster_path} />
                     
                    {/*<Video id={movie.id} /> */} 
                    </Link>    
                  </div>  
                        
              )}
            </div>    
            
      </div>
     
    )
  }
}

export default Popular