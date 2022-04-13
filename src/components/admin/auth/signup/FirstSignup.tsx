import React from "react";
import * as S from "../../styles";
const FirstSignup = () => {
  return (
    <>
      <S.Input placeholder="아이디" />
      <S.Input placeholder="비밀번호" type="password" />
      <S.Input placeholder="비밀번호 확인" type="password" />
      <S.Input placeholder="사업자 등록번호" />
      <S.Input placeholder="편집샵 이름" />
      <S.Input placeholder="대표자명" />
      <S.Input placeholder="개업일자" />
      <S.Submit>다음</S.Submit>
    </>
  );
};

export default FirstSignup;
