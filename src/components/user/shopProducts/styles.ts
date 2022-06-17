import styled from "@emotion/styled";
import { Darkgray, Lightgray, MainColor } from "../../../style/color";

export const Container = styled.div`
  width: calc(100% - 480px);
  margin: auto;
  display: flex;
  flex-direction: column;
`;

export const ShopName = styled.h1`
  font-weight: 600;
  font-size: 128px;
  line-height: 154px;
  margin-top: 40px;
  color: ${Darkgray};
  cursor: default;
`;

export const Topic = styled.div`
  margin-top: 20px;
  height: 30px;
  border-bottom: 1px solid ${Darkgray};
  display: flex;
  justify-content: space-between;

  > div {
    display: flex;
    > span {
      padding: 0 20px;
      font-size: 16px;
      cursor: pointer;
      transition: 0.5s;
      :hover {
        color: ${MainColor};
      }
    }
  }

  > div:first-of-type {
    span {
      width: 105px;
    }
    > span:nth-of-type(2) {
      width: 121px;
    }
  }
`;

export const Filter = styled.div`
  display: grid;
  gap: 12px 20px;
  grid-template-rows: repeat(8, 1fr);
  grid: repeat(8, 1fr) / auto-flow;
  overflow-x: scroll;
  padding: 20px;
  border-bottom: 1px solid ${Darkgray};

  ::-webkit-scrollbar {
    display: none;
  }

  > span {
    font-size: 14px;
    cursor: pointer;
  }
`;

export const SelectFilter = styled.div`
  display: flex;
  margin: 8px;
  width: 100%;
  overflow-x: scroll;
  gap: 8px;
  flex-wrap: wrap;

  ::-webkit-scrollbar {
    display: none;
  }

  > div {
    padding: 2px 6px;
    background-color: #fff;
    border: 1px solid ${MainColor};
    border-radius: 3px;
    cursor: pointer;

    > span {
      color: ${MainColor};
    }

    > img {
      width: 12px;
      margin-left: 6px;
    }
  }
`;

export const ProductList = styled.div`
  width: 100%;
  display: grid;
  gap: 48px 36px;
  grid-template-columns: repeat(auto-fill, 244px);
  justify-content: space-evenly;
  margin-top: 48px;
`;

export const Product = styled.div`
  width: 244px;
  display: flex;
  gap: 8px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  > img {
    width: 200px;
    height: 260px;
    border-radius: 8px;
  }

  span {
    color: ${Darkgray};
    font-weight: 600;
  }
  span:nth-of-type(2) {
    font-size: 12px;
    font-weight: 400;
  }
  span:nth-of-type(3) {
    font-size: 12px;
    font-weight: 400;
    color: ${Lightgray};
    margin-top: 2px;
  }
`;

export const Stock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 260px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Size = styled.div`
  width: 36px;
  height: 36px;
  padding: 2px 0;
  background-color: #fff;
  border: 1px solid ${Darkgray};
  border-radius: 8px;
  text-align: center;
  cursor: default;

  p {
    color: ${Darkgray};
    font-size: 12px;
  }
  p:nth-of-type(2) {
    font-size: 10px;
    color: #ff6f69;
  }
`;
