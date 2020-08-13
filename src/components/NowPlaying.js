import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Link,
  useRouteMatch
} from "react-router-dom";
const axios = require('axios');

export class NowPlaying extends Component {
  state = {
    now_playing: {
        results:[]
    }
}
    componentDidMount(){

        axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=3fe0146e60722e9fc1e2731f6e6bea06&language=en-US&page=1`)
        .then(response => this.setState({
            now_playing: response.data
            }))
        .catch(function(err){
            console.log(err)
      })
    }
  render() {
      const {now_playing} = this.state;
      //console.log(videos);
      
      
        
          
    return (
      <div className="row__feed-panel">
         <h2>Now Playing</h2>
              <div className="row__feed">
                  
                {this.state.now_playing.results.map( (now, index) => 
                <div className="row__movie-poster" key={index}>
                   <Link to={`/${now.id}`}>
                    <img src={"https://image.tmdb.org/t/p/w200"+now.poster_path} alt={now.original_title}/>
                    </Link>   
                </div>
                )}
              </div>
 
        
        
      </div>  
    )
  }
}

export default NowPlaying
