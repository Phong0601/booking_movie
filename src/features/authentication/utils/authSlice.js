import { createSlice } from "@reduxjs/toolkit";
import {
	fetchProfileAction,
	fetchUpdateProfileAction,
	signInAction,
} from "./authAction";

const initialState = {
	profile: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState: initialState,
	reducers: {},

	extraReducers(builder) {
		// Sign in
		builder.addCase(signInAction.fulfilled, (state, action) => {
			state.profile = action.payload;
		});

		// Get profile
		builder.addCase(fetchProfileAction.fulfilled, (state, action) => {
			state.profile = action.payload;
		});

		// Update profile
		builder.addCase(fetchUpdateProfileAction.fulfilled, (state, action) => {
			state.profile = action.payload;
		});
	},
});

export default authSlice;
