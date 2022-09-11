import { createSlice } from "@reduxjs/toolkit";
import { fetchMovie } from "./homeAction";
const homeSlice = createSlice({
    name:'home',
    initialState:{
        movieList:null,
    },
    reducers:{},
    extraReducers(builder){
        builder.addCase(fetchMovie.fulfilled,(state,action)=>{
            state.movieList=action.payload
        })
    }
})
export default homeSlice