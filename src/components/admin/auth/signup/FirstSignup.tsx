import React from "react";
import { useState } from "react";
import * as S from "../../styles";
import { signupRequest } from "../../../../lib/api/signup";
const FirstSignup = () => {
  const [inputs, setInputs] = useState({
    id: "",
    pw: "",
    pwCheck: "",
    reNum: "",
    shopName: "",
    name: "",
    openDate: "",
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
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
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
