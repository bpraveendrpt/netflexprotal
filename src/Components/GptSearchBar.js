import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'

import openai from '../utils/openai';

import { API_OPTIONS } from '../utils/constants';
import { addGptMovieresult } from '../utils/gptSlice';

const GptSearchBar = () => {

const dispatch = useDispatch();

  const langKey = useSelector(store => store.config.lang);
  const searchText = useRef(null);

  // Search Movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" +
    movie +
    "&include_adult=false&language=en-US&page=1",
     API_OPTIONS
    );
    const json = await data.json();
    return json.results;

  };
  

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    // make an API call to GPT API and get the Movie results
    const gptQuery = " Act as Movie Recommendation system and suggest some movies for the query : " +searchText.current.value +
    ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Results: Gadar, sholay,  Don, Golmaal, Koi Mil Gayan ";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });
    // console.log(gptResults.choices);


    if(!gptResults.choices){
      // TODO Write Error Handling
  
     }
     // console.log(gptResults.choices?.[0]?.message?.content);
  
     const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

     const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
     const tmdbResults = await Promise.all(promiseArray);

     console.log(tmdbResults);
     //dispatch(addGptMovieresult(tmdbResults))
     dispatch(addGptMovieresult({movieNames: gptMovies, movieResults: tmdbResults}));

   };

  return (
    <div className=' pt-[20%] flex justify-center'>
        <form className=" w-1/2 grid grid-cols-12 bg-black" onSubmit={(e)=> e.preventDefault()}>
            <input 
            type='text'
            ref={searchText}
            className='p-4 m-4 col-span-9'
            placeholder={lang[langKey].gptSearchtext}
            />
            <button className=' col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'
            onClick={handleGptSearchClick}>
                {lang[langKey].search}
            </button>

        </form>
        
    </div>
  )
  }

export default GptSearchBar