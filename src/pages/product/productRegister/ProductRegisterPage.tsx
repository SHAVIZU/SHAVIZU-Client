import React, { FC } from "react";
import Header from "../../../components/admin/header/Header";
import ProductRegister from "../../../components/admin/product/productRegister/ProductRegister";

const ProductRegisterPage: FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <ProductRegister />
    </>
  );
};

export default ProductRegisterPage;
