import React from 'react'
import useSelectedMovieITrailer from '../Hooks/useSelectedMovieITrailer';
import { useSelector } from 'react-redux';

const ModelVideo = ({isVisable, onclose, selectMovieId}) => {
    useSelectedMovieITrailer(selectMovieId);
    const  setTrailerVideo = useSelector((store) => store.movies?.selectTrailerVideo);
    
    if(!isVisable) return null;
    return (
        
            <div className=' m-10 fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
                <div className=' w-[90%] h-auto flex flex-col'>
                    <button className=' text-white text-xl place-self-end'
                    onClick={()=>onclose()}>
                        ❌
                    </button>
                    <div className=" bg-white p-2 rounded">
                        
                        <iframe 
                        className=' w-auto aspect-video w-full' 
                        src={"https://www.youtube.com/embed/" + setTrailerVideo?.key +"?&autoplay=1&mute=1" }
                            title="YouTube video player"                  
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen>

                        </iframe> 
                    </div>

                </div>

            </div>
        
    )
}

export default ModelVideo