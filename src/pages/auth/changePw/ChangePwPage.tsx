import React, { FC } from "react";
import ChangePw from "../../../components/admin/auth/changePw/ChangePw";
import Header from "../../../components/admin/header/Header";
const ChangePwPage: FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <ChangePw />
    </>
  );
};

export default ChangePwPage;
