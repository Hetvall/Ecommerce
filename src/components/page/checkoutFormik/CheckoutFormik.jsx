import { Box, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const CheckoutFormik = ({ orderId, onSubmit }) => {
  const { handleChange, handleSubmit, errors, values } = useFormik({
    initialValues: { name: "", phone: "", email: "" },
    onSubmit: (values) => {
      onSubmit(values);
    },
    validationSchema: Yup.object({
      name: Yup.string().required().min(3),
      email: Yup.string().email().required(),
      phone: Yup.number().min(10).required(),
    }),
  });

  return (
    <Box
      style={{ display: "flex", justifyContent: "center", padding: "100px" }}
    >
      {orderId ? (
        <Typography variant="h4">
          Thank you for your purchase! Your shopping ID is:
          <Box component="span" fontWeight="bold">
            {orderId}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: "30px",
            }}
          >
            <img
              style={{ borderRadius: "30px" }}
              src="https://firebasestorage.googleapis.com/v0/b/plants-and-home-decor.appspot.com/o/plant_delivery_guy_480x480.webp?alt=media&token=57f94002-cda5-44b4-9554-2344f485e048"
              alt="Delivery guy"
            />
          </Box>
        </Typography>
      ) : (
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
          onSubmit={handleSubmit}
        >
          <TextField
            variant="outlined"
            type="text"
            label="Name"
            onChange={handleChange}
            name="name"
            value={values.name}
            error={errors.name ? true : false}
            helperText={errors.name}
          />
          <TextField
            variant="outlined"
            type="tel"
            label="Phone"
            onChange={handleChange}
            name="phone"
            value={values.phone}
            error={errors.phone ? true : false}
            helperText={errors.phone}
          />
          <TextField
            variant="outlined"
            type="email"
            label="Email"
            onChange={handleChange}
            name="email"
            value={values.email}
            error={errors.email ? true : false}
            helperText={errors.email}
          />
          <Button variant="contained" color="success" type="submit">
            Send
          </Button>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "40px",
              width: "100%",
            }}
          >
            <Link to="/">
              <Button variant="contained" color="success" size="small">
                Continue Shopping
              </Button>
            </Link>
          </Box>
        </form>
      )}
    </Box>
  );
};

export default CheckoutFormik;
