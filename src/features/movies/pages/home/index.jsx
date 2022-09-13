import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "./components/Banner";
import FilterMovies from "./components/filterMovies/FilterMovies";
import { fetchMovie } from "./utils/homeAction";
import { movies } from "./utils/homeSelector";
// Slick slider - by Hung
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NowShowingMovie from "./components/NowShowingMovie";

const Home = () => {
	const dispatch = useDispatch();
	const listMovies = useSelector(movies);

	const [config, setConfig] = useState({
		currentPage: "1",
		pageSize: "8",
	});
	const fetchMovies = async () => {
		dispatch(fetchMovie(config));
	};
	useEffect(() => {
		fetchMovies();
	}, []);
	return (
		<div>
			<FilterMovies />
			{/* <Banner /> */}
			<NowShowingMovie />
			<div style={{ color: "#fff" }}>asdasda</div>
		</div>
	);
};

export default Home;
