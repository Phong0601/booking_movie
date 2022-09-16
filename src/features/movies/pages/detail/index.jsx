import { HomeOutlined, RightOutlined } from "@ant-design/icons";
import { Spin, Col, Divider, Row } from "antd";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useRouteMatch } from "react-router-dom";
import MovieInfo from "./components/MovieDetail";
import { fetchSelectedMovieAction } from "./utils/detailAction";
import { selectedMovieSelector } from "./utils/detailSelector";

const Detail = () => {
	const dispatch = useDispatch();
	const match = useRouteMatch();
	const movieId = match.params.id;

	const selectedMovie = useSelector(selectedMovieSelector);

	const fetchSelectedMovie = () => {
		dispatch(fetchSelectedMovieAction(movieId));
	};

	useEffect(() => {
		fetchSelectedMovie();
	}, []);

	if (!selectedMovie) {
		return (
			<div style={{ textAlign: "center" }}>
				<Spin size="large" />
			</div>
		);
	}

	return (
		<div className="Detail">
			<MovieInfo selectedMovie={selectedMovie} />

			<div>Footer</div>
		</div>
	);
};

export default Detail;
