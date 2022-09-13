import { fetchNowShowingMovieAction } from "./nowShowingMovieAction";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
	nowShowingMovie: null,
};

const nowShowingMovieSlice = createSlice({
	name: "nowShowingMovie",
	initialState: initialState,

	reducers: {},

	extraReducers: (builder) => {
		builder.addCase(
			fetchNowShowingMovieAction.fulfilled,
			(state, action) => {
				state.nowShowingMovie = action.payload;
			}
		);
	},
});

export default nowShowingMovieSlice;
