import { Button } from "@mui/material";
import "./Counter.css";

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
        Restar
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
        Sumar
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
    </div>
  );
};

export default Counter;
