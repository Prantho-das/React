import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { textExcerpt } from "../../utils/helper";
import { Link } from "react-router-dom";
import useCartStore from "../../store/cart";
import { Rating } from "@mui/material";
import { toast } from "react-toastify";

export default function ProductCard({ productInfo }) {
  let { category, description, id, image, price, rating, title } = productInfo;
  let cartStore = useCartStore((state) => state);
  let handleCart = () => {
    productInfo = { ...productInfo, quantity: 1 };
    cartStore.addToCart(productInfo);
    toast.success("Added to cart");
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link to={`/details/${id}`}>
        <CardMedia
          component="img"
          height="194"
          image={image}
          alt="Paella dish"
        />
      </Link>
      <CardContent>
        <Typography variant="body2" color="text.primary">
          {textExcerpt(title, 20)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {textExcerpt(description)}
        </Typography>
        <Rating name="read-only" value={rating.rate} readOnly />
        <Typography variant="body2" color="text.secondary">
          {price}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={() => handleCart()}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
