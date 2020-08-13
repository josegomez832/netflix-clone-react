import React, { Component } from 'react'
const axios = require('axios');

export class Video extends Component {
  state = {
    latest: []
}
    componentDidMount(){

        axios.get(`https://api.themoviedb.org/3/movie/latest?api_key=3fe0146e60722e9fc1e2731f6e6bea06&language=en-US&page=1`)
        .then(response => this.setState({
            latest: response.data
            }))
        .catch(function(err){
            console.log(err)
      })
    }
  render() {
      const {latest} = this.state;
      //console.log(videos);
      
      
        
          
    return (
      <div className="row__feed-panel">
         
              
                  <h2>Latest</h2>
                  <h4>{this.state.latest.poster_path}</h4>
                <img src={"https://image.tmdb.org/t/p/w200"+this.state.latest.poster_path} />
               
              
 
        
        
      </div>  
    )
  }
}

export default Video
