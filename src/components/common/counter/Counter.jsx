import { useState } from "react";

const Counter = () => {
  const [contador, setContador] = useState(0);
  const sumar = () => {
    setContador(contador + 1);
  };
  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div>
      <button onClick={sumar}>sumar</button>
      <h2>{contador}</h2>
      <button onClick={restar}>restar</button>
    </div>
  );
};

export default Counter;
