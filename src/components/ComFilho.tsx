import { FC } from "react";

type PropsType = {
  children: React.ReactNode;
};

const ComFilho: FC<PropsType> = (props) => {
  return (
    <div>
      <h2>Os Filhos:</h2>
      <div>{props.children}</div>
    </div>
  );
};

export default ComFilho;
