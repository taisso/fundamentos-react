import { useState } from "react";
import Sub from "./Sub";

const Super = (props: any) => {

  const [valor, setValor] = useState(0)

  function quandoClicar(valor) {
      setValor(valor)
  }

  return (
    <div>
      <h4>Valor: {valor}</h4>
      <Sub quandoClicar={quandoClicar}></Sub>
    </div>
  );
};

export default Super;
