import React, { FC } from "react";
import * as S from "./styles";
import Header from "../../header/Header";
import Products from "../../products/Products";
import ShopInfo from "../../shopInfo/ShopInfo";

const ProductSearch: FC = (): JSX.Element => {
  const items = [
    {
      id: 2,
      image_url: "image_url",
      brand_name: "brand_name",
      item_name: "item_name",
      style_code: "style_code",
    },
    {
      id: 5,
      image_url: "image_url",
      brand_name: "brand_name",
      item_name: "item_name",
      style_code: "style_code",
    },
    {
      id: 8,
      image_url: "image_url",
      brand_name: "brand_name",
      item_name: "item_name",
      style_code: "style_code",
    },
    {
      id: 2,
      image_url: "image_url",
      brand_name: "brand_name",
      item_name: "item_name",
      style_code: "style_code",
    },
    {
      id: 5,
      image_url: "image_url",
      brand_name: "brand_name",
      item_name: "item_name",
      style_code: "style_code",
    },
    {
      id: 8,
      image_url: "image_url",
      brand_name: "brand_name",
      item_name: "item_name",
      style_code: "style_code",
    },
    {
      id: 2,
      image_url: "image_url",
      brand_name: "brand_name",
      item_name: "item_name",
      style_code: "style_code",
    },
    {
      id: 5,
      image_url: "image_url",
      brand_name: "brand_name",
      item_name: "item_name",
      style_code: "style_code",
    },
    {
      id: 2,
      image_url: "image_url",
      brand_name: "brand_name",
      item_name: "item_name",
      style_code: "style_code",
    },
    {
      id: 5,
      image_url: "image_url",
      brand_name: "brand_name",
      item_name: "item_name",
      style_code: "style_code",
    },
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
    {
      id: 120,
      name: "대전 편집샵",
      image_url: "url",
      opening_hours: "9:00 - 21:00",
      address: "대전",
      inventories: [
        {
          size: "free",
          amount: 5,
        },
      ],
    },
    {
      id: 121,
      name: "용인 편집샵",
      image_url: "url",
      opening_hours: "9:00 - 21:00",
      address: "용인",
      inventories: [
        {
          size: "free",
          amount: 5,
        },
      ],
    },
    {
      id: 122,
      name: "예산 편집샵",
      image_url: "url",
      opening_hours: "9:00 - 21:00",
      address: "예산",
      inventories: [
        {
          size: "free",
          amount: 5,
        },
      ],
    },
  ];
  return (
    <div>
      <Header />
      <S.Container>
        <S.ProductsContainer>
          {items.map((item, index) => {
            return <Products key={index} product={item} isSearch={true} />;
          })}
        </S.ProductsContainer>
        <S.ShopsContainer>
          {shops.map((shop, index) => (
            <ShopInfo key={index} shopInfo={shop} isMap={false} />
          ))}
        </S.ShopsContainer>
      </S.Container>
    </div>
  );
};

export default ProductSearch;
