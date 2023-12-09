import React, { useState } from 'react'
import { IMG_CDN_URL } from '../utils/constants'
import Model from './Model';
import useSelectedMovieITrailer from '../Hooks/useSelectedMovieITrailer';
import ModelVideo from './ModelVideo';


  const MovieCard = ({movieId, posterPath}) => {

    // console.log(movieId);
  const preselectMovieId = '1075794';
  const[showModel, setShowModel] = useState(false);
  const [selectMovieId, setSelectMovieId] = useState(null);
  const viewTailerVideo = (e) =>{
   
    setSelectMovieId(e.target.getAttribute('data-id'));
    //useSelectedMovieITrailer(selectMovieId);
    setShowModel(true);
    
  }
// console.log(selectMovieId);

// console.log(preselectMovieId + "hyf555");

if(!posterPath) return null;
  return (
    <>
    <div className='w-48 pr-4'>
        <img alt='Movie Card' 
        data-id ={movieId}
        src={IMG_CDN_URL + posterPath}
        onClick={viewTailerVideo}
        />
    </div>
   
    <ModelVideo isVisable={showModel} selectMovieId={selectMovieId } onclose={()=>setShowModel(false)}/>
    </>
  )
}

export default MovieCard