import { FC, useEffect, useState } from "react";
import * as S from "./styles";
import Header from "../../header/Header";
import Products from "../../products/Products";
import { CloseIcon } from "../../../assets";
import { MainColor, Darkgray } from "../../../style/color";
import { shopProductsType } from "../../../lib/types/shopProducts";
import { getShopProducts } from "../../../lib/api/shopProducts";
import { getShopBrands } from "../../../lib/api/shopProducts/filterBrand";
import { getShopSizes } from "../../../lib/api/shopProducts/filterSize";
import { types } from "@babel/core";

const ShopProducts: FC = (): JSX.Element => {
  const [shopId, setShopId] = useState<number | string>(33);
  const [choose, setChoose] = useState<string[]>([]);

  const [shopInfo, setShopInfo] = useState<shopProductsType>();
  const [selectFilter, setSelectFilter] = useState<string[]>([]);

  const [topic, setTopic] = useState<string>("");
  const [brand, setBrand] = useState<string[]>([]);
  const [size, setSize] = useState<string[]>([]);

  const [selectBrand, setSelectBrand] = useState<string[]>([]);
  const [selectCategory, setSelectCategory] = useState<string[]>([]);
  const [selectSize, setSelectSize] = useState<string[]>([]);

  const category = {
    상의: "TOP",
    하의: "BOTTOM",
    아우터: "OUTER",
    "원피스/세트": "DRESS_SET",
    풋웨어: "FOOT_WEAR",
    헤드웨어: "HEAD_WEAR",
    언더웨어: "UNDER_WEAR",
    acc: "ACCESSORY",
    etc: "ETC",
  };

  const filterAssignment = (name: string) => {
    switch (topic) {
      case "brand":
        setSelectBrand(selectBrand?.concat(name));
        break;
      case "category":
        setSelectCategory(
          selectCategory?.concat(category[name as keyof typeof category])
        );
        break;
      case "size":
        setSelectSize(selectSize?.concat(name));
        break;
      default:
        console.log(topic);
    }
  };

  const requestGetBrands = () => {
    getShopBrands(shopId).then((res) => {
      setBrand(res.data.brands);
    });
  };

  const requestGetShop = () => {
    const brands = selectBrand.join(",");
    const categorys = selectCategory.join(",");
    const sizes = selectSize.join(",");

    getShopProducts(shopId, brands, categorys, sizes)
      .then((res) => {
        setShopInfo(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    let getId = window.location.search.split("=");
    setShopId(getId[1]);

    requestGetShop();
    requestGetBrands();
  }, []);

  useEffect(() => {
    switch (topic) {
      case "brand":
        setChoose(brand);
        break;
      case "category":
        setChoose(Object.keys(category));
        break;
      case "size":
        if (
          selectFilter.filter((it) => Object.keys(category).includes(it))
            .length !== 0
        )
          setChoose(size);
        else setChoose(["카테고리를 선택해주세요"]);
        break;
      default:
        console.log(topic);
    }
  }, [topic]);

  useEffect(() => {
    getShopSizes(shopId, selectCategory)
      .then((res) => {
        setSize(res.data.sizes);
      })
      .catch((err) => console.log(err));
  }, [selectCategory]);

  return (
    <>
      <Header />
      <S.Container>
        <S.ShopName>{shopInfo?.shop_name}</S.ShopName>
        <div>
          <S.Topic>
            <div>
              <span
                onClick={() => {
                  setTopic(topic !== "brand" ? "brand" : "");
                }}
                style={topic === "brand" ? { color: "#55b6cd" } : {}}
              >
                브랜드 {topic === "brand" ? "-" : "+"}
              </span>
              <span
                onClick={() => {
                  setTopic(topic !== "category" ? "category" : "");
                }}
                style={topic === "category" ? { color: "#55b6cd" } : {}}
              >
                카테고리 {topic === "category" ? "-" : "+"}
              </span>
              <span
                onClick={() => {
                  setTopic(topic !== "size" ? "size" : "");
                }}
                style={topic === "size" ? { color: "#55b6cd" } : {}}
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
                  requestGetShop();
                }}
              >
                적용
              </span>
            </div>
          </S.Topic>
          {topic && (
            <S.Filter>
              {choose?.map((name, index) => {
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
                        setSelectCategory(
                          selectCategory?.filter((item) => item !== name)
                        );
                      } else {
                        setSelectFilter([...selectFilter, name]);
                        filterAssignment(name);
                      }
                    }}
                  >
                    {name}
                  </span>
                );
              })}
            </S.Filter>
          )}

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
          {shopInfo ? (
            shopInfo.items &&
            shopInfo.items.map((item: object, index: number) => {
              return <Products key={index} product={item} isSearch={false} />;
            })
          ) : (
            <p>제품이 존재하지 않습니다.</p>
          )}
        </S.ProductList>
      </S.Container>
    </>
  );
};

export default ShopProducts;
