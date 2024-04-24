import { useState } from "react";
import Checkout from "./Checkout.jsx";

const CheckoutContainer = () => {
  const [info, setInfo] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (event) => {
    let { name, value } = event.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  let handles = {
    handleSubmit,
    handleChange,
  };

  return <Checkout {...handles} />;
};

export default CheckoutContainer;
