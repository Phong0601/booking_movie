import React, { useEffect } from "react";
import { Card, Row, Col,Spin } from "antd";
import {
  fetchMoviesTheater,
  fetchTheater,
  fetchTheaterGroup,
} from "../../utils/homeAction";
import { useDispatch, useSelector } from "react-redux";
import { theater, movieTheaterGroup } from "../../utils/homeSelector";
import TheaterGroup from "./components/theater-group/TheaterGroup";
const FilterMovies = () => {
  const dispatch = useDispatch();
  const theaterList = useSelector(theater);
//   const moviesTheaterSelector = useSelector(movieTheaterGroup);
  const movieTheaterMovie = useSelector(movieTheaterGroup);
  const theaterFetch = async () => {
    const data = await dispatch(fetchTheater());
    theaterGroupFetch(data.payload[0].maHeThongRap);
    // movieTheater(data.payload[0].maHeThongRap);
   
  };
  const theaterGroupFetch = (idTheater) => {
    dispatch(fetchMoviesTheater(idTheater));
  };
//   const movieTheater = (idTheater) => {
//     dispatch(fetchMoviesTheater(idTheater));
//   };
 
//   const filterTheaterGroup = moviesTheaterSelector.find((item) => {
//       item
//   });

  useEffect(() => {
    theaterFetch();
    theaterGroupFetch();
    // movieTheater();
  }, []);
  if(!theaterList){
      return <Spin></Spin>
  }
  return (
    <Card>
      <div style={{ display: "flex" }}>
        {theaterList?.map((item) => {
          return (
            <div key={item.maHeThongRap}>
              <button>
                <img
                  onClick={() => {
                    theaterGroupFetch(item.maHeThongRap);
                  }}
                  src={item.logo}
                  width={100}
                />
              </button>
            </div>
          );
        })}
      </div>
      <Row>
        <Col span={24}>
          <TheaterGroup movieTheaterMovie={movieTheaterMovie} />
        </Col>
        {/* <Col span={16}></Col> */}
      </Row>
    </Card>
  );
};

export default FilterMovies;
