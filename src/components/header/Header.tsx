import React, { FC, useEffect, useState } from "react";
import * as S from "./styles";
import {
  Logo,
  SearchShopIcon,
  SearchItemIcon,
  SearchIcon,
  CloseIcon,
  SelectIcon,
} from "../../assets";
const Header: FC = (): JSX.Element => {
  const topic = ["스타일 코드", "제품 이름", "브랜드"];
  const filter = ["상의", "하의", "아우터", "풋웨어", "아이웨어"];

  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [searchTopic, setSearchTopic] = useState("도로명 주소");
  const [searchValue, setSearchValue] = useState("");

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    console.log(token);
    if (token !== null) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, []);

  return (
    <S.Header>
      <img src={Logo} />
      <S.Category style={isAdmin ? { display: "none" } : { display: "flex" }}>
        <S.SelectFilter>
          <label htmlFor="shop">
            <img src={SearchShopIcon} alt="" />
            <span>매장찾기</span>
          </label>
          <input
            type="radio"
            name="search"
            id="shop"
            value="shop"
            defaultChecked={!isOpenCategory}
            onClick={() => {
              setIsOpenCategory(false);
              setSearchTopic("도로명 주소");
            }}
          />
        </S.SelectFilter>
        <S.SelectFilter>
          <label htmlFor="item">
            <img src={SearchItemIcon} alt="" />
            <span>제품찾기</span>
          </label>
          <input
            type="radio"
            name="search"
            id="item"
            value="item"
            defaultChecked={isOpenCategory}
            onChange={() => {
              setIsOpenCategory(true);
              setSearchTopic("스타일 코드");
            }}
          />
        </S.SelectFilter>
      </S.Category>
      <S.ItemCategory
        style={isOpenCategory ? {} : { display: "none" }}
        onClick={() => {
          setIsOpenFilter(!isOpenFilter);
        }}
      >
        <div>
          <span>카테고리</span>
          <img src={SelectIcon} alt="" />
        </div>
        <S.ItemCategoryBox
          style={isOpenFilter ? {} : { display: "none" }}
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <div>
            {topic.map((ele, index) => {
              return (
                <S.ItemCategorySelect key={index}>
                  <input
                    type="radio"
                    name="topic"
                    id={ele}
                    checked={ele === searchTopic}
                    onClick={() => setSearchTopic(ele)}
                    readOnly
                  />
                  <label htmlFor={ele}>{ele}</label>
                </S.ItemCategorySelect>
              );
            })}
          </div>
          <hr />
          <div>
            {filter.map((ele, index) => {
              return (
                <S.ItemCategorySelect key={index}>
                  <input type="checkbox" name={ele} id={ele} readOnly />
                  <label htmlFor="">{ele}</label>
                </S.ItemCategorySelect>
              );
            })}
          </div>
        </S.ItemCategoryBox>
      </S.ItemCategory>
      <S.SearchBar>
        <label htmlFor="search">
          <img src={SearchIcon} alt="" />
        </label>
        <input
          type="search"
          name=""
          id="search"
          placeholder={searchTopic}
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <img src={CloseIcon} alt="" onClick={() => setSearchValue("")} />
      </S.SearchBar>
      <S.ProductRegister
        style={isAdmin ? { display: "flex" } : { display: "none" }}
      >
        <img src={SearchItemIcon} alt="" />
        <span>새로운 판매 제품 등록</span>
      </S.ProductRegister>
    </S.Header>
  );
};

export default Header;
