import "./Navbar.css";
import CartWidget from "../../page/cart/CartWidget";

const Navbar = () => {
  return (
    <div>
      <img
        className="plant-logo"
        src="https://res.cloudinary.com/dsrxguglp/image/upload/v1711057447/plant-logo.jpg"
        alt="plant logo"
      />
      <CartWidget />
      <ul className="categories">
        <li>
          <a href="/">All</a>
        </li>
        <li>
          <a href="/">Indoor</a>
        </li>
        <li>
          <a href="/">Outdoor</a>
        </li>
        <li>
          <a href="/">Cactus</a>
        </li>
        <li>
          <a href="/"> Plants Paintings</a>
        </li>
      </ul>
      <h1 className="title-page">Plants & home decor</h1>
    </div>
  );
};

export default Navbar;
