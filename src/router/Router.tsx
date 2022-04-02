import { FC } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LoginPage, ChangePwPage } from "../pages";
const Router: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/change-pw" element={<ChangePwPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
