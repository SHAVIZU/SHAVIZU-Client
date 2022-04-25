import React from "react";
import * as S from "../../styles";
import StockList from "../stockList/StockList";
const ProductRegister = () => {
  const stockArr = [1, 1, 1, 1, 1];
  return (
    <S.Container>
      <S.Title>판매 제품 등록</S.Title>
      <S.ProductBox>
        <S.ProductImg />
        <div>
          <S.PriceInputWrap>
            <S.PriceInput placeholder="정가" />
            <S.PriceInput placeholder="할인율" />
          </S.PriceInputWrap>
          <S.StockListWrap>
            {stockArr.map((index, i) => (
              <StockList key={i} />
            ))}
          </S.StockListWrap>
          <S.Submit>등록</S.Submit>
        </div>
      </S.ProductBox>
    </S.Container>
  );
};

export default ProductRegister;
