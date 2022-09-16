import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "api/instance";

export const fetchSelectedMovieAction = createAsyncThunk(
	"home/fetchSelectedMovie",
	async (movieId) => {
		try {
			const res = await instance.request({
				url: "/api/QuanLyPhim/LayThongTinPhim",
				method: "GET",
				params: {
					maPhim: movieId,
				},
			});
			// console.log(res.data.content);
			return res.data.content;
		} catch (err) {
			console.log(err);
		}
	}
);
