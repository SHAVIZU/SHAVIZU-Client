import React from "react";
import * as S from "./styles";

type props = {
  size: {
    size: number | string;
    amount: number | string;
  };
};

const Size = ({ size }: props) => {
  return (
    <S.Size>
      <p>{size.size}</p>
      <p>{size.amount}</p>
    </S.Size>
  );
};

export default Size;
