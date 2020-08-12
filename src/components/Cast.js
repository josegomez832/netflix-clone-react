import React, { useEffect , useState } from 'react'
import './Cast.css'
const axios = require('axios');
function Cast(props){
 
    
    const [data, setData] = useState({
      cast:[]
    });
    const [error, setError] = useState('');
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${props.id}/credits?api_key=3fe0146e60722e9fc1e2731f6e6bea06`)
      .then(res => {
        setData(res.data);
        
    })
      .catch(err => {
        setError(err.message);
        
    })
  });
 
 
    return (
      <div>
        <ul className="casts__data">
          {data.cast.slice(0, 4).map( (actor, key) =>
            <li key={key}>
              <div className="casts__image-wrapper">
                <img src={"https://image.tmdb.org/t/p/original"+actor.profile_path} alt={actor.name} />
              </div>
              <p>{actor.name}</p>
            </li>
          )}
        </ul>
        
      </div>
    )
  
}

export default Cast
