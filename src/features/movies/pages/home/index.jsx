import React from "react";
import Banner from "./components/Banner";
import FilterMovies from "./components/filterMovies/FilterMovies";
// Slick slider --by Hung
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NowShowingMovie from "./components/NowShowingMovie";
import UpcomingMovie from "./components/UpcomingMovie";
import Trailer from "./components/Trailer";
import Footer from "common/components/Footer";

const Home = () => {
	return (
		<div>
			<Banner />
			<NowShowingMovie />
			<UpcomingMovie />
			<Trailer />
			<FilterMovies />
		
			<div style={{ color: "#000" }}>Footer</div>
		</div>
	);
};

export default Home;
