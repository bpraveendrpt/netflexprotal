import { createSlice } from "@reduxjs/toolkit";


const gpSlice = createSlice({
        name: 'gpt',
        initialState: {
            showGptSearch : false,
            movieNames : null,
            movieResults : null,
        },
        reducers:{
            toggleGptSearchView : (state) =>{
                state.showGptSearch = !state.showGptSearch;
            },
            addGptMovieresult : (state, action) => {
                const {movieNames, movieResults } = action.payload;
                state.movieResults = movieResults;
                state.movieNames =  movieNames;
            },
        }
    }
);
export const {toggleGptSearchView, addGptMovieresult}= gpSlice.actions;
export default gpSlice.reducer;