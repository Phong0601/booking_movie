import React, { useEffect, useState } from "react";
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
import Loading from "common/components/Loading/Loading";
const Home = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 4000);
  }, []);
  return (
    <div>
      {loading ? (
        <div>
          <ScrollToTop />
          <Banner />
          <NowShowingMovie />
          <UpcomingMovie />
          <FilterMovies />
          <Trailer />
          <CinemasGroup />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Home;
