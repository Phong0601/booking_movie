import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "api/instance";

// Sign Up
export const signUpAction = createAsyncThunk("auth/signUp", async (user) => {
	try {
		const res = await instance.request({
			url: "/api/QuanLyNguoiDung/DangKy",
			method: "POST",
			data: user,
		});
	} catch (err) {
		console.log(err);
	}
});

// Sign In
export const signInAction = createAsyncThunk("auth/signIn", async (user) => {
	try {
		const res = await instance.request({
			url: "/api/QuanLyNguoiDung/DangNhap",
			method: "POST",
			data: user,
		});
		console.log(res.data);
	} catch (err) {
		console.log(err);
	}
});
