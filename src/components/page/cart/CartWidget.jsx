import Cart from "./Cart.jsx";

const CartWidget = () => {
  let addedProducts = [];
  return <Cart addedProducts={addedProducts} />;
};

export default CartWidget;
