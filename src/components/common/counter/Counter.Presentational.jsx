const CounterPresentational = ({restar,sumar, contador,setName}) ={

}

<div>
      <button onClick={sumar}>sumar</button>
      <h2>{contador}</h2>
      <button onClick={restar}>restar</button>
      <button
        onClick={() => {
          setName("Juan");
        }}
      >
        Name
      </button>
    </div>