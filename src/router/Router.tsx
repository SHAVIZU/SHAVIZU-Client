import { FC } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  LoginPage,
  ChangePwPage,
  SignupPage,
  NewProductRegisterPage,
  ChangeInfoPage,
  ShopIntroPage,
  ShopProductsPage,
  ProductRegisterPage,
  AdminMainPage,
  ShopMapPage,
  ProductSearchPage,
  LandingPage,
} from "../pages";
const Router: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/change-pw" element={<ChangePwPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/new-pro" element={<NewProductRegisterPage />} />
        <Route path="/shop-intro" element={<ShopIntroPage />} />
        <Route path="/change-info" element={<ChangeInfoPage />} />
        <Route path="/shop-products" element={<ShopProductsPage />} />
        <Route path="/product-re" element={<ProductRegisterPage />} />
        <Route path="/main" element={<AdminMainPage />} />
        <Route path="/search-shop" element={<ShopMapPage />} />
        <Route path="/search-product" element={<ProductSearchPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
