import { HomeOutlined, RightOutlined } from "@ant-design/icons";
import { Spin, Col, Divider, Row, Menu } from "antd";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useRouteMatch } from "react-router-dom";
import MovieBody from "./components/MovieBody";
import MovieInfo from "./components/MovieInfo";

import {
  fetchTheaterAction,
  fetchSelectedMovieAction,
  fetchScheduleAction,
  fetchMovieListColumnAction,
} from "./utils/detailAction";
import {
  movieListColumnSelector,
  scheduleSelector,
  selectedMovieSelector,
  theaterSelector,
} from "./utils/detailSelector";

import ScrollToTop from "features/movies/components/ScrollToTop";
import Loading from "common/components/Loading/Loading";

const Detail = () => {
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const movieId = match.params.id;
  const [loading, setLoading] = useState(false);

  //// received data
  const selectedMovie = useSelector(selectedMovieSelector);
  const theater = useSelector(theaterSelector);
  const schedule = useSelector(scheduleSelector);
  const movieList = useSelector(movieListColumnSelector); //for MovieListColumn

  //// Set theater
  const [theaterGroup, setTheaterGroup] = useState({
    theaterGroupId: "BHDStar",
  });

  ///////---- FETCH -------------
  const fetchSelectedMovie = () => {
    dispatch(fetchSelectedMovieAction(movieId));
  };

  const fetchTheater = () => {
    dispatch(fetchTheaterAction());
  };

  const fetchSchedule = () => {
    dispatch(fetchScheduleAction(movieId));
  };
  const fetchMovieListColumn = () => {
    dispatch(fetchMovieListColumnAction());
  };

  useEffect(() => {
    fetchSelectedMovie();
    fetchTheater();
    fetchSchedule();
    fetchMovieListColumn();
    setTimeout(() => {
      setLoading(true);
    }, 5000);
  }, [theaterGroup, movieId]);

  if (!selectedMovie) {
    return (
      <div style={{ textAlign: "center" }}>
        <Spin size="large" />
      </div>
    );
  }

  if (!theater) {
    return (
      <div style={{ textAlign: "center" }}>
        <Spin size="large" />
      </div>
    );
  }

  if (!schedule) {
    return (
      <div style={{ textAlign: "center" }}>
        <Spin size="large" />
      </div>
    );
  }

  if (!movieList) {
    return (
      <div style={{ textAlign: "center" }}>
        <Spin size="large" />
      </div>
    );
  }

  return (
    <>
      {loading ? (
        <div className="Detail">
          <ScrollToTop />
          <MovieInfo selectedMovie={selectedMovie} />
          <MovieBody
            selectedMovie={selectedMovie}
            theater={theater}
            schedule={schedule}
            movieList={movieList}
          />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Detail;
