import React from "react";
import * as S from "../../header/styles";
import { Logo } from "../../../assets";
const Header = () => {
  return (
    <S.Header>
      <img src={Logo} alt="" />
    </S.Header>
  );
};

export default Header;
