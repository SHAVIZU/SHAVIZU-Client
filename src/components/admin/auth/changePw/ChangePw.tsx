import React from "react";
import * as S from "../../styles";
const ChangePw = () => {
  return (
    <S.Container>
      <S.Title>비밀번호 변경</S.Title>
      <S.Input placeholder="아이디" />
      <S.Input placeholder="사업자 등록번호" />
      <S.Input placeholder="변경할 비밀번호" type="password" />
      <S.Input placeholder="비밀번호 확인" type="password" />
      <S.Submit>변경</S.Submit>
    </S.Container>
  );
};

export default ChangePw;
