import React from "react";
import Size from "../products/Size";
import * as S from "./styles";

type props = {
  shopInfo: any;
  isMap: boolean;
};

const ShopItem = ({ shopInfo, isMap }: props) => {
  return (
    <S.Shop
      onClick={(e: any) => {
        window.location.href =
          "http://localhost:3000/shop-intro?=" + shopInfo.id;
      }}
    >
      <img src={shopInfo.image_url} />
      <h1>{shopInfo.name}</h1>
      <div>
        <span>{shopInfo.opening_hours}</span>
        <span> | {shopInfo.address}</span>
      </div>
      {isMap ? (
        <></>
      ) : (
        <S.Stock>
          {shopInfo?.inventory?.map((size: any, index: any) => {
            return <Size key={index} size={size} />;
          })}
        </S.Stock>
      )}
    </S.Shop>
  );
};

export default ShopItem;
