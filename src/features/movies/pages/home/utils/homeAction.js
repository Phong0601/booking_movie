import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "api/instance";
export const fetchMovie = createAsyncThunk('home/fetchMovie',
async (params)=>{

    try {
        const res = await instance.request({
            url:'/api/QuanLyPhim/LayDanhSachPhimPhanTrang',
            method:'GET',
            params:{
                maNhom: "GP03",
                soTrang: params.currentPage,
                soPhanTuTrenTrang: params.pageSize,
            }
        })
       
        return res.data.content
    } catch (error) {
        console.log(error);
    }
}
)
//Lấy ds hệ thống rạp và logo --by Phong
export const fetchTheater = createAsyncThunk ('home/fetchThearter',
async ()=>{
    try {
        const res = await instance.request({
            url:'/api/QuanLyRap/LayThongTinHeThongRap',
            method:'GET'
        })
        return res.data.content
    } catch (error) {
        
    }
})
//Lấy ds hệ cụm rạp  --by Phong
export const fetchTheaterGroup = createAsyncThunk ('home/fetchTheaterGroup',
async (idTheater)=>{
    try {
        const res = await instance.request({
            url:'/api/QuanLyRap/LayThongTinCumRapTheoHeThong',
            method:'GET',
            params:{
                maHeThongRap:idTheater,
            }
        })
        return res.data.content
    } catch (error) {
        
    }
})
//LayThongTinLichChieuHeThongRap --by Phong
export const fetchMoviesTheater = createAsyncThunk ('home/fetchMoviesTheater',
async (idTheater)=>{
    try {
        const res = await instance.request({
            url:'/api/QuanLyRap/LayThongTinLichChieuHeThongRap',
            method:'GET',
            params:{
                maHeThongRap:idTheater,
                maNhom:'GP01'
            }
        })
        return res.data.content
    } catch (error) {
        
    }
})