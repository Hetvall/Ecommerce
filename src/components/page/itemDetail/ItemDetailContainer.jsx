import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { products } from "../../../productsMock";
import { useState, useEffect } from "react";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState({});
  const [error, setError] = useState(null);

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

  return <ItemDetail item={item} error={error} />;
};

export default ItemDetailContainer;
