import React, { useState, useRef } from "react";
import { Card, Spin, Row, Col } from "antd";
import "./SeatBooking.scss";
const SeatBooking = ({ seatList, selectSeat }) => {
  console.log();
  const checked = useRef([]);
  const handleEvent = (value, index) => {
    selectSeat(value);

    const span = checked.current;
    span[index].classList.toggle("seat--selected");
  };

  return (
    <Card className="card__movies" title="101 chú chó đóm">
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
      </div>
    </Card>
  );
};

export default SeatBooking;
