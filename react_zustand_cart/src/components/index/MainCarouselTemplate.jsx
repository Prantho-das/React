import React from "react";

export const MainCarouselTemplate = ({ item }) => {
  return (
    <>
      <img
        style={{
          height: "400px",
          overflow: "hidden",
          width: "100%",
          backgroundPosition: "center",
        }}
        src={item}
        alt="carousel"
      />
    </>
  );
};
