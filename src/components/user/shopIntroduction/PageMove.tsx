import React, { FC } from "react";
import * as S from "./styles";
import { ArrowIcon } from "../../../assets";

const PageMove: FC = (): JSX.Element => {
  return (
    <S.MovePage>
      <a href="">
        <span>제품 보러가기</span>
        <img src={ArrowIcon} alt="" />
      </a>
    </S.MovePage>
  );
};

export default PageMove;
