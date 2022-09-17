import { Col, Row, Menu, Layout, Spin, Rate, Modal, Button } from "antd";
import DateTheater from "features/movies/pages/home/components/filterMovies/components/date-custom/DateTheater";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import notFoundImg from "../../../../../../assets/img/icon/notFound.png";
import MovieListColumn from "./MovieListColumn";
import TheaterInfo from "./TheaterInfo";

function MovieSchedule(props) {
	// Selected Movie
	const selectedMovie = props.selectedMovie;
	// Array (Theater Group)
	const theaterList = props.theater;
	// Schedule of 1 film
	const schedule = props.schedule;
	// MovieListColumn
	const movieList = props.movieList;

	//// Set theater
	const [theaterGroupId, setTheaterGroupId] = useState("BHDStar");
	// Current theater
	const currentTheater = schedule.heThongRapChieu.find(
		(item) => item.maHeThongRap === theaterGroupId
	);
	//// Set index for Menu --antd
	const [index, setIndex] = useState("0");

	// Set theater group when click button Theater
	const handleChangeTheaterGroup = (id) => {
		// console.log(id);
		setTheaterGroupId(id);
	};

	useEffect(() => {}, [theaterGroupId]);

	// Setting  -- Ant Design
	const { Header, Content, Sider } = Layout;
	const items1 = theaterList.map((theaterGroup) => ({
		key: theaterGroup.maHeThongRap,
		label: (
			<div className="btn-header">
				<img className="logo-theater" src={theaterGroup.logo} alt="" />
			</div>
		),
	}));

	const items2 = currentTheater?.cumRapChieu.map((theater, index) => ({
		key: index,
		label: `${theater.tenCumRap}`,
	}));

	//// Create Schedule Content  ---
	const theaterInfo = currentTheater?.cumRapChieu[index];

	// show not found image when no return data
	const notFound = (
		<div className="not-found">
			<img src={notFoundImg} alt="" />
		</div>
	);

	// Setting modal for Movie Rate
	const [isModalOpen, setIsModalOpen] = useState(false);
	const showModal = () => {
		setIsModalOpen(true);
	};
	const handleOk = () => {
		setIsModalOpen(false);
	};
	const handleCancel = () => {
		setIsModalOpen(false);
	};

	return (
		<div className="MovieSchedule">
			{/* {console.log(currentTheater)} */}
			<div className="container">
				<Row>
					<Col xs={24} sm={24} md={24} lg={18} xl={18}>
						<div className="schedule-title">
							Lịch chiếu: {selectedMovie.tenPhim}
						</div>
						<Layout className="layout-custom">
							<Header className="header">
								<div className="logo" />
								<Menu
									className="menu-header"
									theme="light"
									mode="horizontal"
									defaultSelectedKeys={["BHDStar"]}
									items={items1}
									onClick={(e) => {
										handleChangeTheaterGroup(e.key);
										setIndex("0");
									}}
								/>
							</Header>
							<Layout className="body">
								<Sider theme="" width={280} className="sider">
									<Menu
										mode="inline"
										selectedKeys={index}
										onClick={(e) => {
											// console.log(e);
											setIndex(e.key);
										}}
										style={{
											height: "100%",
											borderRight: 0,
										}}
										items={items2}
									/>
								</Sider>
								<Layout
									style={{
										padding: "0 24px 24px",
										background: "#f1f2f6",
									}}
								>
									<Content
										className="layout-content"
										style={{
											padding: 24,
											margin: 0,
											minHeight: 280,
										}}
									>
										{currentTheater?.cumRapChieu[0] ? (
											<TheaterInfo
												selectedMovie={selectedMovie}
												theaterInfo={theaterInfo}
											/>
										) : (
											notFound
										)}
									</Content>
								</Layout>
							</Layout>
						</Layout>
					</Col>
					<Col xs={24} sm={24} md={24} lg={6} xl={6}>
						{/* -- Movie Rate  */}
						<div className="movie-rate">
							<div className="title">Xếp loại</div>
							<Rate
								allowHalf
								defaultValue={selectedMovie.danhGia / 2}
							/>
							<div className="btn-rate">
								<Button danger onClick={showModal}>
									Xem đánh giá
								</Button>
								<Modal
									title="Tất cả bình luận"
									open={isModalOpen}
									onOk={handleOk}
									onCancel={handleCancel}
								>
									<p>Comment 1...</p>
									<p>Comment 1...</p>
									<p>Comment 1...</p>
								</Modal>
							</div>
						</div>

						{/* ---Movie List Column*/}
						<div className="list">
							<MovieListColumn movieList={movieList} />
						</div>
					</Col>
				</Row>
			</div>
		</div>
	);
}

export default MovieSchedule;
