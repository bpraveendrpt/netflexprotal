import React from 'react'
import MoviesList from './MoviesList';
import { useSelector } from 'react-redux';

const SecoundaryContainer = () => {
  
  const movies = useSelector(store => store.movies);
  
  return (
    movies.nowPlayingMovies && (
      <div className=' bg-black'>
        <div className=" -mt-36  pl-12 relative z-20 bg-black"> 
        <MoviesList title={"Now Playing"}  movies={movies.nowPlayingMovies}/>
        <MoviesList title={"Trending "}  movies={movies.nowPlayingMovies}/>
        <MoviesList title={"Popular "}  movies={movies.nowPlayingMovies}/>
        <MoviesList title={"Upcoming Movies"}  movies={movies.nowPlayingMovies}/>
        <MoviesList title={"Horror"}  movies={movies.nowPlayingMovies}/>
      </div>
    </div>
    )
    
  )
}

export default SecoundaryContainer;