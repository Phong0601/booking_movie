import { Card, Rate } from "antd";
import React from "react";
const { Meta } = Card;

function UpcomingMovieItem(props) {
	const { maPhim, tenPhim, moTa, hinhAnh, danhGia } = props.item;

	return (
		<div className="UpcomingMovieItem">
			<div className="card">
				<div className="card-top">
					<img src={hinhAnh} alt="" />
				</div>

				<div className="card-body">
					<h3 className="movie-title">{tenPhim}</h3>
					<p className="movie-desc">{moTa.substr(0, 50) + "..."}</p>
				</div>
			</div>
		</div>
	);
}

export default UpcomingMovieItem;
