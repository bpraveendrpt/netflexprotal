import React from 'react'
import MovieCard from './MovieCard';

const MoviesList = ({ title, movies }) => {
   

  return (
    <div className="px-6">
        <div className=' text-3xl py-2 text-white '> 
            <h1>{title}</h1>
        </div>
        <div className="flex overflow-x-scroll">
          <div className="flex">
              
              { movies && movies.map((movie) =>(
                  <MovieCard key={movie.id} movieId={movie.id} posterPath={movie.poster_path}/>
                  
              ))
              }            
          </div>
        </div>
    </div>
  )
}

export default MoviesList