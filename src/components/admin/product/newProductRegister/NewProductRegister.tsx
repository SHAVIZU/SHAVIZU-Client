import React from "react";
import * as S from "../../styles";
const NewProductRegister = () => {
  return (
    <S.Container>
      <S.Title>새로운 제품 등록</S.Title>
      <S.ProductBox>
        <S.ProductImg>
          스타일코드를 입력하면
          <br />
          자동으로 사진을 찾습니다.
          <span>720 X 760</span>
        </S.ProductImg>
        <div>
          <S.Input placeholder="제품명" />
          <S.Input placeholder="스타일 코드" />
          <S.Input placeholder="브랜드" />
          <S.Input placeholder="카테고리" />
          <S.Input placeholder="range가 들어갈 자리" />
          <S.Submit>등록</S.Submit>
        </div>
      </S.ProductBox>
    </S.Container>
  );
};

export default NewProductRegister;
