import { PiShoppingCartFill } from "react-icons/pi";
import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div className="cart-logo">
      <PiShoppingCartFill size={40} />
    </div>
  );
};

export default CartWidget;
