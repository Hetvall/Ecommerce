import ProductCard from "../../common/productCard/ProductCard";
import "./ItemListContainer.css";
import Greeting from "../../common/greeting/Greeting";

const ItemListContainer = () => {
  return (
    <div>
      <Greeting />

      <h1 className="title-page">Plants & home decor</h1>
      <div className="products-container">
        <ProductCard
          price={200}
          title={"titulo 1"}
          description={"descripcion 1"}
        />
        <ProductCard
          price={300}
          title={"titulo 2"}
          description={"descripcion 2"}
        />
        <ProductCard
          price={400}
          title={"titulo 3"}
          description={"descripcion 3"}
        />
      </div>
    </div>
  );
};

export default ItemListContainer;
