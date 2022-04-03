import React, { FC } from "react";
import FirstSignup from "../../components/auth/signup/FirstSignup";
import * as S from "../../components/auth/styles";
const SignupPage: FC = (): JSX.Element => {
  return (
    <>
      <S.Container>
        <S.Title>회원가입</S.Title>
        <S.SignupStepBox>
          <S.SignupStep />
          <S.SignupStep />
          <S.SignupStep />
        </S.SignupStepBox>
        <FirstSignup />
      </S.Container>
    </>
  );
};

export default SignupPage;
