import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList.jsx";
import { LinearProgress } from "@mui/material";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const { name } = useParams();

  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const productsCollection = collection(db, "products");
    let consult = productsCollection;
    if (name) {
      consult = query(productsCollection, where("category", "==", name));
    }
    getDocs(consult)
      .then((res) => {
        let newArray = res.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setItems(newArray);
      })
      .catch((error) => setError(error));
  }, [name]);

  // Adding the products from the code to the DB

  // const addDocsProducts = () => {
  //   let productsCollection = collection(db, "products");
  //   products.forEach((product) => addDoc(productsCollection, product));
  // };

  return (
    <>
      {/* <button onClick={addDocsProducts}>Agregar Doc</button> */}

      {items.length > 0 ? (
        <ItemList items={items} error={error} />
      ) : (
        <div style={{ margin: "200px" }}>
          <LinearProgress
            sx={{ height: "15px" }}
            color="success"
            variant="query"
          />
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
