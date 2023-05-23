import { Grid, Typography } from "@mui/material";
import ProductCard from "./ProductCard";

const NewArrivalSection = ({ products = [] }) => {
  return (
    <>
      <section
        style={{
          marginTop: "4rem",
          marginBottom: "4rem",
        }}
      >
        <Typography variant="h4" component="h4" marginTop={2}>
          New Arrivals
        </Typography>{" "}
        <Grid container spacing={2}>
          {products?.map((product, i) => (
            <Grid item xs={12} md={3} sm={6} key={i}>
              <ProductCard productInfo={product} />
            </Grid>
          ))}
        </Grid>
      </section>
    </>
  );
};

export default NewArrivalSection;
