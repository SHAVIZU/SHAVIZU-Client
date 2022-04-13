import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../../styles";

const Login: FC = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.Title>로그인</S.Title>
      <S.Input placeholder="아이디" />
      <S.Input placeholder="비밀번호" type="password" />
      <S.LoginProblem onClick={() => navigate("/change-pw")}>
        비밀번호가 기억나지 않나요?
      </S.LoginProblem>
      <S.Submit>로그인</S.Submit>
      <S.LoginProblem>계정이 없으신가요?</S.LoginProblem>
    </S.Container>
  );
};

export default Login;
