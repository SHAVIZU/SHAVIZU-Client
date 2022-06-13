import React, { FC } from "react";
import * as S from "./styles";
import { ArrowIcon } from "../../../assets";
type prop = {
  id: number | string;
};

const PageMove: FC<prop> = ({ id }): JSX.Element => {
  return (
    <S.MovePage>
      <a href={`/shop-products?=${id}`}>
        <span>제품 보러가기</span>
        <img src={ArrowIcon} alt="" />
      </a>
    </S.MovePage>
  );
};

export default PageMove;
