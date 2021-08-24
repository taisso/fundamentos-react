import React, { FC } from "react";

type PassoFormProps = {
  passo: number;
  onPassoChange: (event: React.ChangeEvent<HTMLInputElement>) => void
};

const Display: FC<PassoFormProps> = ({ passo, onPassoChange }) => {
  return (
    <input
      type="number"
      value={passo}
      onChange={onPassoChange}
    />
  );
};

export default Display;
