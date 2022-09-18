import React from "react";
import { Card, Image } from "antd";
const InfoBooking = ({ infoMovie, seatSelected }) => {
  const { hinhAnh, gioChieu, diaChi, ngayChieu, tenPhim } = infoMovie;
  return (
    <Card title={tenPhim}>
      <div>
        <div className="imgage">
          <Image src={hinhAnh} />
        </div>
        <div className="title">
          <h3>Địa Chỉ:{diaChi}</h3>
          <h3>
            Thời Gian:{ngayChieu}| {gioChieu}
          </h3>
        </div>
        <div className="seat__selected">
          <div>
            Ghế Chọn:
            {seatSelected.map((seat) => {
              return (
                <h3 key={seat.maGhe} style={{ display: "inline" }}>
                  {seat.tenGhe},
                </h3>
              );
            })}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default InfoBooking;
