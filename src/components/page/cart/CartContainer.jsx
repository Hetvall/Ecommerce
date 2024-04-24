import { useContext } from "react";
import { CartContext } from "../../../context/CartContext.jsx";
import Cart from "./Cart.jsx";

const CartContainer = () => {
  const { cart, clearCart, deleteById } = useContext(CartContext);
  return <Cart cart={cart} clearCart={clearCart} deleteById={deleteById} />;
};

export default CartContainer;
