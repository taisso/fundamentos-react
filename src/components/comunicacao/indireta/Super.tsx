import { useState, useCallback } from "react";
import Sub from "./Sub";

const fnCounter = new Set()

const Super = (props: any) => {
  const [valor, setValor] = useState(0);

  const quandoClicar = useCallback((valor) => {
    setValor((prevState) => prevState + valor);
  }, []);

  fnCounter.add(quandoClicar)
  console.log(fnCounter.size)

  return (
    <div>
      <h4>Valor: {valor}</h4>
      <Sub quandoClicar={quandoClicar}></Sub>
    </div>
  );
};

export default Super;
