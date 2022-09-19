import React, { useState, useRef } from "react";
import { Card, Spin, Row, Col } from "antd";
import "./SeatBooking.scss";
console.log();
const SeatBooking = ({ seatList, infoMovie, selectSeat }) => {
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
      title={infoMovie.tenCumRap}
      headStyle={{ backgroundColor: "orange" }}
      bodyStyle={{ border: "4px solid orange", height: "100%" }}
    >
      <div className="screen">Screen</div>
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
