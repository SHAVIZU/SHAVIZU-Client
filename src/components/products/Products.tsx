import React from "react";
import * as S from "./styles";

const Products = () => {
  return (
    <S.Product>
      <S.Item>
        <img
          src="https://cdn.jentestore.io/resource/products/412995/412995_1.jpg"
          alt=""
        />
        <span>Raf Simons</span>
        <span>라프 시몬스 X 스마일리 티셔츠</span>
        <span>224M122</span>
      </S.Item>
      <S.Stock>
        <S.Size>
          <p>90</p>
          <p>5</p>
        </S.Size>
      </S.Stock>
    </S.Product>
  );
};

export default Products;
