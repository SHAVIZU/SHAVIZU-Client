import React, { FC } from "react";
import FirstSignup from "../../../components/admin/auth/signup/FirstSignup";
import * as S from "../../../components/admin/styles";
import Header from "../../../components/admin/header/Header";
const SignupPage: FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <S.Container>
        <S.Title>회원가입</S.Title>
        <FirstSignup />
      </S.Container>
    </>
  );
};

export default SignupPage;
