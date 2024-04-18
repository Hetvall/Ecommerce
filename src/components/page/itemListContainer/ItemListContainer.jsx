import ItemList from "./ItemList.jsx";
import "./ItemListContainer.css";
import { products } from "../../../productsMock";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  // const navigate = useNavigate();
  const { name } = useParams();

  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let productsFiltered = products.filter(
      (product) => product.category === name
    );

    const getProducts = new Promise((resolve, reject) => {
      let x = true;
      if (x) {
        resolve(name ? productsFiltered : products);
      } else {
        reject({ status: 400, message: "Something went wrong" });
      }
    });

    getProducts
      .then((res) => setItems(res))
      .catch((error) => {
        setError(error);
      });
  }, [name]);
  // navigate();
  return <ItemList items={items} error={error} />;
};

export default ItemListContainer;
