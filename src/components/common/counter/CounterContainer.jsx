import { useState } from "react";
import Counter from "./Counter.jsx";
import Swal from "sweetalert2";

const CounterContainer = ({ stock, initial = 1, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      Swal.fire({
        position: "center",
        icon: "info",
        title: "Maximum stock reached",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      Swal.fire({
        position: "center",
        icon: "info",
        title: "Can't be less than one",
        showConfirmButton: false,
        timer: 1500,
      });
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
