import React from "react";
import Banner from "./components/Banner";
import FilterMovies from "./components/filterMovies/FilterMovies";
// Slick slider --by Hung
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NowShowingMovie from "./components/NowShowingMovie";
import UpcomingMovie from "./components/UpcomingMovie";
import Trailer from "./components/Trailer";
import CinemasGroup from "./components/CinemasGroup";
import ScrollToTop from "features/movies/components/ScrollToTop";
const Home = () => {
	return (
		<div>
<<<<<<< HEAD
			<Banner />
			<NowShowingMovie />
			<UpcomingMovie />
			<Trailer />
=======
			<ScrollToTop />
			<Banner />
			<NowShowingMovie />
			<UpcomingMovie />
>>>>>>> 25086ad5aa4bf8a10ad698e89aaf5f1a8d9793eb
			<FilterMovies />
			<Trailer />
			<CinemasGroup />
		</div>
	);
};

export default Home;
