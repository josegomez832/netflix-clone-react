import React, { useEffect , useState } from 'react'
import './Single.css'
import {
  useParams,

} from "react-router-dom";
import Cast from './Cast'
import Related from './Related'
import ReactPlayer from 'react-player/youtube'
import smoothscroll from 'smoothscroll-polyfill';
 
// kick off the polyfill!
smoothscroll.polyfill();
const axios = require('axios');

function Single(){
 
  let { id } = useParams();


  const [resp, setAPIData] = useState({ data: [], results: [] });

  useEffect(() => {
    const fetchData = async () => {
      const respMovie = await axios(
        `https://api.themoviedb.org/3/movie/${id}?api_key=3fe0146e60722e9fc1e2731f6e6bea06&language=en-US`
      );
      const respVideos = await axios(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=3fe0146e60722e9fc1e2731f6e6bea06&language=en-US`
      );

      setAPIData({ data: respMovie.data, results: respVideos.data });
    };

    fetchData();
  }, [id]);
    if (!resp.results.results) {
      return <span>Loading...</span>;
  }

    return (
      
      <div className="single__view-panel">
          
          <div className="hero" style={{ 
            backgroundImage: `url(${"https://image.tmdb.org/t/p/original"+resp.data.backdrop_path})`
            }}>
            <div className="single__view-gradient"></div>
            <div className="single__view-content">
                <h1>{resp.data.title}</h1>
                <h4>{resp.data.tagline}</h4>
                
                <p>{resp.data.overview}</p>
               
                <Cast id={resp.data.id} />
            </div>
  
        </div>
        <div id="trailer">
          <ReactPlayer
              url={'https://www.youtube.com/watch?v='+resp.results.results[0].key}
              light={true}
              playing={false}
              className='react-player'
                width='100%'
                height='100%'
              />
          </div>
        <Related id={resp.data.id} />
      </div>
    )
  
}

export default Single
