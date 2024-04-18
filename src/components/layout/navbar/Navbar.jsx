import "./Navbar.css";
import CartWidget from "../../common/cartWidget/CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="categories-bar">
      <Link to="/">
        <img
          className="plant-logo"
          src="https://res.cloudinary.com/dsrxguglp/image/upload/v1712711016/zkfye9rcxizf27x7kz1m.webp"
          alt="plant logo"
        />
      </Link>

      <ul className="categories">
        <Link to="/">All</Link>
        <Link to="/category/Indoor">Indoor</Link>
        <Link to="/category/Outdoor">Outdoor</Link>
        <Link to="/category/Cactus">Cactus</Link>
        <Link to="/category/PlantsPaintings">Plants Paintings</Link>
      </ul>
      <CartWidget />

      <h1 className="title-page">Plants & home decor</h1>
    </div>
  );
};

export default Navbar;
