import React, { useEffect } from 'react'
//import useMovieTrailer from '../Hooks/useMovieTrailer';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addselectTrailerVideo } from '../utils/movieSlice';

const Model = ({isVisable, onclose, selectMovieId}) => {


    const  setTrailerVideo = useSelector((store) => store.movies?.selectTrailerVideo);
    const dispatch  = useDispatch();

    const getMovieTrailerVideo = async () =>{
        const data = await fetch (
            "https://api.themoviedb.org/3/movie/"+setTrailerVideo?.key +"/videos?language=en-US", 
                API_OPTIONS
            )
            
            const json = await data.json();
            const filterData = json.results.filter((vedio) => vedio.type === "Trailer" );
            const trailer = filterData.length ? filterData[0] : json.results[0];
            // setTrailerId(trailer.key);  
            dispatch(addselectTrailerVideo(trailer));

    

   }


   
    useEffect( () =>{
         
        !setTrailerVideo  &&  getMovieTrailerVideo();

     },[]);

    if(!isVisable) return null;
    return (
        <div className=' m-10 fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className=' w-[600px] flex flex-col'>
                <button className=' text-white text-xl place-self-end'
                onClick={()=>onclose()}>
                    ❌
                </button>
                <div className=" bg-white p-2 rounded">
                    Praveen Kumar Model POP UP
                    Id:{selectMovieId}
                    <iframe 
                    className=' w-auto aspect-video' 
                      src={"https://www.youtube.com/embed/" + selectMovieId?.key +"?&autoplay=1&mute=1" }
                        title="YouTube video player"                  
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen>

                    </iframe> 
                </div>

            </div>

        </div>
    )
}

export default Model;