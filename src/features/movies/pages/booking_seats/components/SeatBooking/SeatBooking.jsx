import React, { useState, useRef } from "react";
import { Card, Spin, Row, Col, Button } from "antd";
import sortBy from "lodash.sortby";
import "./SeatBooking.scss";
console.log();
const SeatBooking = ({ seatList, infoMovie, selectSeat, seatSelected }) => {
	console.log(infoMovie);
	const checked = useRef([]);
	const handleEvent = (value, index) => {
		selectSeat(value);

		const span = checked.current;
		span[index].classList.toggle("seat--selected");
	};

	return (
		<Card
			className="card__movies"
			title={`Rạp: ${infoMovie.tenCumRap} <> Phim: ${infoMovie.tenPhim}`}
			headStyle={{ backgroundColor: "orange" }}
			bodyStyle={{ border: "4px solid orange", height: "100%" }}
		>
			<div className="screen">Screen</div>
			<div className="reponsive">
				<div>
					<h3 style={{ display: "inline-block" }}> Ghế Chọn:</h3>
					{sortBy(seatSelected, ["stt"]).map((seat) => {
						return (
							<h3
								key={seat.maGhe}
								style={{ display: "inline-block" }}
							>
								{seat.tenGhe},
							</h3>
						);
					})}
				</div>
				<div>
					<h3 style={{ display: "inline-block" }}>Tổng Tiền:</h3>
					<h2 style={{ display: "inline-block" }}>
						{seatSelected
							.reduce((total, seat, index) => {
								return (total += seat.giaVe);
							}, 0)
							.toLocaleString()}
					</h2>
				</div>
				<Button
					style={{ borderRadius: "10px" }}
					// onClick={handleBooked}
					className="btn-payment"
					type="primary"
					ghost
				>
					Thanh Toán
				</Button>
			</div>
			<div className="seat__group">
				<Row gutter={[8, 8]}>
					{seatList.map((seat, index) => {
						const { tenGhe, maGhe, loaiGhe, daDat } = seat;
						let booked = "";
						let vip = "";

						if (daDat) booked = "seat--booked";
						if (loaiGhe === "Vip") vip = "seat--vip";

						return (
							<Col key={maGhe} span={2.4}>
								<button
									ref={(e) => (checked.current[index] = e)}
									value={maGhe}
									onClick={(e) => {
										handleEvent(e.target.value, index);
									}}
									className={`${booked} ${vip}  btn--seat`}
									disabled={daDat}
								>
									{tenGhe}
								</button>
							</Col>
						);
					})}
				</Row>
				<div className="note__seat">
					<Row>
						<Col span={6}>
							<button className="btn--seat"></button>
							<h4>Ghế Trống</h4>
						</Col>
						<Col span={6}>
							<button className="btn--seat seat--vip"></button>
							<h4>Ghế Vip</h4>
						</Col>
						<Col span={6}>
							<button className="btn--seat seat--selected"></button>
							<h4>Ghế Chọn</h4>
						</Col>
						<Col span={6}>
							<button className="btn--seat seat--booked"></button>
							<h4>Ghế Đã Đặt</h4>
						</Col>
					</Row>
				</div>
			</div>
		</Card>
	);
};

export default SeatBooking;
