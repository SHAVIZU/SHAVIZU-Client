import React, { FC } from "react";
import Signup from "../../../components/admin/auth/signup/Signup";
import * as S from "../../../components/admin/styles";
import Header from "../../../components/admin/header/Header";
const SignupPage: FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <S.SignupContainer>
        <S.Title>회원가입</S.Title>
        <Signup />
      </S.SignupContainer>
    </>
  );
};

export default SignupPage;
