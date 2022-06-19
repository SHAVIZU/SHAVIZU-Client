import React from "react";
import * as S from "./styles";
import { Logo, EmptyLogo, LandingImg } from "../../assets";

const Landing = () => {
  return (
    <S.Container>
      <S.LeftContainer>
        <S.Header>
          <img src={EmptyLogo} alt="" />
          <span
            onClick={() => {
              window.location.href = "/search-shop";
            }}
          >
            편집샵 찾으러 가기
          </span>
          <span
            onClick={() => {
              window.location.href = "/login";
            }}
          >
            편집샵을 운영하고 계신가요?
          </span>
        </S.Header>
        <S.Texts>
          <h1>SHAVIZU</h1>
          <h3>어디에 샵있쥬?</h3>
          <span>
            주변의 편집샵, 가고싶은 편집샵을 찾기 위해 오프라인 편집샵의 모든
            정보를 제공합니다.
          </span>
        </S.Texts>
      </S.LeftContainer>
      <img src={LandingImg} alt="" />
      <img src={Logo} alt="" />
    </S.Container>
  );
};

export default Landing;
