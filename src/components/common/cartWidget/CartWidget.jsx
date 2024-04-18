import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <div style={{ position: "relative" }}>
      <Link to="/cart">
        <Badge
          className="badge"
          badgeContent={0}
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
