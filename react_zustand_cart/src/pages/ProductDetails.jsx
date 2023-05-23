import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosClient } from "../utils/helper";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { PRODUCTS } from "../utils/routes";
import useCartStore from "../store/cart";
import { toast } from "react-toastify";

const ProductDetails = (props) => {
  let param = useParams();
  let [product, setProduct] = useState(null);
  useEffect(() => {
    axiosClient
      .get(PRODUCTS + `/${param.id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let cartStore = useCartStore((state) => state);
  let handleCart = () => {
    product = { ...product, quantity: 1 };
    cartStore.addToCart(product);
    toast.success("Added to cart");
  };
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
            Product Details
          </Typography>
          <Grid container spacing={2} marginTop={6}>
            {product && (
              <>
                {" "}
                <Grid item xs={12} md={6} sm={6} key={product.id}>
                  <Card key={product.id}>
                    <CardMedia
                      component="img"
                      image={product.image}
                      alt={product.title}
                    />
                  </Card>
                </Grid>
                <Grid item xs={12} md={6} sm={6} key={product.id}>
                  {" "}
                  <Card key={product.id}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {product.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {product.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        onClick={() => handleCart()}
                      
                      
                      size="small">Add to Cart</Button>
                    </CardActions>
                  </Card>
                </Grid>
              </>
            )}
          </Grid>
        </section>
      </Container>
    </>
  );
};

export default ProductDetails;
