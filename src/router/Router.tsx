import { FC } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  LoginPage,
  ChangePwPage,
  SignupPage,
  ProductRegisterPage,
  ShopIntro,
  ChangeInfoPage,
} from "../pages";
const Router: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/change-pw" element={<ChangePwPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/product-re" element={<ProductRegisterPage />} />
        <Route path="/shop-intro" element={<ShopIntro />} />
        <Route path="/change-info" element={<ChangeInfoPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
