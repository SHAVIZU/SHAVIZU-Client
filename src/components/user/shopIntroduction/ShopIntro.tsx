import React, { FC } from "react";
import * as S from "./styles";
import Header from "../../header/Header";
import { ArrowIcon, Logo } from "../../../assets";
import PageMove from "./PageMove";
const ShopIntro: FC = (): JSX.Element => {
  const imgSrc = [
    "https://i.pinimg.com/564x/7b/88/38/7b88380a86acc2d2f27f83dd267ba78a.jpg",
    "https://i.pinimg.com/236x/16/5b/8b/165b8b7984a3299125e7549fa7a4b67b.jpg",
    "https://i.pinimg.com/236x/d1/98/80/d19880f516f2f6866599b50bad0b5941.jpg",
    "https://i.pinimg.com/236x/62/a4/b7/62a4b7cf4c71b104568c238b546d964d.jpg",
  ];
  return (
    <>
      <Header />
      <S.Container>
        <S.ShopInfo>
          <div>
            <h1>WORKSOUT</h1>
            <PageMove />
          </div>
          <S.ShopDetail>
            <span>매장위치 | {}</span>
            <span>전화번호 | {}</span>
            <span>영업시간 | {}</span>
          </S.ShopDetail>
        </S.ShopInfo>
        <S.FirstShopImgs>
          <img src={imgSrc[0]} alt="" />
          <img src={imgSrc[1]} alt="" />
        </S.FirstShopImgs>
      </S.Container>

      <S.Container>
        <S.SecondShopImgs>
          <img src={imgSrc[2]} alt="" />
          <img src={imgSrc[3]} alt="" />
        </S.SecondShopImgs>
        <S.ShopInfo>
          <h1>WORKSOUT</h1>
          <span>
            해외 및 국내의 다양한 패션 브랜드와 라이프 스타일을 소개하는 편집샵
          </span>
          <PageMove />
          <S.Logo>
            <img src={Logo} alt="" />
          </S.Logo>
        </S.ShopInfo>
      </S.Container>
    </>
  );
};

export default ShopIntro;
