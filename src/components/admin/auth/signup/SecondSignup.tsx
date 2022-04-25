import React from "react";
import * as S from "../../styles";
const SecondSignup = () => {
  return (
    <>
      <S.Input placeholder="전화번호" />
      <S.Input placeholder="주소" />
      <S.Input placeholder="상세주소" />
      <S.Input placeholder="영업시간" />
      <S.Input placeholder="상세설명" />
      <S.Submit>
        <span>이전</span>
        <span>다음</span>
      </S.Submit>
    </>
  );
};

export default SecondSignup;
