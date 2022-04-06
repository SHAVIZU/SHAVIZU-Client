import React, { FC } from "react";
import Login from "../../components/auth/login/Login";
import Header from "../../components/header/Header";
const LoginPage: FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <Login />
    </>
  );
};

export default LoginPage;
