import React, { Component } from 'react'
import {
  Link,
} from "react-router-dom";
const axios = require('axios');

export class Upcoming extends Component {
  state = {
    upcoming: {
        results:[]
    }
}
    componentDidMount(){

        axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=3fe0146e60722e9fc1e2731f6e6bea06&language=en-US&page=1`)
        .then(response => this.setState({
            upcoming: response.data
            }))
        .catch(function(err){
            console.log(err)
      })
    }
  render() {
      const {upcoming} = this.state;
      //console.log(videos);
      
      
        
          
    return (
      <div className="row__feed-panel">
         <h2>Upcoming</h2>
              <div className="row__feed">
                  
                {this.state.upcoming.results.map( (upcome, index) => 
                <div className="row__movie-poster" key={index}>
                   <Link to={`/${upcome.id}`}>
                    <img src={"https://image.tmdb.org/t/p/w200"+upcome.poster_path} alt={upcome.original_title}/>
                    </Link>   
                </div>
                )}
              </div>
 
        
        
      </div>  
    )
  }
}

export default Upcoming
