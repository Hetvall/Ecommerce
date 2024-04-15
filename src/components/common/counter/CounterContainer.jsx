import { useState, useEffect } from "react";
import Counter from "./Counter.jsx";

const CounterContainer = () => {
  const [contador, setContador] = useState(1);
  const [name, setName] = useState("James");

  useEffect(() => {
    setName("Maria");
  }, []); //Array de dependencias

  useEffect(() => {
    setName("Maria");
  }, [name]); //Array de dependencias con variables

  // console.log("Me ejecuto siempre");

  const sumar = () => {
    setContador(contador + 1);
  };
  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
      alert("Can't be less than one");
    }
  };

  console.log(name);

  let objectProps = {
    restar,
    sumar,
    setName,
    contador,
  };

  return <Counter {...objectProps} />;
};

export default CounterContainer;
