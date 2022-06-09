import styled from "@emotion/styled";
import { Darkgray, Lightgray } from "../../style/color";

export const Product = styled.div`
  width: 244px;
  /* height: 320px; */
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
  > div {
    display: flex;
    justify-content: space-between;
    > span {
      font-size: 12px;
      font-weight: 400;
      color: ${Darkgray};
      margin-top: 2px;
    }
    > span:nth-of-type(2) {
      font-size: 12px;
      font-weight: 400;
      color: #ff6f69;
    }
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
  min-width: 36px;
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
