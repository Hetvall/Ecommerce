const Counter = ({ restar, sumar, contador, setName }) => {
  return (
    <div>
      <button onClick={restar}>Restar</button>
      <h2>{contador}</h2>
      <button onClick={sumar}>Sumar</button>
      <button onClick={() => setName("Andres")}>Change Name</button>
    </div>
  );
};

export default Counter;
