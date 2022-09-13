import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "api/instance";

export const fetchNowShowingMovieAction = createAsyncThunk(
	"home/fetchNowShowingMovies",
	async () => {
		try {
			const res = instance.request({
				url: "/api/QuanLyPhim/LayDanhSachPhim",
				method: "GET",
				params: {
					maNhom: "GP03",
				},
			});
			// console.log((await res).data.content);
			return (await res).data.content;
		} catch (err) {
			console.log(err);
		}
	}
);
