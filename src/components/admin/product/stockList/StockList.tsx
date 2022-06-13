import React, { useState } from "react";
import * as S from "../../styles";
const StockList = (props: any) => {
  const [productNum, setProductNum] = useState(0);
  return (
    <S.StockListContainer>
      <S.StockListItem>
        <h5>{props.size}</h5>
        <span>{productNum + "개"}</span>
      </S.StockListItem>
      <S.StockChangeWrap>
        <S.StockChangeItem onClick={() => setProductNum(productNum + 1)} />
        <span>재고</span>
        <S.StockChangeItem
          onClick={() => setProductNum(productNum === 0 ? 0 : productNum - 1)}
        />
      </S.StockChangeWrap>
    </S.StockListContainer>
  );
};

export default StockList;
