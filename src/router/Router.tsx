import { FC } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { SignupPage } from "../pages";
const Router: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
