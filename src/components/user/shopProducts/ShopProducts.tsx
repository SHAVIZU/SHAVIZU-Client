import React, { FC, useState } from "react";
import * as S from "./styles";
import Header from "../../header/Header";
import Products from "../../products/Products";
import { CloseIcon } from "../../../assets";
import { MainColor, Darkgray } from "../../../style/color";

const ShopProducts: FC = (): JSX.Element => {
  const [selectFilter, setSelectFilter] = useState<string[]>([]);

  const product = ["a", "b", "c", "d", "e", "f", "g"];

  const [topic, setTopic] = useState("");

  const [brand, setBrand] = useState(["adsf"]);

  const [size, setSize] = useState(["size"]);

  const category = [
    "상의",
    "하의",
    "원피스/세트",
    "풋웨어",
    "헤드웨어",
    "언더웨어",
    "acc",
    "기타",
  ];

  let choese: string[] = [];

  const showFilter = () => {
    if (topic === "brand") {
      choese = brand;
    } else if (topic === "category") {
      choese = category;
    } else if (topic === "size") {
      if (selectFilter.filter((it) => category.includes(it)).length !== 0) {
        choese = size;
      } else {
        choese = ["카테고리를 선택해주세요"];
      }
    }
    return choese;
  };

  return (
    <>
      <Header></Header>
      <S.Container>
        <S.ShopName>WORKSOUT</S.ShopName>
        <div>
          <S.Topic>
            <div>
              <span
                onClick={() => {
                  setTopic(topic !== "brand" ? "brand" : "");
                }}
              >
                브랜드 {topic === "brand" ? "-" : "+"}
              </span>
              <span
                onClick={() => {
                  setTopic(topic !== "category" ? "category" : "");
                }}
              >
                카테고리 {topic === "category" ? "-" : "+"}
              </span>
              <span
                onClick={() => {
                  setTopic(topic !== "size" ? "size" : "");
                }}
              >
                사이즈 {topic === "size" ? "-" : "+"}
              </span>
            </div>
            <div>
              <span
                onClick={() => {
                  setSelectFilter([]);
                }}
              >
                초기화
              </span>
              <span
                onClick={() => {
                  console.log("api 호출");
                }}
              >
                적용
              </span>
            </div>
          </S.Topic>
          <S.Filter
            style={topic === "" ? { display: "none" } : { display: "grid" }}
          >
            {showFilter().map((name, index) => {
              return (
                <span
                  key={index}
                  style={
                    selectFilter.includes(name)
                      ? { color: MainColor }
                      : { color: Darkgray }
                  }
                  onClick={() => {
                    if (name === "카테고리를 선택해주세요") {
                      return;
                    } else if (selectFilter.includes(name)) {
                      setSelectFilter(
                        selectFilter.filter((element) => element !== name)
                      );
                    } else {
                      setSelectFilter([...selectFilter, name]);
                    }
                  }}
                >
                  {name}
                </span>
              );
            })}
          </S.Filter>
          <S.SelectFilter>
            {selectFilter.map((name, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    setSelectFilter(
                      selectFilter.filter((element) => element !== name)
                    );
                  }}
                >
                  <span>{name}</span>
                  <img src={CloseIcon} alt="" />
                </div>
              );
            })}
          </S.SelectFilter>
        </div>
        <S.ProductList>
          {product.map((name, index) => {
            return <Products key={index} />;
          })}
        </S.ProductList>
      </S.Container>
    </>
  );
};

export default ShopProducts;
