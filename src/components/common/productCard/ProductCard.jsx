const ProductCard = (props) => {
  const { title, description, price } = props;
  return (
    <div>
      <h3>{title}</h3>
      <h4>{description}</h4>
      <h4>{price}</h4>
    </div>
  );
};

export default ProductCard;
