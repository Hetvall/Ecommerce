import { TextField, Button } from "@mui/material";

const Checkout = ({ handleSubmit, handleChange }) => {
  return (
    <div style={{ padding: "100px" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          type="text"
          label="Name"
          onChange={handleChange}
          name="name"
        />
        <TextField
          variant="outlined"
          type="number"
          label="Phone"
          onChange={handleChange}
          name="phone"
        />
        <TextField
          variant="outlined"
          type="email"
          label="Email"
          onChange={handleChange}
          name="email"
        />
        <Button variant="contained" type="submit">
          enviar
        </Button>
      </form>
    </div>
  );
};

export default Checkout;
