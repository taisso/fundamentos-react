import { FC } from "react";
import "./Card.css";

type PropsType = {
  children?: React.ReactNode;
  titulo: string;
  color?: string;
};

const Card: FC<PropsType> = (props) => {
  return (
    <div className="Card" style={{ borderColor: props.color || "#000" }}>
      <div className="Conteudo">{props.children}</div>
      <div
        className="Footer"
        style={{ backgroundColor: props.color || "#000" }}
      >
        {props.titulo}
      </div>
    </div>
  );
};

export default Card;
