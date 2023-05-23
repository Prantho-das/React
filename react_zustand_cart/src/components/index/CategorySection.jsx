import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const CategorySection = ({ items = [] }) => {
  return (
    <>
      <section
        style={{
          marginTop: "4rem",
          marginBottom: "4rem",
        }}
      >
        <Typography variant="h4" component="h4">
          Categories
        </Typography>
        <Grid container spacing={2} marginTop={2}>
          {items?.map((item, i) => (
            <Grid item xs={12} md={3} sm={6} key={i}>
              <Paper elevation={3}>
                <Link to={`/products?category=${item}`}>
                  <Typography
                    paddingY={1}
                    variant="h5"
                    component="h5"
                    align="center"
                  >
                    {item}
                  </Typography>
                </Link>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </section>
    </>
  );
};

export default CategorySection;
