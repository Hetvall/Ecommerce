import { useParams } from "react-router-dom";
import { products } from "../../../productsMock";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState({});

  const [error, setError] = useState(null);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    let itemFound = products.find((product) => product.id === +id);
    const getProduct = new Promise((resolve, reject) => {
      if (itemFound) {
        resolve(itemFound);
      } else {
        reject({ status: 400, message: "Something went wrong" });
      }
    });
    getProduct.then((res) => setItem(res)).catch((error) => setError(error));
  }, [id]);

  const onAdd = (cantidad) => {
    let product = { ...item, quantity: cantidad };
    addToCart(product);
  };

  return <ItemDetail item={item} onAdd={onAdd} error={error} />;
};

export default ItemDetailContainer;
