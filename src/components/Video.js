import React, { useEffect , useState } from 'react'
import './Video.css'
const axios = require('axios');

function Video(props){
  
  const [data, setData] = useState({
    results:[]
  });
  const [error, setError] = useState('');

      
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${props.id}/videos?api_key=3fe0146e60722e9fc1e2731f6e6bea06&language=en-US`)
      .then(res => {
        setData(res.data);
        
    })
      .catch(err => {
        setError(err.message);
        
    })
  });
        
          
    return (
      <div id="trailer">
        {data.results.slice(0,1).map( (youtube, index) => 
          <iframe width="100%" src={"https://www.youtube.com/embed/"+youtube.key} key={index} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      )}
        
      </div>  
    )
  
}

export default Video
