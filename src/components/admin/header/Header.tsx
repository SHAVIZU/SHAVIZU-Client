import React from "react";
import * as S from "../../header/styles";
import { Logo } from "../../../assets";
const Header = () => {
  return (
    <S.AuthHeader>
      <img src={Logo} alt="" />
    </S.AuthHeader>
  );
};

export default Header;
