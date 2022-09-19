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
		return res.data.content;
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

		// 1) Lưu trữ thông tin này lên store, để có thể hiển thị Thông tin User
		const profile = { ...res.data.content };
		// 2) Trên store không cần phải có token (vì bảo mật)
		delete profile.accessToken;
		// 3) Lưu token xuống localStorage để tái sử dụng
		localStorage.setItem("token", res.data.content.accessToken);

		return profile;
	} catch (err) {}
});

// Profile
export const fetchProfileAction = createAsyncThunk(
	"auth/fetchProfile",
	async () => {
		try {
			const res = await instance.request({
				url: "/api/QuanLyNguoiDung/ThongTinTaiKhoan",
				method: "POST",
			});
			// console.log(res.data.content);
			return res.data.content;
		} catch (err) {
			console.log(err);
		}
	}
);
