import {
  Button,
  Typography,
  Card,
  CardContent,
  Grid,
  Box,
  CardMedia,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = ({ cart, clearCart, deleteById }) => {
  return (
    <Card sx={{ display: "flex" }}>
      <CardContent sx={{ m: "20px" }}>
        <Typography variant="body1" color="text.secondary">
          Shooping List
        </Typography>
      </CardContent>

      <Grid container spacing={2}>
        {cart.map((product) => (
          <Grid item key={product.id} xs={12}>
            <Card sx={{ display: "flex", border: "1px solid" }}>
              <CardMedia
                sx={{ width: 100, height: 100, alignSelf: "center" }}
                image={product.img}
                alt="plants-cards"
              />
              <CardContent>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography variant="h5">{product.title}</Typography>
                  <Typography variant="body3">
                    Total Price: ${product.price}
                  </Typography>
                  <Typography variant="body3">
                    Quantity: {product.quantity}
                  </Typography>
                </Box>

                <Button
                  sx={{ mt: "10px" }}
                  variant="outlined"
                  color="warning"
                  size="small"
                  onClick={() => deleteById(product.id)}
                >
                  Delete
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid
        sx={{ m: "30px" }}
        container
        direction="column"
        alignItems="center"
        gap="10px"
      >
        <Button
          onClick={clearCart}
          variant="outlined"
          color="inherit"
          size="small"
        >
          Clear Cart
        </Button>

        <Link to="/">
          <Button variant="outlined" color="success" size="small">
            Go Back
          </Button>
        </Link>

        <Link to="/checkout">
          <Button variant="contained" size="small" color="success">
            Finalize purchase
          </Button>
        </Link>
      </Grid>
    </Card>
  );
};

export default Cart;
