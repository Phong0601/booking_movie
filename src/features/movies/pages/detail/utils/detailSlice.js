import { createSlice } from "@reduxjs/toolkit";
import { fetchSelectedMovieAction } from "./detailAction";

const initialState = {
	movieInfo: null,
};

const detailSlice = createSlice({
	name: "detail",
	initialState: initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(fetchSelectedMovieAction.fulfilled, (state, action) => {
			state.movieInfo = action.payload;
		});
	},
});
export default detailSlice;
