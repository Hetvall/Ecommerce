import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Badge } from "@mui/material";

const CartWidget = () => {
  return (
    <div className="cart-logo" style={{ position: "relative" }}>
      <Badge
        badgeContent={0}
        color="success"
        showZero
        style={{ position: "absolute", top: 0, right: 50, cursor: "pointer" }}
      >
        <ShoppingCartCheckoutIcon color="action" />
      </Badge>
    </div>
  );
};

export default CartWidget;
