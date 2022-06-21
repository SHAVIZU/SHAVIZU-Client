import React, { useEffect, useState } from "react";
import * as AdminStyle from "./styles";
import * as ShopStyle from "../../user/shopProducts/styles";
import Products from "../../products/Products";
import { deleteUserRequest } from "../../../lib/api/deleteUser";
import { getMyShopsItem } from "../../../lib/api/getMyShopsItem";
const AdminMain = () => {
  const token = localStorage.getItem("access_token");
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
  const [product, setProduct] = useState<any[]>([]);
  useEffect(() => {
    if (token) {
      getMyShopsItem(token).then((res) => setProduct(res.data.sells));
    }
  }, [token]);

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
