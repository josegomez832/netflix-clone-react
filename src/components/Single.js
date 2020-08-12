import React, { useEffect , useState } from 'react'
import './Single.css'
import {
  useParams,

} from "react-router-dom";
import Cast from './Cast'
import Related from './Related'
const axios = require('axios');

function Single(){
 
  let { id } = useParams();

  const [data, setData] = useState({
    genres:[]
  });
 
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.themoviedb.org/3/movie/${id}?api_key=3fe0146e60722e9fc1e2731f6e6bea06&language=en-US`,
      );
 
      setData(result.data);
    };
    // eslint-disable-line react-hooks/exhaustive-deps
    fetchData();
  }, []);

  //console.log(data);
    return (
      
      <div className="single__view-panel">
          
          <div className="hero" style={{ 
            backgroundImage: `url(${"https://image.tmdb.org/t/p/original"+data.backdrop_path})`
            }}>
            <div className="single__view-gradient"></div>
            <div className="single__view-content">
                <h1>{data.title}</h1>
                <h4>{data.tagline}</h4>
                
                <ul className="genres">
                      {data.genres.map( (genre, key) =>
                        <li key={key}>{genre.name}</li>
                      )}
                </ul>
                <p>{data.overview}</p>
                <p><a href="#trailer" className="btn btn-play" id="trailerBTN">Play Trailer</a></p>
                <Cast id={data.id} />
            </div>
  
        </div>
       
        <Related id={data.id} />
      </div>
    )
  
}

export default Single
