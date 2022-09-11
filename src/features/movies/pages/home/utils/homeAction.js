import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "api/instance";
export const fetchMovie = createAsyncThunk('home/fetchMovie',
async (params)=>{
    console.log(params);
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
        console.log(res.data.content);
        return res.data.content
    } catch (error) {
        console.log(error);
    }
}
)