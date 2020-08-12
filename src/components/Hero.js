import React, { Component } from 'react'
import {
  Link,
} from "react-router-dom"
import './Hero.css'
const axios = require('axios');

export class Hero extends Component {
    state = {
        featured: {
          results:[]
        }
    }
    componentDidMount(){
     
      axios.get('https://api.themoviedb.org/3/movie/popular?api_key=3fe0146e60722e9fc1e2731f6e6bea06&language=en-US&page=44')
            .then(response => this.setState({
                    featured: response.data
                }))
            .catch(function(err){
                console.log(err)
          })
        }
  render() {
    const {featured} = this.state;
   
    return (
      <div>
        {this.state.featured.results.slice(0, 1).map( (feature, id) =>
              
              <div className="hero_row" key={feature.id} style={{
                backgroundImage: `url(${"https://image.tmdb.org/t/p/original"+feature.backdrop_path})`
              }}>
              
                  <div className="single__view-gradient"></div>
                  <div className="featured__panel-content">
                    <h1>{feature.title}</h1>
                    <p>{feature.overview}</p>
                    <Link to={`/${feature.id}`}>View</Link>
                 </div>
                {/*<Video id={movie.id} /> */} 
               
              </div>  
                    
          )}
      </div>
    )
  }
}

export default Hero
