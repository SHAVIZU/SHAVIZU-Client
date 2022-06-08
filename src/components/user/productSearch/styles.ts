import styled from "@emotion/styled";

export const Container = styled.div`
  width: calc(100% - 480px);
  margin: auto;
  flex-direction: column;
  padding: 108px 0 0 0;
  display: grid;
  gap: 48px 36px;
  grid-template-columns: repeat(auto-fill, 244px);
  justify-content: space-evenly;
`;
