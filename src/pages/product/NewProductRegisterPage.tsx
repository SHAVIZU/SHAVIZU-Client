import React, { FC } from "react";
import NewProductRegister from "../../components/admin/product/newProductRegister/NewProductRegister";
import Header from "../../components/admin/header/Header";
const NewProductRegisterPage: FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <NewProductRegister />
    </>
  );
};

export default NewProductRegisterPage;
