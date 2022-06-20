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
  const topic = {
    "스타일 코드": "style_code",
    "제품 이름": "name",
    브랜드: "brand",
  };
  const filter = {
    상의: "TOP",
    하의: "BOTTOM",
    아우터: "OUTER",
    "원피스/세트": "DRESS_SET",
    풋웨어: "FOOT_WEAR",
    헤드웨어: "HEAD_WEAR",
    언더웨어: "UNDER_WEAR",
    acc: "ACCESSORY",
    etc: "ETC",
  };

  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [searchTopicDiscript, setSearchTopicDiscript] = useState("도로명 주소");
  const [searchValue, setSearchValue] = useState("");
  const [searchTopic, setSearchTopic] = useState("style_code");
  const [selectCategory, setSelectCategory] = useState<string[]>([]);

  const [isAdmin, setIsAdmin] = useState(false);

  const settingSelect = (input: any, ele: any) => {
    if (input.checked) {
      setSelectCategory([
        ...selectCategory,
        filter[ele as keyof typeof filter],
      ]);
    } else {
      setSelectCategory(
        selectCategory.filter(
          (category) => category !== filter[ele as keyof typeof filter]
        )
      );
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token !== null) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, []);

  const enterKey = () => {
    if (searchValue === "") {
      alert("검색어를 입력해주세요!");
    } else {
      window.location.href =
        "/search-product?topic=" +
        searchTopic +
        "&search=" +
        searchValue +
        "&categoty=" +
        selectCategory;
    }
  };

  return (
    <S.Header>
      <img src={Logo} alt="" />
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
              setSearchTopicDiscript("도로명 주소");
              window.location.href = "/search-shop";
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
              setSearchTopicDiscript("스타일 코드");
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
            {Object.keys(topic).map((ele, index) => {
              return (
                <S.ItemCategorySelect key={index}>
                  <input
                    type="radio"
                    id={ele}
                    checked={ele === searchTopicDiscript}
                    onClick={() => {
                      setSearchTopicDiscript(ele);
                      setSearchTopic(topic[ele as keyof typeof topic]);
                    }}
                    readOnly
                  />
                  <label htmlFor={ele}>{ele}</label>
                </S.ItemCategorySelect>
              );
            })}
          </div>
          <hr />
          <div>
            {Object.keys(filter).map((ele: string, index) => {
              return (
                <S.ItemCategorySelect key={index}>
                  <input
                    type="checkbox"
                    name={ele}
                    // id={filter.[ele]}
                    onChange={(e: any) => {
                      settingSelect(e.target, ele);
                    }}
                    readOnly
                  />
                  <label htmlFor="">{ele}</label>
                </S.ItemCategorySelect>
              );
            })}
          </div>
        </S.ItemCategoryBox>
      </S.ItemCategory>
      <S.SearchBar style={isOpenCategory ? {} : { display: "none" }}>
        <label htmlFor="search">
          <img src={SearchIcon} alt="" />
        </label>
        <input
          type="search"
          name=""
          id="search"
          placeholder={searchTopicDiscript}
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          onKeyUpCapture={(e) => {
            if (e.keyCode == 13) {
              enterKey();
            }
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
