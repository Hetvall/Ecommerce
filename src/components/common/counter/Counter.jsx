import { Box, Button } from "@mui/material";
import "./Counter.css";
import { Link } from "react-router-dom";

const Counter = ({ restar, sumar, contador, onAdd }) => {
  return (
    <div className="counters-button">
      <Button
        onClick={restar}
        sx={{
          color: "inherit",
          fontSize: "medium",
          border: "1px solid",
          height: "30px",
        }}
      >
        less
      </Button>
      <h2>{contador}</h2>
      <Button
        onClick={sumar}
        sx={{
          color: "inherit",
          fontSize: "medium",
          border: "1px solid",
          height: "30px",
        }}
      >
        add
      </Button>
      <Button
        onClick={() => onAdd(contador)}
        sx={{
          color: "inherit",
          fontSize: "medium",
          border: "1px solid",
          height: "30px",
          backgroundColor: "#a3b18a",
          marginTop: "10px",
        }}
      >
        Add to Cart
      </Button>
      <Box
        sx={{
          marginTop: "15px",
        }}
      >
        <Link style={{ color: "black" }} to="/">
          <Button
            sx={{
              color: "inherit",
              fontSize: "medium",
              border: "1px solid",
              borderRadius: "5px",
              height: "30px",
              backgroundColor: "#a3b18a",
            }}
            size="small"
          >
            Continue Shopping
          </Button>
        </Link>
      </Box>
    </div>
  );
};

export default Counter;
