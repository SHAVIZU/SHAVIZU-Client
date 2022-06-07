import React, { FC } from "react";
import * as S from "./styles";

interface shopInfoInter {
  id: number;
  name: string;
  image_url: string;
  opening_hours: string;
  address: string;
}
type shopInfo_ = {
  shopInfo: shopInfoInter;
};
const ShopList: FC<shopInfo_> = ({ shopInfo }) => {
  const { id, name, image_url, opening_hours, address } = shopInfo;

  return (
    <S.Shop>
      <img src={image_url} />
      <h1>{name}</h1>
      <div>
        <span>{opening_hours}</span>
        <span> | {address}</span>
      </div>
    </S.Shop>
  );
};

export default ShopList;
