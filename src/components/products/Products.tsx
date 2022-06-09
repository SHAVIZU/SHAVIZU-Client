import React from "react";
import Size from "./Size";
import * as S from "./styles";
type props = {
  product: any;
  isSearch: boolean;
};

const Products = ({ product, isSearch }: props) => {
  return (
    <S.Product>
      <S.Item>
        <img src={product.image_url} />
        <span>{product.brand_name}</span>
        <span>{product.item_name}</span>
        {isSearch ? (
          <div>
            <span>{product.style_code}</span>
          </div>
        ) : (
          <div>
            <span>{product.discount_price}</span>
            <span
              style={product.discount_rate === 0 ? { display: "none" } : {}}
            >
              {product.discount_rate}%
            </span>
          </div>
        )}
      </S.Item>
      {isSearch ? (
        <></>
      ) : (
        <S.Stock>
          {product.inventories.map((size: any, index: any) => {
            return <Size key={index} size={size} />;
          })}
        </S.Stock>
      )}
    </S.Product>
  );
};

export default Products;
