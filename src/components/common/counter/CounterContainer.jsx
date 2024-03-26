import { useState, useEffect } from "react";

const Counter = () => {
  const [contador, setContador] = useState(0);
  const [name, setName] = useState("James");

  useEffect(() => {
    setName("Maria");
  }, []); //Array de dependencias

  useEffect(() => {
    setName("Maria");
  }, []);

  console.log("Me ejecuto");

  const sumar = () => {
    setContador(contador + 1);
  };
  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  console.log(name);

  let objectProps = {
    restar,
    sumar,
    setName,
    contador,
  };

  return <CounterPresentational {...objectProps} />;
};

export default Counter;
