// import ProductCard from "../../common/productCard/ProductCard";
import ItemList from "./ItemList.jsx";
import { products } from "../../../productsMock";
import { useEffect, useState } from "react";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      let x = true;
      if (x) {
        setTimeout(() => {
          resolve(products);
        }, 2000);
      } else {
        reject({ status: 400, message: "Algo salio mal" });
      }
    });

    getProducts
      .then((res) => setItems(res))
      .catch((error) => {
        setError(error);
      });
  }, []);

  return <ItemList items={items} error={error} />;
};

export default ItemListContainer;
