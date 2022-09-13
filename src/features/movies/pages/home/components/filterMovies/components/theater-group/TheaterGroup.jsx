import { movieTheaterGroup } from "features/movies/pages/home/utils/homeSelector";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Spin } from "antd";
const TheaterGroup = (props) => {
  const [index, setIndex] = useState("0");
  console.log(index);
  if (!props.movieTheaterMovie) return <Spin></Spin>;
  return (
      <div style={{display:'flex'}}>
    <div>
      {props.movieTheaterMovie[0]?.lstCumRap.map((item, index) => {
        return (
          <div style={{ display: "flex" }}>
            <img width={100} src={props.movieTheaterMovie[0].logo} />
            <p
            style={{cursor:'pointer'}}
              onClick={() => {
                setIndex(index);
              }}
            >
              {item.tenCumRap}
            </p>
          </div>
        );
      })}
    </div>
      <div style={{width:'70%'}}>
      {props.movieTheaterMovie[0]?.lstCumRap[index].danhSachPhim.map(item=>{
          return(
              
              <p style={{display:'inline'}}>{item.tenPhim}</p>
          )
      })}
      </div>
    </div>
  );
};

export default TheaterGroup;
