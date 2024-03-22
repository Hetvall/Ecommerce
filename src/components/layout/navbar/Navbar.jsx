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
      <ul className="categories">
        <li>All</li>
        <li>Indoor</li>
        <li>Ourdoor</li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
