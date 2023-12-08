
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";

import SecoundaryContainer from "./SecoundaryContainer";
import MainContainer from "./MainContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import useTopRatedMovies from "../Hooks/useTopRetedMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browser =()=>{

    const showGptSearch = useSelector(store => store.gpt.showGptSearch);
    useNowPlayingMovies();
    usePopularMovies();
    useUpcomingMovies();
    useTopRatedMovies();

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
        </div>
    )
}
export default Browser;