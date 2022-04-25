import styled from "@emotion/styled";
import {
  BackgroundColor,
  Darkgray,
  Lightgray,
  MainColor,
} from "../../style/color";

export const Header = styled.div`
  width: 100%;
  height: 100px;
  padding: 0 70px;
  border-bottom: 1px solid #eeeeee;
  display: flex;
  align-items: center;
  & input[type="radio"] {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    outline: none;
    position: relative;
    cursor: pointer;
    transition: background 0.3s, border-color 0.3s, box-shadow 0.2s;
    border-radius: 50%;
    &:after {
      content: "";
      display: block;
      left: 0;
      top: 0;
      position: absolute;
      transition: transform 0.3s ease, opacity 0.2s;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: #ffffff;
      opacity: 0;
      transform: scale(var(--size, 1));
    }
    &:checked {
      --size: 0.7;
    }
    &:disabled {
      cursor: not-allowed;
      opacity: 0.9;
      & + label {
        cursor: not-allowed;
      }
    }
    &:not(.switch) {
      width: 20px;
      &:after {
        opacity: var(--o, 0);
      }
      &:checked {
        --o: 1;
      }
    }
  }
`;

export const Category = styled.div`
  display: flex;
  gap: 48px;
  padding: 0 70px;
  height: 100%;
  border-right: 1px solid #eeeeee;
`;

export const SelectFilter = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  > label {
    display: flex;
    align-items: center;
    cursor: pointer;
    > span {
      margin: 0 12px;
      font-size: 15px;
    }
  }
  > input[type="radio"] {
    --border: ${Lightgray};
    border: 1px solid var(--border);
    background: var(--background);
    &:checked {
      --background: ${Darkgray};
      --border: ${Darkgray};
    }
    &:disabled {
      &:checked {
        --border: var(--border);
      }
    }
  }
`;

export const ItemCategory = styled.div`
  > div:first-of-type {
    height: 80px;
    padding: 0 48px;
    border-right: 1px solid #eeeeee;
    display: flex;
    align-items: center;
    cursor: pointer;
    > span {
      color: ${Darkgray};
    }
    > img {
      margin-left: 12px;
    }
  }
`;

export const ItemCategoryBox = styled.div`
  position: absolute;
  padding: 20px;
  left: 660px;
  top: 68px;
  background: #fdffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  display: flex;
  gap: 14px;
  > div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  > hr {
    border: 1px solid #eeeeee;
  }
`;

export const ItemCategorySelect = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  > label {
    font-size: 14px;
    color: ${Darkgray};
    cursor: pointer;
  }
  > input[type="radio"] {
    --border: ${Lightgray};
    border: 1px solid var(--border);
    background: var(--background);
    cursor: pointer;
    &:checked {
      --background: ${MainColor};
      --border: ${MainColor};
    }
    &:disabled {
      &:checked {
        --border: var(--border);
      }
    }
  }
  > input[type="checkbox"] {
    accent-color: ${MainColor};
  }
  input[type="checkbox"] {
    --border: #eeeeee;
    border: 0.5px solid var(--border);
    appearance: none;
    background: #fff;
    border-radius: 4px;
    cursor: pointer;
    height: 16px;
    outline: 0;
    width: 16px;
    transition: background 0.3s, border-color 0.3s, box-shadow 0.2s;
  }
  input[type="checkbox"]::after {
    border: solid #fff;
    border-width: 0 2px 2px 0;
    content: "";
    display: none;
    height: 38%;
    left: 36%;
    position: relative;
    top: 20%;
    transform: rotate(45deg);
    width: 15%;
  }
  input[type="checkbox"]:checked {
    background: ${MainColor};
    --border: ${MainColor};
  }
  input[type="checkbox"]:checked::after {
    display: block;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  margin-left: 60px;
  flex: 1;
  > input {
    margin: 0 24px;
    font-size: 24px;
    font-weight: lighter;
    background-color: ${BackgroundColor};
    border: none;
    flex: 1;
    :: placeholder {
      color: ${Lightgray};
    }
  }

  & img {
    cursor: pointer;
  }
  input::-webkit-search-cancel-button,
  input::-webkit-search-results-decoration {
    display: none;
  }
`;

export const ProductRegister = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  border-left: 1px solid #eeeeee;
  margin-left: 32px;
  > img {
    margin: 0 12px 0 32px;
  }
`;
