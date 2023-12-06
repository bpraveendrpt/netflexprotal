import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggesions from './GptMovieSuggesions'
import { bg_image } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className=" absolute -z-10 ">
                <img src= {bg_image}
                alt="Logo"
                />

            </div>
      <GptSearchBar />
      <GptMovieSuggesions />
    </div>
  )
}

export default GptSearch