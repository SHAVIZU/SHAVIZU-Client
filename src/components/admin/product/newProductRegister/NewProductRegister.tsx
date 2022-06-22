import React, { useState } from "react";
import { brandRegisterRequest } from "../../../../lib/api/brandRegister";
import { newProductRegisterRequest } from "../../../../lib/api/productRegister";
import { searchStyleCodeRequest } from "../../../../lib/api/searchStyleCode";
import { getTrackBackground, Range } from "react-range";
import * as S from "../../styles";
import * as RangeStyle from "../range/styles";
import { searchBrandRequest } from "../../../../lib/api/searchBrand";
type dataType = {
  style_code: string;
  brand_id?: number;
  name: string;
  category: string;
  image_url: string;
  unit: {
    min: number | null;
    max: number | null;
    size: number | null;
  };
  is_free: boolean;
};
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
type brandType = {
  name: string;
  id: number;
};
const NewProductRegister = () => {
  const [inputs, setInputs] = useState({ name: "", code: "", brand: "" });
  const { name, code, brand } = inputs;
  const [img, setImg] = useState("");
  const [isClick, setIsClick] = useState([false, false]);
  const [itemInfo, setItemInfo] = useState(["", ""]);
  const [rangeValue, setRangeValue] = useState([50, 350]);
  const [isFree, setIsFree] = useState(false);
  const [brand_id, setBrand_id] = useState(0);
  const [brandArr, setBrandArr] = useState<brandType[]>([]);
  const token = localStorage.getItem("access_token");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
    if (name === "brand") {
      if (token) {
        searchBrandRequest(token, value).then((res) =>
          setBrandArr(res.data.brands)
        );
      }
    }
  };
  const requestSearchProductApi = () => {
    searchStyleCodeRequest(code)
      .then((res) => setImg(res.data.img_url))
      .catch((err) => {
        alert("존재하지 않는 스타일코드입니다.");
        setInputs({ ...inputs, code: "" });
      });
  };
  const requestBrandRegisterApi = () => {
    if (token) {
      brandRegisterRequest(token, brand)
        .then(() => {
          alert("브랜드 등록이 완료되었습니다.");
        })
        .catch(() => alert("이미 존재하는 브랜드입니다."));
    }
  };
  const requestNewProductRegisterApi = () => {
    if (token) {
      let data: dataType = {
        style_code: code,
        name: name,
        category: itemInfo[1],
        image_url: img,
        brand_id: brand_id,
        unit: {
          min: null,
          max: null,
          size: 5,
        },
        is_free: isFree,
      };
      if (!isFree) {
        data.unit.min = rangeValue[0];
        data.unit.max = rangeValue[1];
      }
      newProductRegisterRequest(token, data)
        .then(() => {
          alert("등록이 완료되었습니다.");
          window.location.href = "/product-re";
        })
        .catch(() => alert("오류가 발생하였습니다."));
    }
  };
  return (
    <S.Container>
      <S.Title>새로운 제품 등록</S.Title>
      <S.ProductBox>
        {img && (
          <img src={img} alt="" style={{ width: "400px", height: "520px" }} />
        )}
        <S.ProductImg is_url={img ? true : false}>
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
            <S.ChoiceInputContainer
              onClick={() => setIsClick([!isClick[0], isClick[1]])}
            >
              <span>{itemInfo[0] !== "" ? itemInfo[0] : "브랜드"}</span>
            </S.ChoiceInputContainer>
            <S.BrandSearchContainer
              zIndex={isClick[0] ? 1 : -1}
              brandLength={brandArr.length}
            >
              <S.BrandSearchInput
                type="text"
                placeholder="브랜드 명"
                name="brand"
                value={brand}
                onChange={onChange}
              />
              {brandArr.map((b, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setBrand_id(b.id);
                    setItemInfo([b.name, itemInfo[1]]);
                  }}
                >
                  {b.name}
                </div>
              ))}
              <div
                onClick={() => {
                  requestBrandRegisterApi();
                  setIsClick([!isClick[0], isClick[1]]);
                }}
              >
                브랜드명 추가하기
              </div>
            </S.BrandSearchContainer>
          </S.BrandContainer>
          <S.BrandContainer>
            <S.ChoiceInputContainer
              onClick={() => setIsClick([isClick[0], !isClick[1]])}
            >
              <span>{itemInfo[1] !== "" ? itemInfo[1] : "카테고리"}</span>
            </S.ChoiceInputContainer>
            <S.CategoryContainer zIndex={isClick[1] ? 1 : -1}>
              {wearArr.map((wear, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setItemInfo([itemInfo[0], wear]);
                    setIsClick([isClick[0], !isClick[1]]);
                  }}
                >
                  {wear}
                </div>
              ))}
            </S.CategoryContainer>
          </S.BrandContainer>

          <RangeStyle.Container isFree={isFree}>
            <RangeStyle.SettingSize isFree={isFree}>
              <span>{rangeValue[0]}</span>
            </RangeStyle.SettingSize>
            <Range
              values={rangeValue}
              onChange={(rangeValue) => {
                setRangeValue(rangeValue);
              }}
              min={0}
              max={400}
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "1px",
                    width: "70%",
                    background: getTrackBackground({
                      min: 0,
                      max: 400,
                      values: rangeValue,
                      colors: ["#000", "#55B6CE", "#000"],
                    }),
                  }}
                >
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  style={{
                    borderRadius: "50%",
                    ...props.style,
                    height: "20px",
                    width: "20px",
                    backgroundColor: "#55B6CE",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#fff",
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                    }}
                  />
                </div>
              )}
            />
            <RangeStyle.SettingSize isFree={isFree}>
              <span>{rangeValue[1]}</span>
            </RangeStyle.SettingSize>
          </RangeStyle.Container>
          <RangeStyle.FreeContainer>
            <span
              style={
                isFree ? { visibility: "hidden" } : { visibility: "visible" }
              }
            >
              MIN
            </span>
            <RangeStyle.SetFreeSize
              isFree={isFree}
              onClick={() => setIsFree(!isFree)}
            >
              free
            </RangeStyle.SetFreeSize>
            <span
              style={
                isFree ? { visibility: "hidden" } : { visibility: "visible" }
              }
            >
              MAX
            </span>
          </RangeStyle.FreeContainer>
          <S.Submit onClick={requestNewProductRegisterApi}>등록</S.Submit>
        </div>
      </S.ProductBox>
    </S.Container>
  );
};

export default NewProductRegister;
