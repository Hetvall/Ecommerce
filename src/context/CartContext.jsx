import { createContext, useState } from "react";

export const CartContext = createContext(); // ---> This is the Context

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add a product to Cart
  const addToCart = (product) => {
    let exist = isInCart(product.id); //Check if the product already exist in the cart
    if (exist) {
      let newArray = cart.map((element) => {
        if (element.id === product.id) {
          return { ...element, quantity: product.quantity };
        } else {
          return element;
        }
      });
      setCart(newArray);
    } else {
      setCart([...cart, product]);
    }
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
  };

  // Delete product
  const deleteById = (id) => {
    const newArray = cart.filter((product) => product.id !== id);
    setCart(newArray);
  };

  // Check if the product of the same is already on cart
  const isInCart = (id) => {
    let boolean = cart.some((product) => product.id === id);
    return boolean;
  };
  // Check how many products of the same are added already
  const getQuantityById = (id) => {
    let product = cart.find((element) => element.id === id);
    return product?.quantity;
  };
  // Give a total price in the Cart
  const getTotalPrice = () => {
    let total = cart.reduce((acc, element) => {
      return acc + element.quantity * element.price;
    }, 0);
    return total;
  };

  // How many items I have on Cart
  const getTotalItems = () => {
    let total = cart.reduce((acc, element) => {
      return acc + element.quantity;
    }, 0);
    return total;
  };

  let data = {
    cart,
    addToCart,
    clearCart,
    deleteById,
    getQuantityById,
    getTotalPrice,
    getTotalItems,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
