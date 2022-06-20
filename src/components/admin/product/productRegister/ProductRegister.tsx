import React, { useState } from "react";
import { getItemInfoRequest } from "../../../../lib/api/getProductInfo";
import { getStyleCodeRequest } from "../../../../lib/api/getStyleCode";
import { sellItemRegisterRequest } from "../../../../lib/api/sellItemRegister";
import * as S from "../../styles";
type size = {
  id?: number;
  size?: number;
  amount: number;
  item_size_id?: number;
};
const ProductRegister = () => {
  const token = localStorage.getItem("access_token");
  const [styleCodeArr, setStyleCodeArr] = useState<string[]>([]);
  const [id, setId] = useState<number>(0);
  const [idArr, setIdArr] = useState<number[]>([]);
  const [imgurl, setImgurl] = useState<string>("");
  const [inputs, setInputs] = useState({ styleCode: "", price: 0, sale: 0 });
  const { styleCode, price, sale } = inputs;
  const [sizeArr, setSizeArr] = useState<size[]>([]);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
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
          let arr = res.data.size;
          arr.map((i: any) => (i.amount = 0));
          setSizeArr(arr);
          setId(id);
        })
        .catch(() => {
          alert("문제가 발생하였습니다.");
        });
    }
  };
  const requestSellItemRegister = () => {
    let arr = sizeArr;
    arr.forEach((i) => {
      delete i.size;
      i.item_size_id = i.id;
      delete i.id;
    });
    const item = {
      sell: {
        price: Number(price),
        discount_rate: Number(sale),
      },
      item: arr,
    };
    if (token) {
      sellItemRegisterRequest(token, id, item)
        .then(() => {
          alert("제품 등록이 완료되었습니다.");
          window.location.href = "/main";
        })
        .catch((err) => alert("문제가 발생하였습니다."));
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
              <S.StockListContainer key={i}>
                <S.StockListItem>
                  <h5>{index.size}</h5>
                  <span>{index.amount + "개"}</span>
                </S.StockListItem>
                <S.StockChangeWrap>
                  <S.StockChangeItem
                    onClick={() => {
                      let arr = sizeArr;
                      if (arr[i].amount >= 0) {
                        arr[i].amount += 1;
                        setSizeArr([...arr]);
                      }
                    }}
                  />
                  <span>재고</span>
                  <S.StockChangeItem
                    onClick={() => {
                      let arr = sizeArr;
                      if (arr[i].amount > 0) {
                        arr[i].amount -= 1;
                        setSizeArr([...arr]);
                      }
                    }}
                  />
                </S.StockChangeWrap>
              </S.StockListContainer>
            ))}
          </S.StockListWrap>
          <S.Submit onClick={() => requestSellItemRegister()}>등록</S.Submit>
        </S.ProductInfoWrap>
      </S.ProductBox>
    </S.Container>
  );
};

export default ProductRegister;
