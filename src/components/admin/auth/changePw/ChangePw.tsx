import React, { useState } from "react";
import { changepwRequest } from "../../../../lib/api/changePw";
import * as S from "../../styles";
const ChangePw = () => {
  const [inputs, setInputs] = useState({
    id: "",
    reg_num: "",
    pw: "",
  });
  const { id, reg_num, pw } = inputs;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const requestChangepwApi = () => {
    changepwRequest(id, reg_num, pw)
      .then(() => {
        alert("비밀번호 변경이 완료되었습니다.");
        window.location.href = "/main";
      })
      .catch(() => alert("아이디 또는 사업자 등록번호가 일치하지 않습니다."));
  };
  return (
    <S.Container>
      <S.Title>비밀번호 변경</S.Title>
      <S.Input placeholder="아이디" value={id} name="id" onChange={onChange} />
      <S.Input
        placeholder="사업자 등록번호"
        value={reg_num}
        name="reg_num"
        onChange={onChange}
      />
      <S.Input
        placeholder="변경할 비밀번호"
        type="password"
        value={pw}
        name="pw"
        onChange={onChange}
      />
      <S.Submit onClick={requestChangepwApi}>변경</S.Submit>
    </S.Container>
  );
};

export default ChangePw;
