import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import ItemDetail from "./ItemDetail";
import Swal from "sweetalert2";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState({});

  const [error, setError] = useState(null);

  const { addToCart, getQuantityById } = useContext(CartContext);

  let initial = getQuantityById(+id);

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let refDoc = doc(productsCollection, id);
    getDoc(refDoc)
      .then((res) => {
        setItem({ id: res.id, ...res.data() });
      })
      .catch((error) => setError(error.message));
  }, [id]);

  const onAdd = (cantidad) => {
    let product = { ...item, quantity: cantidad };
    if (cantidad > item.stock) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "We're sorry, there are not Stock for this product!",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      addToCart(product);

      Swal.fire({
        position: "center",
        icon: "success",
        title: "The product has been added to the cart!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <ItemDetail item={item} onAdd={onAdd} initial={initial} error={error} />
  );
};

export default ItemDetailContainer;
