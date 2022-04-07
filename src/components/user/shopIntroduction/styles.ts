import styled from "@emotion/styled";
import { BackgroundColor, Darkgray, MainColor } from "../../../style/color";

export const Container = styled.div`
  background-color: ${BackgroundColor};
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: row;
`;

export const ShopInfo = styled.div`
  position: relative;
  z-index: 10;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 240px;

  > div {
    > div:last-child {
      margin-left: 60px;
    }

    > h1 {
      font-weight: 600;
      font-size: 112px;
      line-height: 154px;
      margin-top: 160px;
      color: ${Darkgray};
    }
  }

  > h1 {
    font-weight: 600;
    font-size: 112px;
    line-height: 154px;
    margin-bottom: 32px;
    color: ${Darkgray};
  }

  > span {
    width: 642px;
    font-size: 32px;
  }
`;

export const MovePage = styled.div`
  width: 256px;
  height: 45px;
  border-bottom: 2px solid ${MainColor};
  margin-top: 32px;

  & span {
    font-size: 28px;
    color: ${MainColor};
    margin-right: 12px;
  }
`;

export const ShopDetail = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    font-weight: 300;
    font-size: 16px;
    line-height: 40px;
    color: ${Darkgray};
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;

  > img {
    width: 184px;
    margin-top: 200px;
  }
`;

export const FirstShopImgs = styled.div`
  display: flex;
  flex-direction: column;

  > img {
    border-radius: 16px;
    :first-of-type {
      width: 1058px;
      height: 600px;
      position: absolute;
      right: 240px;
      top: 180px;
    }

    :last-of-type {
      width: 400px;
      height: 280px;
      position: absolute;
      right: 360px;
      bottom: 64px;
    }
  }
`;

export const SecondShopImgs = styled(FirstShopImgs)`
  position: relative;
  width: 50%;

  > img {
    :first-of-type {
      width: 656px;
      height: 693px;
      position: absolute;
      top: 24px;
      left: 240px;
    }

    :last-of-type {
      width: 540px;
      height: 360px;
      position: absolute;
      bottom: 40px;
      left: 480px;
    }
  }
`;
