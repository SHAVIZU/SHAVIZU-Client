import React, { useState } from "react";
import { brandRegisterRequest } from "../../../../lib/api/brandRegister";
import { newProductRegisterRequest } from "../../../../lib/api/productRegister";
import { searchStyleCodeRequest } from "../../../../lib/api/searchStyleCode";
import * as S from "../../styles";
import RangeComponent from "../range/RangeComponent";
const wearArr = [
  "TOP",
  "BOTTOM",
  "OUTER",
  "DRESS_SET",
  "FOOT_WEAR",
  "HEAD_WEAR",
  "UNDER_WEAR",
  "ACCESSORY",
  "ETC",
];
const NewProductRegister = () => {
  const [inputs, setInputs] = useState({ name: "", code: "" });
  const { name, code } = inputs;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const requestSearchProductApi = () => {
    searchStyleCodeRequest("10043671A03120")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const requestBrandRegisterApi = () => {
    const token = localStorage.getItem("access_token");
    if (token) {
      brandRegisterRequest(token, "ADIDAS")
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  };
  const requestNewProductRegisterApi = () => {
    const token = localStorage.getItem("access_token");
    if (token) {
      newProductRegisterRequest(token)
        .then((res) => {
          console.log(res);
          window.location.href = "/main";
        })
        .catch((err) => console.log(err));
    }
  };
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
          <S.Input
            placeholder="제품명"
            name="name"
            value={name}
            onChange={onChange}
          />
          <S.OptionInputContainer>
            <S.StyleCodeInput
              type="text"
              placeholder="스타일 코드"
              name="code"
              value={code}
              onChange={onChange}
            />
            <S.InputBtn onClick={requestSearchProductApi}>입력</S.InputBtn>
          </S.OptionInputContainer>
          <S.BrandContainer>
            <S.ChoiceInputContainer>
              <span>브랜드</span>
            </S.ChoiceInputContainer>
            <S.BrandSearchContainer zIndex={-1}>
              <S.BrandSearchInput type="text" placeholder="브랜드 명" />
              <div onClick={requestBrandRegisterApi}>브랜드명 추가하기</div>
            </S.BrandSearchContainer>
          </S.BrandContainer>
          <S.BrandContainer>
            <S.ChoiceInputContainer>
              <span>카테고리</span>
            </S.ChoiceInputContainer>
            <S.CategoryContainer zIndex={1}>
              {wearArr.map((wear, i) => (
                <span key={i}>{wear}</span>
              ))}
            </S.CategoryContainer>
          </S.BrandContainer>

          <RangeComponent />
          <S.Submit onClick={requestNewProductRegisterApi}>등록</S.Submit>
        </div>
      </S.ProductBox>
    </S.Container>
  );
};

export default NewProductRegister;
