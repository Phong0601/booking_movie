import React, { useEffect, useState } from "react";
import { Spin, Row, Col } from "antd";
import { useRouteMatch } from "react-router-dom";
import instance from "api/instance";
import SeatBooking from "./components/SeatBooking/SeatBooking";
import InfoBooking from "./components/InfoBooking/InfoBooking";
import "./booking.scss";
import el from "date-fns/esm/locale/el/index.js";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Booking = () => {
  const matchIdTheater = useRouteMatch();
  const [loading, setLoadding] = useState(false);
  const [data, setData] = useState(null);
  const [seatSelected, setSeatSelected] = useState([]);
  const history = useHistory();
  const goToHome = () => {
    history.push("/");
  };
  // const go = ()=>{
  //   setTimeout(goToHome, 3000);
  // }
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
  // const clear = () => {
  //   console.log('click');
  //   clearTimeout(go);
    
  // };
  useEffect(() => {
    fetchSeatBooking(matchIdTheater.params.id);
  }, []);
  if (loading) return <Spin></Spin>;
  const selectSeat = (idSeat) => {
    const found = data?.danhSachGhe.find((seat) => seat.maGhe == idSeat);
    if (found !== -1) {
      const clone = [...seatSelected];
      const index = clone.findIndex((seat) => seat.maGhe == found.maGhe);
      if (index !== -1) clone.splice(index, 1);
      if (index === -1) clone.push(found);
      setSeatSelected(clone);
    }
  };

  return (
    <div className="booking">
      <div className="container">
        <Row>
          <Col span={18}>
            <div className="container__seat">
              {data ? (
                <SeatBooking
                  selectSeat={selectSeat}
                  seatList={data.danhSachGhe}
                />
              ) : (
                true
              )}
            </div>
          </Col>
          <Col span={6}>
            <div className="container__info">
              {data ? (
                <InfoBooking
                  seatSelected={seatSelected}
                  selectSeat={selectSeat}
                  infoMovie={data.thongTinPhim}
                />
              ) : (
                true
              )}
            </div>
          </Col>
        </Row>
      </div>
      {/* <button onClick={clear}>clear timeout</button> */}
    </div>
  );
};

export default Booking;
