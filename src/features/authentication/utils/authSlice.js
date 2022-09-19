import { createSlice } from "@reduxjs/toolkit";
import { fetchProfileAction, signInAction } from "./authAction";

const initialState = {
	profile: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState: initialState,
	reducers: {},

	extraReducers(builder) {
		//
		builder.addCase(signInAction.fulfilled, (state, action) => {
			state.profile = action.payload;
		});

		builder.addCase(fetchProfileAction.fulfilled, (state, action) => {
			state.profile = action.payload;
		});
	},
});

export default authSlice;
