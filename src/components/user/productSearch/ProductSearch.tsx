import React, { FC } from "react";
import * as S from "./styles";
import Header from "../../header/Header";
import Products from "../../products/Products";

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
  ];
  return (
    <div>
      <Header></Header>
      <S.Container>
        {items.map((item, index) => {
          return <Products key={index} product={item} isSearch={true} />;
        })}
      </S.Container>
    </div>
  );
};

export default ProductSearch;
