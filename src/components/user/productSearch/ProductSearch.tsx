import React, { FC, useEffect, useState } from "react";
import * as S from "./styles";
import Header from "../../header/Header";
import Products from "../../products/Products";
import ShopInfo from "../../shopInfo/ShopInfo";
import { useLocation } from "react-router";
import { getSearchProduct } from "../../../lib/api/searchProduct";

const ProductSearch: FC = (): JSX.Element => {
  const [queryTopic, setQueryTopic] = useState<string>("");
  const [queryInput, setQueryInput] = useState<string>("");
  const [queryCategory, setQueryCategory] = useState<string>();
  const [itemsData, setItemsData] = useState<string[]>([]);

  const location = useLocation();

  const items = [
    {
      id: 8,
      image_url: "image_url",
      brand_name: "brand_name",
      item_name: "item_name",
      style_code: "style_code",
    },
  ];

  const shops = [
    {
      id: 119,
      name: "구미 편집샵",
      image_url: "url",
      opening_hours: "9:00 - 21:00",
      address: "구미",
      inventories: [
        {
          size: "free",
          amount: 5,
        },
        {
          size: "free",
          amount: 5,
        },
        {
          size: "free",
          amount: 5,
        },
        {
          size: "free",
          amount: 5,
        },
        {
          size: "free",
          amount: 5,
        },
        {
          size: "free",
          amount: 5,
        },
        {
          size: "free",
          amount: 5,
        },
        {
          size: "free",
          amount: 5,
        },
        {
          size: "free",
          amount: 5,
        },
        {
          size: "free",
          amount: 5,
        },
        {
          size: "free",
          amount: 5,
        },
        {
          size: "free",
          amount: 5,
        },
        {
          size: "free",
          amount: 5,
        },
        {
          size: "free",
          amount: 5,
        },
        {
          size: "free",
          amount: 5,
        },
      ],
    },
  ];

  useEffect(() => {
    let getLocation = location.search.split("&");

    setQueryTopic(getLocation[0].split("=")[1]);
    setQueryInput(getLocation[1].split("=")[1]);
    setQueryCategory(getLocation[2].split("=")[1]);
  }, []);

  useEffect(() => {
    if (queryTopic === "") return;
    getSearchProduct(queryTopic, queryInput, queryCategory)
      .then((res) => {
        setItemsData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [queryTopic]);

  return (
    <div>
      <Header />
      <S.Container>
        <S.ProductsContainer>
          {itemsData.map((item, index) => {
            return <Products key={index} product={item} isSearch={true} />;
          })}
        </S.ProductsContainer>
        {/* <S.ShopsContainer>
          {shops.map((shop, index) => (
            <ShopInfo key={index} shopInfo={shop} isMap={false} />
          ))}
        </S.ShopsContainer> */}
      </S.Container>
    </div>
  );
};

export default ProductSearch;
