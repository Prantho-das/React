import React, { useEffect, useState } from "react";
import { axiosClient } from "../utils/helper";
import axios from "axios";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import PostCard from "../components/blog/PostCard";

const Blog = () => {
  let [posts, setPosts] = useState(null);
  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BLOG_API)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Container
        maxWidth="lg"
        style={{
          paddingTop: "2rem",
        }}
      >
        <Grid container spacing={2} marginTop={6}>
          {posts &&
            posts?.map((post, i) => (
              <Grid item xs={12} md={3} sm={6} key={i}>
                <PostCard post={post} />
              </Grid>
            ))}
          {!posts &&
            [...Array(10)]?.map((post, i) => (
              <Grid item xs={12} md={3} sm={6} key={i}>
                <Card sx={{ maxWidth: 345 }} key={i}>
                  <Skeleton variant="rectangular" width={345} height={140} />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      <Skeleton />
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <Skeleton />
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">
                      <Skeleton />
                    </Button>
                    <Button size="small">
                      <Skeleton />
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>
    </>
  );
};

export default Blog;
