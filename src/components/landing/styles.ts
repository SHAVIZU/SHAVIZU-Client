import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow-y: hidden;

  > img:first-of-type {
    height: 100%;
  }
  > img:last-of-type {
    width: 340px;
    height: 340px;
    position: absolute;
    bottom: 40px;
    right: 478px;
  }
`;

export const LeftContainer = styled.div`
  flex: 1;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 64px;
  > img {
    margin: 100px 64px 100px 100px;
  }
  > span {
    font-weight: light;
    cursor: pointer;
  }
`;

export const Texts = styled.div`
  width: 640px;
  margin: auto;
  > h1 {
    font-size: 94px;
  }
  > h3 {
    font-size: 36px;
    margin-bottom: 40px;
  }
`;
