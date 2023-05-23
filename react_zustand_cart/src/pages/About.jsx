import { Container, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <>
      {" "}
      <Container maxWidth="lg" >
        <Typography variant="h4" component="div" marginTop={10}>
          About
        </Typography>
        <Typography  component="div" gutterBottom>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatibus, voluptatum, quibusdam, quia, quos voluptate quod
          voluptatem quas natus doloribus quidem? Quisquam, quia. Quisquam
          voluptatibus, voluptatum, quibusdam, quia, quos voluptate quod
          voluptatem quas natus doloribus quidem? Quisquam, quia. Quisquam
          voluptatibus, voluptatum, quibusdam, quia, quos voluptate quod
        </Typography>
      </Container>
    </>
  );
};

export default About;
