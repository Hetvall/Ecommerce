import { useEffect, useState } from "react";
import { productsInstance } from "../../../api/productsInstance";

const JsonServer = () => {
  const [products, setProducts] = useState([]);
  const [isChangeProducts, setIsChangeProducts] = useState(false);

  useEffect(() => {
    setIsChangeProducts(false);
    const getProducts = productsInstance.get("/products");
    getProducts.then((res) => setProducts(res.data));
  }, [isChangeProducts]);

  // Create
  const createProducts = () => {
    // fetch("http://localhost:5000/products", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     title: "nueva",
    //     price: 22,
    //     description: "probando post",
    //     img: "https://res.cloudinary.com/dnqfh2chg/image/upload/v1686581567/images_teykwq.jpg",
    //     stock:5,
    //     category: "deportivas",
    //   }),
    // });
    productsInstance.post("/products", {
      title: "new",
      price: 50.0,
      stock: 3,
      description: "Lorem Ipsun",
      category: "Indoor",
      img: "https://res.cloudinary.com/dsrxguglp/image/upload/v1711492815/ficus-1.jpg",
    });

    setIsChangeProducts(true);
  };

  //Update
  const updateProduct = (product) => {
    productsInstance.patch(`/products/${product.id}`, {
      title: "modified",
    });
    setIsChangeProducts(true);
  };

  //Delete
  const deleteProducts = (id) => {
    productsInstance.delete(`/products/${id}`);
    setIsChangeProducts(true);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", padding: 20 }}>json server y axios</h1>

      <button onClick={createProducts}>Create new</button>
      {products.map((product) => (
        <div key={product.id}>
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button onClick={() => deleteProducts(product.id)}>Delete</button>
          <button onClick={() => updateProduct(product)}>Modify</button>
        </div>
      ))}
    </div>
  );
};

export default JsonServer;
