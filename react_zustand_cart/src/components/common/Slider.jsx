import React from "react";
import Carousel from "nuka-carousel";

const Slider = ({ data = [], template, total = null }) => {
  if (total) {
    data = data?.splice(0, total);
  }
  return (
    <>
      <Carousel>
        {data?.map((item, i) => {
          return <div key={i}>{template({ item })}</div>;
        })}
      </Carousel>
    </>
  );
};

export default Slider;
