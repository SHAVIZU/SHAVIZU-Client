import React from "react";
import * as S from "../../styles";
const StockList = () => {
  return (
    <S.StockListContainer>
      <S.StockListItem>
        <h5>90</h5>
        <span>80</span>
      </S.StockListItem>
      <S.StockChangeWrap>
        <S.StockChangeItem />
        <span>재고</span>
        <S.StockChangeItem />
      </S.StockChangeWrap>
    </S.StockListContainer>
  );
};

export default StockList;
