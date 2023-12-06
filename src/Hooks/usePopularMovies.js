import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addPopularMovies } from '../utils/movieSlice';

const usePopularMovies = () => {

    const dispatch = useDispatch();
    const getPopularPlayingMovies = async () =>{
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/popular?page=1", 
            API_OPTIONS
        );
        const popularMovies = await data.json(); 
       // console.log(popularMovies.results);
        dispatch(addPopularMovies(popularMovies.results));
        
    }
    
    useEffect(()=>{
        
        getPopularPlayingMovies();

    },
    []);

}
export default usePopularMovies;
