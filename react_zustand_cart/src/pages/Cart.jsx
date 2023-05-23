import React from "react";
import useCartStore from "../store/cart";
import { Button, Card, Container, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Delete } from "@mui/icons-material";

const Cart = () => {
  let carts = useCartStore((state) => state.cartItems);
  let cartClear = useCartStore((state) => state.clearCart);
  let removeItem = useCartStore((state) => state.removeItem);
  let navigate = useNavigate();
  return (
    <div>
      {" "}
      <Container
        maxWidth="lg"
        style={{
          paddingTop: "2rem",
        }}
      >
        <Grid container spacing={2} marginY={5}>
          {carts &&
            carts?.map((cart, i) => (
              <Grid item xs={12} key={i}>
                <Card
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "1rem",
                    gap: "1rem",
                  }}
                >
                  <div>
                    <img
                      src={cart.image}
                      style={{
                        width: "5rem",
                        height: "5rem",
                      }}
                      alt={cart.title}
                    />
                  </div>
                  <div>
                    {" "}
                    <h2>{cart.title}</h2>
                    <p>{cart.price}</p>
                    <p>{cart?.quantity}</p>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        removeItem(cart.id);
                        toast.error("Item Removed");
                      }}
                    >
                      <Delete />
                    </Button>
                  </div>
                </Card>
              </Grid>
            ))}
        </Grid>
        <hr
          style={{
            marginY: "2rem",
          }}
        />
        <h2>
          Total:{" "}
          {carts?.reduce((a, b) => a + b.price * b.quantity, 0).toFixed(2)}
        </h2>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            cartClear();
            navigate("/");
            toast.success("Order Placed Successfully");
          }}
        >
          Place Order
        </Button>
      </Container>
    </div>
  );
};

export default Cart;
