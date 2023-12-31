import { useDispatch, useSelector} from "react-redux";
import { addUpComingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useUpcomingMovies =() =>{

    const dispatch = useDispatch(); 
    const upComingMovies = useSelector(
        (store) => store.movies.upComingMovies
    );
    const getuseUpcomingMovies = async () =>{
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/upcoming?page=1", 
            API_OPTIONS
        );
        const upcomingMovies = await data.json(); 
       //console.log(upcomingMovies.results);
        dispatch(addUpComingMovies(upcomingMovies.results));

    }
    useEffect(()=>{
        
       !upComingMovies &&  getuseUpcomingMovies();
    },
    []);

}
export default useUpcomingMovies;