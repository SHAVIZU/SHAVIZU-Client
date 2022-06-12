import React, { FC } from "react";
import ChangeInfo from "../../../components/admin/auth/changeInfo/ChangeInfo";
import Header from "../../../components/admin/header/Header";
const ChangeInfoPage: FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <ChangeInfo />
    </>
  );
};

export default ChangeInfoPage;
