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
import Swal from "sweetalert2";

const Cart = ({ cart, clearCart, deleteById, total }) => {
  const clearCartAlert = () => {
    Swal.fire({
      position: "center",
      showConfirmButton: true,
      showDenyButton: true,
      title: "Are you sure you want to clean up your shopping cart?",
      confirmButtonText: "Yes, clean up",
      confirmButtonColor: "white",
      denyButtonText: "No, continue shopping",
      denyButtonColor: "green",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire({
          showConfirmButton: false,
          title: "The shopping Cart was succesfully cleaned",
          icon: "success",
        });
      } else if (result.isDenied) {
        Swal.fire({
          showConfirmButton: false,
          title: "The Cart stayed as before",
          icon: "info",
        });
      }
    });
  };

  const deleteButtonAlert = (productId) => {
    Swal.fire({
      position: "center",
      showConfirmButton: true,
      showDenyButton: true,
      title: "Do you want to delete the product from your cart?",
      confirmButtonText: "Yes, delete",
      confirmButtonColor: "white",
      denyButtonText: "No, leave product on Cart",
      denyButtonColor: "green",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteById(productId);
        Swal.fire({
          showConfirmButton: false,
          title: "The product was removed from your cart",
          icon: "success",
        });
      } else if (result.isDenied) {
        Swal.fire({
          showConfirmButton: false,
          title: "The product stayes in your cart",
          icon: "info",
        });
      }
    });
  };

  return (
    <Card sx={{ display: "flex" }}>
      <CardContent sx={{ m: "20px" }}>
        <Typography
          sx={{ display: { xs: "none", md: "flex" } }}
          variant="body1"
          color="text.secondary"
        >
          Shooping List
        </Typography>
      </CardContent>

      <Grid container spacing={2}>
        {cart.map((product) => (
          <Grid item key={product.id} xs={12}>
            <Card
              sx={{
                display: "flex",
                border: "1px solid",
                maxWidth: "300px",
                mt: "30px",
                p: "20px",
                "@media (min-width: 600px)": {
                  maxWidth: "50%",
                },
              }}
            >
              <CardMedia
                sx={{ width: 200, height: 150, alignSelf: "center" }}
                image={product.img}
                alt="plants-cards"
              />

              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
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
                  onClick={() => deleteButtonAlert(product.id)}
                >
                  Delete
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            m: "30px",
          }}
          alignItems="flex-start"
          gap="5px"
        >
          {cart.length > 0 && (
            <Button
              onClick={clearCartAlert}
              variant="outlined"
              color="inherit"
              size="small"
              sx={{ mb: "10px" }}
            >
              Clear Cart
            </Button>
          )}
          <Link to="/">
            <Button
              variant="outlined"
              color="success"
              size="small"
              sx={{ mb: "10px" }}
            >
              Go Back
            </Button>
          </Link>
          {cart.length > 0 && (
            <Link to="/checkout">
              <Button
                variant="contained"
                size="small"
                color="success"
                sx={{ mb: "10px" }}
              >
                Finalize purchase
              </Button>
            </Link>
          )}

          {cart.length > 0 && (
            <Typography variant="h6">Total to pay:${total}</Typography>
          )}
        </Grid>
      </Grid>
    </Card>
  );
};

export default Cart;
