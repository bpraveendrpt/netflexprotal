import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {

    const dispatch  = useDispatch();
    console.log(movieId + "praveen");

    const getMovieVideos = async () =>{
        const data = await fetch (
            "https://api.themoviedb.org/3/movie/1075794/videos?language=en-US", 
                API_OPTIONS
            )
        const json = await data.json();
        const filterData = json.results.filter((vedio) => vedio.type === "Trailer" );
        const trailer = filterData.length ? filterData[0] : json.results[0];
        // setTrailerId(trailer.key);  
        dispatch(addTrailerVideo(trailer));
    }
    useEffect ( () =>{
        getMovieVideos();
    },[]);
}
export default useMovieTrailer;