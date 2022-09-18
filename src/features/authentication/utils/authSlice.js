import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
	auth: null,
};

export const authSlice = createAsyncThunk("auth/signIn");
