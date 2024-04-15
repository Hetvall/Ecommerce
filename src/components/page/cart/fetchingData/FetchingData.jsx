import { useEffect, useState } from "react";

const FetchingData = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProduct = fetch("https://fakestoreapi.com/products");
    getProduct
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h1>{product.title}</h1>
          <img src={product.image} alt="" />
        </div>
      ))}
    </div>
  );
};

export default FetchingData;
