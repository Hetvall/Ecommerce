import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Badge } from "@mui/material";

const Cart = ({ addedProducts }) => {
  return (
    <div style={{ position: "relative" }}>
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
      {addedProducts}
    </div>
  );
};

export default Cart;
