import { DesktopOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { Card, Col, Rate, Row, Spin } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTheaterGroupAction } from "../../utils/homeAction";

function CinemasGroup() {
	const cinemasGroup = useSelector((state) => state.movieHome.moviesTheater);

	if (!cinemasGroup) {
		return (
			<div className="" style={{ textAlign: "center" }}>
				<Spin size="large" />
			</div>
		);
	}

	return (
		<div className="CinemasGroup">
			{/* {console.log(cinemasGroup[0].lstCumRap)} */}
			<div className="container">
				<h1>Hệ thống rạp chiếu phim</h1>
				<h3>Danh sách các rạp chiếu phim lớn nhất cả nước</h3>
				<Row gutter={[20, 20]}>
					{cinemasGroup?.map((item) => {
						return (
							<Col
								key={item.maHeThongRap}
								xs={24}
								sm={24}
								md={12}
								lg={12}
								xl={12}
							>
								<div className="site-card-border-less-wrapper">
									<Card hoverable="true">
										<div className="content">
											<div className="left">
												<img src={item.logo} alt="" />
											</div>
											<div className="right">
												<div className="cinemas-id">
													{item.maHeThongRap}
												</div>
												<div className="cinemas-name">
													{item.tenHeThongRap}
												</div>
												<div className="star">
													<Rate
														allowHalf
														defaultValue={5}
														style={{ fontSize: 14 }}
													/>
												</div>

												<div className="cinemas-length">
													<EnvironmentOutlined />
													<span>
														{item.lstCumRap.length}
													</span>
													<span>Cụm rạp</span>
												</div>
											</div>
										</div>
									</Card>
								</div>
							</Col>
						);
					})}
				</Row>
			</div>
		</div>
	);
}

export default CinemasGroup;
