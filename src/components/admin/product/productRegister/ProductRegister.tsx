import React, { useState } from "react";
import { getItemInfoRequest } from "../../../../lib/api/getProductInfo";
import { getStyleCodeRequest } from "../../../../lib/api/getStyleCode";
import * as S from "../../styles";
import StockList from "../stockList/StockList";
const ProductRegister = () => {
  const token = localStorage.getItem("access_token");
  const [styleCodeArr, setStyleCodeArr] = useState<string[]>([]);
  const [idArr, setIdArr] = useState<number[]>([]);
  const [imgurl, setImgurl] = useState<string>("");
  const [inputs, setInputs] = useState({ styleCode: "", price: 0, sale: 0 });
  const { styleCode, price, sale } = inputs;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const sizeArr = [90, 95, 100, 105, 110];
  const requestSearchStyleCode = () => {
    if (token) {
      getStyleCodeRequest(token, styleCode)
        .then((res) => {
          const data = res.data.items;
          if (data.length === 0) {
            alert("존재하지 않는 스타일코드입니다.");
          }
          let arr: string[] = [];
          data.forEach((i: any) => {
            arr.push(i.style_code);
          });
          setStyleCodeArr(arr);
          let idArray: number[] = [];
          data.forEach((i: any) => {
            idArray.push(i.id);
          });
          setIdArr(idArray);
        })
        .catch(() => alert("문제가 발생하였습니다."));
    }
  };
  const requestItemInfo = (id: number) => {
    if (token) {
      getItemInfoRequest(token, id)
        .then((res) => {
          setImgurl(res.data.image_url);
          console.log(res.data.image_url);
        })
        .catch(() => {
          alert("문제가 발생하였습니다.");
        });
    }
  };
  return (
    <S.Container>
      <S.Title>판매 제품 등록</S.Title>
      <S.ProductBox>
        {imgurl && (
          <img
            src={imgurl}
            alt=""
            style={{ width: "400px", height: "520px" }}
          />
        )}
        <S.ProductImgWrap is_url={imgurl ? true : false}>
          <S.SearchWrap>
            <S.SearchStyleCodeInput
              placeholder="스타일코드 입력"
              onChange={onChange}
              name="styleCode"
              value={styleCode}
            />
            <S.InputBtn onClick={requestSearchStyleCode}>검색</S.InputBtn>
          </S.SearchWrap>
          {styleCodeArr.map((code, i) => (
            <S.StyleCode onClick={() => requestItemInfo(idArr[i])} key={i}>
              {code}
            </S.StyleCode>
          ))}
          <S.StyleCode
            onClick={() => {
              window.location.href = "/new-pro";
            }}
          >
            새로운 제품 등록
          </S.StyleCode>
        </S.ProductImgWrap>
        <S.ProductInfoWrap>
          <S.PriceInputWrap>
            <S.PriceInputContainer>
              <span>정가</span>
              <S.PriceInput
                type="number"
                onChange={onChange}
                name="price"
                value={price}
              />
              <span>원</span>
            </S.PriceInputContainer>
            <S.PriceInputContainer>
              <span>할인율</span>
              <S.PriceInput
                type="number"
                onChange={onChange}
                name="sale"
                value={sale}
              />
              <span>%</span>
            </S.PriceInputContainer>
          </S.PriceInputWrap>
          <S.StockListWrap>
            {sizeArr.map((index, i) => (
              <StockList size={index} key={i} />
            ))}
          </S.StockListWrap>
          <S.Submit>등록</S.Submit>
        </S.ProductInfoWrap>
      </S.ProductBox>
    </S.Container>
  );
};

export default ProductRegister;
