import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import React, { useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import ShowingMovieItem from "./components/ShowingMovieItem";
import { fetchNowShowingMovieAction } from "./utils/nowShowingMovieAction";
import { nowShowingMovie } from "./utils/nowShowingMovieSelector";

function NowShowingMovie() {
	const dispatch = useDispatch();

	const movieList = useSelector(nowShowingMovie);
	// Create next arrow  and prev arrow
	const slider = useRef(null);

	const fetchNowShowingMovie = () => {
		dispatch(fetchNowShowingMovieAction());
	};

	useEffect(() => {
		fetchNowShowingMovie();
	}, []);

	if (!movieList) return <Spin size="large" />;

	const showingMovie = movieList.filter((item) => {
		return item.dangChieu === true;
	});

	// Setting for slick slider
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 5,
		autoplay: false,
		autoplaySpeed: 2000,
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
		],
	};

	return (
		<div className="NowShowingMovie">
			<div className="container">
				<h1 className="title">Phim đang chiếu</h1>

				<div
					className="next-arrow"
					onClick={() => slider?.current.slickNext()}
				>
					<RightOutlined style={{ color: "black" }} />
				</div>
				<div
					className="prev-arrow"
					onClick={() => slider?.current.slickPrev()}
				>
					<LeftOutlined style={{ color: "black" }} />
				</div>

				<Slider className="slider" ref={slider} {...settings}>
					{showingMovie?.map((item) => {
						return (
							<ShowingMovieItem
								key={item.maPhim}
								className="showingMovieItem"
								item={item}
							/>
						);
					})}
				</Slider>
			</div>
		</div>
	);
}

export default NowShowingMovie;
