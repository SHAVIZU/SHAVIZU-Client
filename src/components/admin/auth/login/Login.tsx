import React, { FC, useState } from "react";
import { loginRequest } from "../../../../lib/api/login";
import * as S from "../../styles";

const Login: FC = (): JSX.Element => {
  const [inputs, setInputs] = useState({ id: "", pw: "" });
  const { id, pw } = inputs;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const requestLoginApi = () => {
    loginRequest(id, pw)
      .then((res) => {
        localStorage.setItem("access_token", res.data.access_token);
        alert("로그인이 완료되었습니다.");
        window.location.href = "/";
      })
      .catch((err) => {
        alert("아이디 혹은 비밀번호를 확인해주세요");
      });
  };

  return (
    <S.Container>
      <S.Title>로그인</S.Title>
      <S.Input placeholder="아이디" name="id" value={id} onChange={onChange} />
      <S.Input
        placeholder="비밀번호"
        type="password"
        name="pw"
        value={pw}
        onChange={onChange}
      />
      <S.LoginProblem onClick={() => (window.location.href = "/change-pw")}>
        비밀번호가 기억나지 않나요?
      </S.LoginProblem>
      <S.Submit onClick={() => requestLoginApi()}>로그인</S.Submit>
      <S.LoginProblem>계정이 없으신가요?</S.LoginProblem>
    </S.Container>
  );
};

export default Login;
