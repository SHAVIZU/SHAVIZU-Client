import React, { FC, useEffect, useState } from "react";
import * as S from "./styles";
import Header from "../../header/Header";
import { Logo } from "../../../assets";
import PageMove from "./PageMove";
import { getShopDetail } from "../../../lib/api/shopIntro";
import { shopType } from "../../../lib/types/shopIntro";
const ShopIntro: FC = (): JSX.Element => {
  const [data, setData] = useState<shopType>({
    name: "",
    address: "",
    telephone: "",
    opening_hours: "",
    description: "",
    images: [],
  });

  const [shopId, setShopId] = useState<number | string>(0);

  const requestGetData = (id: number | string) => {
    getShopDetail(id)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    let getId = window.location.search.split("=");
    setShopId(getId[1]);
    requestGetData(shopId);
  }, []);

  return (
    <>
      <Header />
      <S.Container>
        <S.ShopInfo>
          <div>
            <h1>{data.name}</h1>
            <PageMove id={shopId} />
          </div>
          <S.ShopDetail>
            <span>매장위치 | {data.address}</span>
            <span>전화번호 | {data.telephone}</span>
            <span>영업시간 | {data.opening_hours}</span>
          </S.ShopDetail>
        </S.ShopInfo>
        <S.FirstShopImgs>
          <img src={data.images[0]} alt="" />
          <img src={data.images[1]} alt="" />
        </S.FirstShopImgs>
      </S.Container>

      <S.Container>
        <S.SecondShopImgs>
          <img src={data.images[2]} alt="" />
          <img src={data.images[3]} alt="" />
        </S.SecondShopImgs>
        <S.ShopInfo>
          <h1>WORKSOUT</h1>
          <span>{data.description}</span>
          <PageMove id={shopId} />
          <S.Logo>
            <img src={Logo} alt="" />
          </S.Logo>
        </S.ShopInfo>
      </S.Container>
    </>
  );
};

export default ShopIntro;
