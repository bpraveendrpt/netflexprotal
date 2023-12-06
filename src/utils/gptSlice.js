import { createSlice } from "@reduxjs/toolkit";


const gpSlice = createSlice({
        name: 'gpt',
        initialState: {
            showGptSearch : false,
        },
        reducers:{
            toggleGptSearchView : (state) =>{
                state.showGptSearch = !state.showGptSearch;
            }
        }
    }
);
export const {toggleGptSearchView}= gpSlice.actions;
export default gpSlice.reducer;