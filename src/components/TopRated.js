import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
const axios = require('axios');

export class TopRated extends Component {
  state = {
    top_rated: {
        results:[]
    }
}
    componentDidMount(){

        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=3fe0146e60722e9fc1e2731f6e6bea06&language=en-US&page=1`)
        .then(response => this.setState({
            top_rated: response.data
            }))
        .catch(function(err){
            console.log(err)
      })
    }
  render() {
      const {top_rated} = this.state;
      //console.log(videos);
      
      
        
          
    return (
      <div className="row">
         <h2>Top Rated</h2>
              <div className="row__feed">
                  
                {this.state.top_rated.results.map( (top, index) => 
                <div className="row__movie-poster" key={index}>
                   <Link to={`/${top.id}`}>
                    <img src={"https://image.tmdb.org/t/p/w200"+top.poster_path} alt={top.original_title}/>
                    </Link>   
                </div>
                )}
              </div>
 
        
        
      </div>  
    )
  }
}

export default TopRated
