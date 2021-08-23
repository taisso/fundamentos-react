import { useState } from "react";

const Input = (props) => {
  const [nome, setNome] = useState("Pedro");

  return (
    <>
    <h1>{nome}</h1>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
    </>
  );
};

export default Input;
