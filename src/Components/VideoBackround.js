import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'

const VideoBackround = ({movieId}) => {

    const getMovieVideos = async () =>{
        const data = await fetch ('https://api.themoviedb.org/3/movie/1075794/videos?language=en-US', 
        API_OPTIONS
        )
        const json = await data.json();
        console.log(json);
        const filterData = json.results.filter((vedio) => vedio.type === "Trailer" );
        const trailer = filterData.length ? filterData[0] : json.results[0];
        console.log(trailer);
    }
    useEffect ( () =>{
        getMovieVideos();
    },[])
  return (
    <div>VideoBackround</div>
  )
}

export default VideoBackround