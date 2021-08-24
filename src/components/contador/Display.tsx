import { FC } from "react";

type DisplayProps = {
  valor: number;
};

const Display:FC<DisplayProps> = ({ valor }) => {
  return <h4>Valor: {valor}</h4>;
};

export default Display;
