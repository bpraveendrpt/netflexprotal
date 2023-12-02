
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";

import SecoundaryContainer from "./SecoundaryContainer";
import MainContainer from "./MainContainer";


const Browser =()=>{

    useNowPlayingMovies();

    return(
        <div>
            <Header />
            <MainContainer />
            <SecoundaryContainer />
        </div>
    
    )
}
export default Browser;