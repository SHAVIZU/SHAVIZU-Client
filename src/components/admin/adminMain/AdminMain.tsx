import React from "react";
import * as AdminStyle from "./styles";
import * as ShopStyle from "../../user/shopProducts/styles";
import Products from "../../products/Products";
import { deleteUserRequest } from "../../../lib/api/deleteUser";
const AdminMain = () => {
  // const product = ["a", "b"];
  const requestDeleteUserApi = () => {
    const token = localStorage.getItem("access_token");
    if (token) {
      deleteUserRequest(token)
        .then(() => {
          alert("탈퇴가 완료되었습니다.");
          localStorage.removeItem("access_token");
          window.location.href = "/";
        })
        .catch(() => {
          alert("탈퇴에 실패하셨습니다.");
        });
    }
  };
  const product = [
    {
      discount_price: 120000,
      discount_rate: 0,
      item_name: "이건 옷이야34",
      image_url: "https:/",
      brand_name: "DSM",
      inventories: [
        {
          size: "free",
          amount: 5,
        },
      ],
    },
    {
      discount_price: 120000,
      discount_rate: 0,
      item_name: "이건 옷이야34",
      image_url: "https:/",
      brand_name: "DSM",
      inventories: [
        {
          size: "free",
          amount: 5,
        },
      ],
    },
  ];

  return (
    <>
      <ShopStyle.Container>
        <AdminStyle.TitleContainer>
          <ShopStyle.ShopName>WORKSOUT</ShopStyle.ShopName>
          <AdminStyle.UserDeleteBtn onClick={() => requestDeleteUserApi()}>
            회원 탈퇴
          </AdminStyle.UserDeleteBtn>
        </AdminStyle.TitleContainer>
        <AdminStyle.Line />
        <ShopStyle.ProductList>
          {product.map((item, index) => {
            return <Products key={index} product={item} isSearch={false} />;
          })}
        </ShopStyle.ProductList>
      </ShopStyle.Container>
    </>
  );
};

export default AdminMain;
