import { Button, Container, TextField } from "@mui/material";
import React from "react";

const Contact = () => {
  return (
    <Container
      style={{
        paddingTop: "5rem",
      }}
      maxWidth="lg"
    >
      <h1>Contact</h1>
      <form action="" style={{ 
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
       }}>
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField id="outlined-basic" label="Message" variant="standard" />
        <Button variant="contained">Send</Button>
      </form>
    </Container>
  );
};

export default Contact;
