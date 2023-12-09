import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import {  addselectTrailerVideo } from "../utils/movieSlice";

const useSelectedMovieITrailer = (movieId) => {
    
    const dispatch  = useDispatch();
    
    //const  selectedTrailerVideo = useSelector((store) => store.movies?.selectTrailerVideo);
    
    const getTrailerideos = async () =>{
        console.log(movieId)
        const data = await fetch (
            "https://api.themoviedb.org/3/movie/"+ movieId +"/videos?language=en-US", 
                API_OPTIONS
            )
        const json = await data.json();
        const filterData = json.results.filter((vedio) => vedio.type === "Trailer" );
        const trailer = filterData.length ? filterData[0] : json.results[0];
        // setTrailerId(trailer.key);  
        dispatch(addselectTrailerVideo(trailer));

    }
    useEffect ( () =>{
       movieId && getTrailerideos();
    },[movieId]);
}
export default useSelectedMovieITrailer;