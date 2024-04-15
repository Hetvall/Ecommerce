import "./Navbar.css";
import CartWidget from "../../page/cart/CartWidget.jsx";

const Navbar = () => {
  return (
    <div className="categories-bar">
      <img
        className="plant-logo"
        src="https://res.cloudinary.com/dsrxguglp/image/upload/v1712711016/zkfye9rcxizf27x7kz1m.webp"
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
