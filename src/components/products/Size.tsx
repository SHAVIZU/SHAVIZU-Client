import React from "react";
import * as S from "./styles";

const Size = (size: any) => {
  return (
    <S.Size>
      <p>{Object.keys(size.size)}</p>
      <p>{Object.values(size.size)}</p>
    </S.Size>
  );
};

export default Size;
