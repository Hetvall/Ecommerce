const ProductCard = ({ title, description, price }) => {
  return (
    <div>
      <h3>{title}</h3>
      <h4>{description}</h4>
      <h4>{price}</h4>
    </div>
  );
};

export default ProductCard;
