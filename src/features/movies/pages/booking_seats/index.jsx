import React, { useEffect, useState } from "react";
import { Spin, Row, Col } from "antd";
import { useRouteMatch } from "react-router-dom";
import instance from "api/instance";
import SeatBooking from "./components/SeatBooking/SeatBooking";
import InfoBooking from "./components/InfoBooking/InfoBooking";
import './booking.scss'
const Booking = () => {
  const matchIdTheater = useRouteMatch();
  const [loading, setLoadding] = useState(false);
  const [data, setData] = useState(null);

  const fetchSeatBooking = async (idTheater) => {
    try {
      setLoadding(true);
      const res = await instance.request({
        url: "/api/QuanLyDatVe/LayDanhSachPhongVe",
        method: "GET",
        params: {
          MaLichChieu: idTheater,
        },
      });

      setLoadding(false);
      setData(await res.data.content);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadding(false);
    }
  };
 
  useEffect(() => {
    fetchSeatBooking(matchIdTheater.params.id);
  }, []);
  if (loading) return <Spin></Spin>;
   
  return (
    <div className="booking">
      <div className="container">
        <Row>
          <Col span={18}>
            <div className="container__seat">
              {data? <SeatBooking seatList={data.danhSachGhe} infoMovie={data.thongTinPhim} /> : true}
            </div>
          </Col>
          <Col span={6}>
            <div className="container__info">
             {data? <InfoBooking infoMovie={data.thongTinPhim} />: true}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Booking;
