import React from "react";
import * as S from "../styles";
const ChangeInfo = () => {
  return (
    <S.Container>
      <S.Title>편집샵 정보 수정</S.Title>
      <S.Input placeholder="편집샵 주소" />
      <S.Input placeholder="편집샵 상세주소" />
      <S.Input placeholder="편집샵 전화번호" />
      <S.Input placeholder="편집샵 상세설명" />
      <S.Map />
      <S.Submit>변경</S.Submit>
    </S.Container>
  );
};

export default ChangeInfo;
