import React, { useEffect , useState } from 'react'
import './Related.css'
import {
    Link,
  } from "react-router-dom";
const axios = require('axios');
function Related(props){
 
    
    const [data, setData] = useState({
      results:[]
    });
    const [error, setError] = useState('');
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${props.id}/similar?api_key=3fe0146e60722e9fc1e2731f6e6bea06&language=en-US&page=1`)
      .then(res => {
        setData(res.data);
        
    })
      .catch(err => {
        setError(err.message);
        
    })
  });
    if(data.total_results == 0){
      return null
    }else{
      return (
        <div className="related">
          <h3>Similar Videos</h3>
          <ul className="related__data">
            {data.results.slice(0,6).map( (movie, key) =>
              <li key={key}>
              <Link to={`/${movie.id}`}>
                <img src={"https://image.tmdb.org/t/p/original"+movie.backdrop_path} alt={movie.title} />
                <span>{movie.title}</span>
                </Link>
              </li>
            )}
          </ul>
          
        </div>
      )
    }  
  
}

export default Related
