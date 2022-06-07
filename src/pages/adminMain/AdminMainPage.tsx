import React, { FC } from "react";
import AdminMain from "../../components/admin/adminMain/AdminMain";
import Header from "../../components/header/Header";

const AdminMainPage: FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <AdminMain />
    </>
  );
};

export default AdminMainPage;
