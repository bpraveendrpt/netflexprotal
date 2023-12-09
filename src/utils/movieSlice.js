import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo : null,
        popularMovies : null,
        upComingMovies : null,
        topRatedMovies : null,
        selectTrailerVideo : null,

    },
    reducers: {
        addNowPlayingMovies: (state, action) =>{
            state.nowPlayingMovies = action.payload;

        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        }, 
        addPopularMovies: (state, action) =>{
            state.popularMovies = action.payload;
        },
        addUpComingMovies : (state, action) =>{
            state.upComingMovies = action.payload;
        },
        addTopRatedMovies : (state, action) =>{
            state.topRatedMovies = action.payload;
        },
        addselectTrailerVideo : (state, action) =>{
            state.selectTrailerVideo = action.payload;
        },



    },
});


export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies, addUpComingMovies, addTopRatedMovies, addselectTrailerVideo} =  movieSlice.actions;

export default movieSlice.reducer;
