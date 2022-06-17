import React, { FC, useEffect, useState } from "react";
import * as S from "./styles";
import Header from "../../header/Header";
import Products from "../../products/Products";
import ShopInfo from "../../shopInfo/ShopInfo";
import { useLocation } from "react-router";
import {
  getSearchProduct,
  getSearchProductDetail,
} from "../../../lib/api/searchProduct";
import { itemType, shopType } from "../../../lib/types/productsSearch";

const ProductSearch: FC = (): JSX.Element => {
  const [queryTopic, setQueryTopic] = useState<string>("");
  const [queryInput, setQueryInput] = useState<string>("");
  const [queryCategory, setQueryCategory] = useState<string>();
  const [itemsData, setItemsData] = useState<itemType[]>([]);
  const [isDetail, setIsDetail] = useState<boolean>(false);
  const [productId, setProductId] = useState<number>(-1);
  const [productDetail, setProductDetail] = useState<shopType[]>([]);

  const location = useLocation();

  const shops = [
    {
      id: 119,
      name: "구미 편집샵",
      image_url: "url",
      opening_hours: "9:00 - 21:00",
      address: "구미",
      inventories: [
        {
          size: "free",
          amount: 5,
        },
        {
          size: "free",
          amount: 5,
        },
        {
          size: "free",
          amount: 5,
        },
        {
          size: "free",
          amount: 5,
        },
        {
          size: "free",
          amount: 5,
        },
        {
          size: "free",
          amount: 5,
        },
        {
          size: "free",
          amount: 5,
        },
        {
          size: "free",
          amount: 5,
        },
        {
          size: "free",
          amount: 5,
        },
        {
          size: "free",
          amount: 5,
        },
        {
          size: "free",
          amount: 5,
        },
        {
          size: "free",
          amount: 5,
        },
        {
          size: "free",
          amount: 5,
        },
        {
          size: "free",
          amount: 5,
        },
        {
          size: "free",
          amount: 5,
        },
      ],
    },
  ];

  const requesProductDetail = () => {
    getSearchProductDetail(productId)
      .then((res) => {
        setProductDetail(res.data);
      })
      .catch((err) => console.log(err));
  };

  const onProductClick = (id: number) => {
    if (productId === id) {
      setIsDetail(false);
      setProductId(-1);
    } else {
      setIsDetail(true);
      setProductId(id);
    }
  };

  useEffect(() => {
    if (productId === -1) {
      return;
    } else {
      requesProductDetail();
    }
  }, [productId]);

  useEffect(() => {
    let getLocation = location.search.split("&");

    setQueryTopic(getLocation[0].split("=")[1]);
    setQueryInput(getLocation[1].split("=")[1]);
    setQueryCategory(getLocation[2].split("=")[1]);
  }, []);

  useEffect(() => {
    if (queryTopic === "") return;
    getSearchProduct(queryTopic, queryInput, queryCategory)
      .then((res) => {
        setItemsData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [queryTopic]);

  return (
    <div>
      <Header />
      <S.Container>
        <S.ProductsContainer>
          {itemsData.map((item, index) => (
            <Products
              key={index}
              product={item}
              isSearch={true}
              onClick={() => {
                onProductClick(item.id);
              }}
            />
          ))}
        </S.ProductsContainer>
        {isDetail ? (
          <S.ShopsContainer>
            {productDetail.map((shop, index) => (
              <ShopInfo key={index} shopInfo={shop} isMap={false} />
            ))}
          </S.ShopsContainer>
        ) : (
          <></>
        )}
      </S.Container>
    </div>
  );
};

export default ProductSearch;
