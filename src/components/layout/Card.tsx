import { FC } from "react";
import "./Card.css";

type PropsType = {
  children?: React.ReactNode;
  titulo: string;
};

const Card: FC<PropsType> = (props) => {
  return (
    <div className="Card">
      <div className="Conteudo">
        {props.children}
      </div>
      <div className="Footer">{props.titulo}</div>
    </div>
  );
};

export default Card;
