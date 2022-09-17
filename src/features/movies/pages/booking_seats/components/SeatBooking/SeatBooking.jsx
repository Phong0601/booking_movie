import React, { useState, useRef } from "react";
import { Card, Spin, Row, Col } from "antd";
import "./SeatBooking.scss";
const SeatBooking = ({ seatList, infoMovie }) => {
  const [selected, setSelected] = useState(false);

  const handleEvent = (value) => {
    console.log(value);
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
                  value={maGhe}
                  onClick={(e) => {
                    setSelected(!selected);
                    handleEvent(e.target.value);
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
