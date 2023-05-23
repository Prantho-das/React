import { Grid, Typography } from "@mui/material";
import React from "react";
import ProductCard from "./ProductCard";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";

export const PopularProductSection = ({ products }) => {
  const handleDragStart = (e) => e.preventDefault();
  let productSlide = products.reverse()?.map((product, i) => (
    <div
      onDragStart={handleDragStart}
      key={i}
      style={{
        paddingLeft: "10px",
        paddingRight: "10px",
      }}
    >
      <ProductCard productInfo={product} />
    </div>
  ));
  const responsive = {
    0: { items: 1 },
    568: { items: 3 },
    1024: { items: 4 },
  };
  return (
    <>
      <section
        style={{
          marginTop: "4rem",
          marginBottom: "4rem",
        }}
      >
        <Typography variant="h4" component="h4">
          New Arrivals
        </Typography>{" "}
        <Grid container spacing={2} marginTop={2}>
          <AliceCarousel
            responsive={responsive}
            mouseTracking
            items={productSlide}
            disableDotsControls
            disableButtonsControls
            paddingRight={10}
            paddingLeft={10}
          />
        </Grid>
      </section>
    </>
  );
};
