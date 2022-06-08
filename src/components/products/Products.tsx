import React from "react";
import Size from "./Size";
import * as S from "./styles";

const Products = (product: any, isSearch: boolean) => {
  const productInfo = product.product;

  return (
    <S.Product>
      <S.Item>
        <img src={productInfo.image_url} />
        <span>{productInfo.brand_name}</span>
        <span>{productInfo.item_name}</span>
        {isSearch ? (
          <div>
            <span>{productInfo.style_code}</span>
          </div>
        ) : (
          <div>
            <span>{productInfo.discount_price}</span>
            <span
              style={productInfo.discount_rate === 0 ? { display: "none" } : {}}
            >
              {productInfo.discount_rate}%
            </span>
          </div>
        )}
      </S.Item>
      {isSearch ? (
        <></>
      ) : (
        <S.Stock>
          {productInfo.stock.map((size: any, index: any) => {
            return <Size key={index} size={size} />;
          })}
        </S.Stock>
      )}
    </S.Product>
  );
};

export default Products;
