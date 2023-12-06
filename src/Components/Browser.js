
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";

import SecoundaryContainer from "./SecoundaryContainer";
import MainContainer from "./MainContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import useTopRatedMovies from "../Hooks/useTopRetedMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
// import { useRef, useState } from "react";


const Browser =()=>{

    const showGptSearch = useSelector(store => store.gpt.showGptSearch);
    useNowPlayingMovies();
    usePopularMovies();
    useUpcomingMovies();
    useTopRatedMovies();

    // const [incremt, setIncrement] = useState(0);
    // const name = useRef(null);
    

    // const  incremtDo = () =>{
    //   setIncrement(incremt + 1);
    // }
    
    // const  decremtDo = () =>{
    //   setIncrement(incremt - 1);
    // }

    //const [username, setName] = useState();
    // const eventHandle =(e) =>{

    // setName(e.target.value);
    // }

    return(
        <div>
             <Header /> 
             {showGptSearch ?(
                  <GptSearch />
              ) : (
                <>
                  <MainContainer /> 
                  <SecoundaryContainer />
                </>
              )
             }           
             
        {/* <div className="">

            <input 
            className=" text-lg w-200 bg-red-300 text-white"
            type="text"
            onChange={eventHandle}
            value={username}
            
            />
          <h1 className=" text-red-600">Name : {username}</h1>
            



        </div>


            <div className='todo'>

                
          
        <button className=" m-1 p-2 text-lg font-bold bg-black text-white"
        onClick={incremtDo}>Add</button>
        <p className=" text-lg text-red-500">{incremt}</p>
        <button className=" m-1 p-2 text-lg font-bold  bg-black text-white"
        onClick={decremtDo}>remove</button>

      </div> */}

        </div>
    
    )
}
export default Browser;