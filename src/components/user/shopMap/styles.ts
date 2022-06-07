import { BackgroundColor } from "./../../../style/color";
import styled from "@emotion/styled";
import { Darkgray, Lightgray, MainColor } from "../../../style/color";

export const Container = styled.div`
  width: 80%;
  height: calc(100vh - 100px);
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 4vw;
`;

export const Map = styled.div`
  width: 42vw;
  height: 42vw;
  border-radius: 28px;

  .notClickedMarker {
    width: 24px;
    height: 24px;
    border-radius: 50%;

    background: #ff6f69;
    box-shadow: 0px 0px 4px 10px rgba(255, 111, 105, 0.25);
  }
  .clickedMarker {
    width: 24px;
    height: 24px;
    border-radius: 50%;

    background: #55b6ce;
    box-shadow: 0px 0px 4px 10px rgba(255, 111, 105, 0.25);
  }
  > img {
    width: 200px;
    backgroundcolor: #000;
    height: 100px;
    z-index: 5;
  }
`;

export const MapMore = styled.div`
  position: absolute;
  left: 2%;
  bottom: 2%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  > div {
    display: flex;
    gap: 10px;
  }
`;

export const MapMoreItem = styled.div``;

export const MapMoreIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    background-color: #e1f9ff;
  }
`;

export const MapComment = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: default;
  > img {
    padding: 11px 0;
  }
  > span {
    position: absolute;
    font-size: 12px;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  height: 42vw;
  overflow-y: scroll;
  gap: 36px;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Shop = styled.div`
  width: 528px;

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
