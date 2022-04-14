import styled from "@emotion/styled";
import { Darkgray, Lightgray } from "../../style/color";

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
