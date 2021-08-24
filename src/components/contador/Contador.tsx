import { FC } from "react";
import { useState } from "react";
import Display from './Display'
import PassoForm from "./PassoForm";

type ContadorProps = {
  passo?: number;
  valor?: number;
};

const Contador: FC<ContadorProps> = (props) => {
  const [valor, setValor] = useState(props.valor || 0);
  const [passo, setPasso] = useState(props.passo || 10);

  function inc() {
    setValor(valor + passo);
  }

  function dec() {
    setValor(valor - passo);
  }

  function onPassoChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPasso(+e.target.value)
  }

  return (
    <div>
      <h2>Contador</h2>
      <h4>Passo: {passo}</h4>
      <PassoForm passo={passo} onPassoChange={onPassoChange}/>

      <Display valor={valor}/>

      <div>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
      </div>
    </div>
  );
};

export default Contador;
