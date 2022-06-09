import styled from "@emotion/styled";
import { Darkgray, MainColor } from "../../style/color";

export const Shop = styled.div`
  /* width: 528px; */
  width: 100%;

  > img {
    width: 100%;
    height: 200px;
    border-radius: 24px;
    background-color: ${MainColor};
  }

  > h1 {
    font-size: 24px;
    margin: 8px 0;
  }

  & span:nth-of-type(2) {
    color: #cccccc;
  }

  & h1,
  span {
    color: ${Darkgray};
    font-weight: bold;
  }
`;

export const Stock = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  min-width: 36px;
  width: 100%;
`;
