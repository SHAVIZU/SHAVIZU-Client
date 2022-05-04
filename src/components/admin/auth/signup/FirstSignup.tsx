import React from "react";
import { useState } from "react";
import * as S from "../../styles";
import { signupRequest } from "../../../../lib/api/signup";
import { useNavigate } from "react-router-dom";
const FirstSignup = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    id: "",
    pw: "",
    pwCheck: "",
    reNum: "",
    shopName: "",
    name: "",
    openDate: "2022-05-02",
  });
  const { id, pw, pwCheck, reNum, shopName, name, openDate } = inputs;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const requestSignupApi = () => {
    signupRequest(id, pw, shopName, reNum, name, openDate)
      .then((res) => {
        localStorage.setItem("access_token", res.data.access_token);
        alert("회원가입이 완료되었습니다.");
        navigate("/");
      })
      .catch((err) => {
        if (err.response.status === 400) {
          alert("아이디 혹은 비밀번호를 확인해주세요");
        } else if (err.response.status === 409) {
          alert("이미 존재하는 아이디 혹은 사업자 등록번호입니다.");
        } else {
          alert("예기치못한 오류가 발생하였습니다.");
        }
      });
  };
  return (
    <>
      <S.Input placeholder="아이디" name="id" value={id} onChange={onChange} />
      <form>
        <S.Input
          autoComplete="off"
          placeholder="비밀번호"
          type="password"
          name="pw"
          value={pw}
          onChange={onChange}
        />
      </form>

      <form>
        <S.Input
          autoComplete="off"
          placeholder="비밀번호 확인"
          type="password"
          name="pwCheck"
          value={pwCheck}
          onChange={onChange}
        />
      </form>

      <S.Input
        placeholder="사업자 등록번호"
        name="reNum"
        value={reNum}
        onChange={onChange}
      />
      <S.Input
        placeholder="편집샵 이름"
        name="shopName"
        value={shopName}
        onChange={onChange}
      />
      <S.Input
        placeholder="대표자명"
        name="name"
        value={name}
        onChange={onChange}
      />
      <S.Input
        placeholder="개업일자"
        name="openDate"
        value={openDate}
        onChange={onChange}
      />
      <S.Submit onClick={() => requestSignupApi()}>회원가입</S.Submit>
    </>
  );
};

export default FirstSignup;
