import React from 'react'
import MoviesList from './MoviesList';
import { useSelector } from 'react-redux';

const SecoundaryContainer = () => {
  
  const movies = useSelector(store => store.movies);
  
  return (
    movies.nowPlayingMovies && (
      <div className=' bg-black'>
        <div className="sm:mt-2 md:mt-5 lg:-mt-36 xl:-mt-36  pl-12 relative z-20 bg-black"> 
        <MoviesList title={"Now Playing"}  movies={movies.nowPlayingMovies}/>
        <MoviesList title={"Popular "}  movies={movies.popularMovies}/>
        <MoviesList title={"Top Rated "}  movies={movies.topRatedMovies}/>
        <MoviesList title={"Upcoming Movies"}  movies={movies.upComingMovies}/>
        {/* <MoviesList title={"Horror"}  movies={movies.nowPlayingMovies}/> */}
      </div>
    </div>
    )
    
  )
}

export default SecoundaryContainer;