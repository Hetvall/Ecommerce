// import ProductCard from "../../common/productCard/ProductCard";
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
          color: "green",
        }}
      >
        {greeting}
      </h1>
      {/* <div className="products-container">
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
      </div> */}
    </div>
  );
};

export default ItemListContainer;
