import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Badge } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);
  let total = getTotalItems();

  return (
    <div style={{ position: "relative" }}>
      <Link to="/cart">
        <Badge
          className="badge"
          badgeContent={total}
          color="success"
          showZero
          style={{
            position: "absolute",
            bottom: 0,
            right: 20,
            cursor: "pointer",
          }}
        >
          <ShoppingCartCheckoutIcon color="action" />
        </Badge>
      </Link>
    </div>
  );
};

export default CartWidget;
