import { FC } from "react";

type PropsType = {
  sobrenome: string;
};

const Filho:FC<PropsType> = (props) => {
  return (
    <div>
      <p>{props.children} {props.sobrenome}</p>
    </div>
  );
};

export default Filho;
