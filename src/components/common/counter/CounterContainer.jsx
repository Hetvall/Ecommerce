import { useState } from "react";
import Counter from "./Counter.jsx";

const CounterContainer = ({ stock, initial = 1, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      alert("Maximum stock");
    }
  };
  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      alert("Can't be less t han one");
    }
  };

  let objectProps = {
    restar,
    sumar,
    contador,
    onAdd,
  };

  return <Counter {...objectProps} />;
};

export default CounterContainer;
