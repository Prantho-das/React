import { useEffect, useState } from "react";
import { axiosClient } from "../utils/helper";
import { PRODUCTS } from "../utils/routes";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Skeleton,
  Typography,
} from "@mui/material";
import ProductCard from "../components/index/ProductCard";

const Shop = () => {
  let [products, setProducts] = useState(null);
  let [filter, setFilter] = useState({
    limit: 10,
    sort: "asc",
  });
  useEffect(() => {
    axiosClient
      .get(PRODUCTS + `?limit=${filter.limit}&sort=${filter.sort}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [filter]);
  return (
    <>
      <Container maxWidth="lg">
        <section
          style={{
            marginTop: "4rem",
            marginBottom: "5rem",
          }}
        >
          <Typography variant="h4" component="h4">
            Shop
          </Typography>
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}
          >
            <Paper>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Sort By Price
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={filter.sort}
                  label="Age"
                  onChange={(e) => {
                    setFilter({ ...filter, sort: e.target.value });
                  }}
                >
                  <MenuItem value={"asc"}>ASC</MenuItem>
                  <MenuItem value={"desc"}>DESC</MenuItem>
                </Select>
              </FormControl>
            </Paper>
            <Paper>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Limit Product
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={filter.limit}
                  label="Age"
                  onChange={(e) => {
                    setFilter({ ...filter, limit: e.target.value });
                  }}
                >
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                  <MenuItem value={40}>40</MenuItem>
                  <MenuItem value={50}>50</MenuItem>
                </Select>
              </FormControl>
            </Paper>
          </Box>
          <Grid container spacing={2} marginTop={2}>
            {products?.map((product, i) => (
              <Grid item xs={12} md={3} sm={6} key={i}>
                <ProductCard productInfo={product} />
              </Grid>
            ))}
          </Grid>{" "}
          <Grid container spacing={2} marginTop={2}>
            {!products &&
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
              ))}{" "}
          </Grid>
        </section>
      </Container>
    </>
  );
};

export default Shop;
