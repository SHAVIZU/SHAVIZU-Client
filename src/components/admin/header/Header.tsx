import React from "react";
import * as S from "../../header/styles";
import { Logo } from "../../../assets";
const Header = () => {
  return (
    <S.AuthHeader>
      <img src={Logo} alt="" onClick={() => (window.location.href = "/main")} />
    </S.AuthHeader>
  );
};

export default Header;
