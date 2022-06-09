import styled from "@emotion/styled";
import { Lightgray } from "../../../style/color";

export const Container = styled.div`
  margin: 108px auto 0;
  display: flex;
  justify-content: space-between;
  width: 80%;
  min-width: 1052px;
`;

export const ProductsContainer = styled.div`
  padding-bottom: 108px;
  width: 100%;
  height: calc(100vh - 208px);
  display: grid;
  flex-direction: column;
  gap: 48px 36px;
  grid-template-columns: repeat(auto-fill, 244px);
  justify-content: space-evenly;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ShopsContainer = styled.div`
  padding-bottom: 108px;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 208px);
  overflow-y: scroll;
  gap: 36px;

  border-left: solid 1px ${Lightgray};
  padding-left: 54px;
  ::-webkit-scrollbar {
    display: none;
  }
`;
