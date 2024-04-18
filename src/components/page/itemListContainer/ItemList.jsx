import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
  return (
    <div className="products-container">
      {items.map(({ id, title, description, img, price, stock }) => {
        return (
          <ProductCard
            key={id}
            title={title}
            description={description}
            price={price}
            img={img}
            id={id}
            stock={stock}
          />
        );
      })}
    </div>
  );
};
export default ItemList;
