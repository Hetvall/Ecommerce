import "./Navbar.css";
import CartWidget from "../../page/cart/CartWidget";

const Navbar = () => {
  const handleClick = () => {};
  return (
    <div>
      <img
        className="plant-logo"
        src="https://res.cloudinary.com/dsrxguglp/image/upload/v1711057447/plant-logo.jpg"
        alt="plant logo"
      />

      <ul className="categories">
        <li onClick={handleClick} style={{ cursor: "pointer" }}>
          All
        </li>
        <li onClick={handleClick} style={{ cursor: "pointer" }}>
          Indoor
        </li>
        <li onClick={handleClick} style={{ cursor: "pointer" }}>
          Outdoor
        </li>
        <li onClick={handleClick} style={{ cursor: "pointer" }}>
          Cactus
        </li>
        <li onClick={handleClick} style={{ cursor: "pointer" }}>
          Plants Paintings
        </li>
      </ul>
      <h1 className="title-page">Plants & home decor</h1>
      <CartWidget />
    </div>
  );
};

export default Navbar;
