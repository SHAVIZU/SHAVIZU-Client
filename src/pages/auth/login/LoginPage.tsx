import React, { FC } from "react";
import Login from "../../../components/admin/auth/login/Login";
import Header from "../../../components/admin/header/Header";
const LoginPage: FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <Login />
    </>
  );
};

export default LoginPage;
