import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
  return (
    <div className="products-container">
      {items.map(({ id, title, description, img, price }) => {
        return (
          <ProductCard
            key={id}
            title={title}
            description={description}
            price={price}
            img={img}
            id={id}
          />
        );
      })}
    </div>
  );
};
export default ItemList;
