import { FC } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LoginPage } from "../pages";
const Router: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
