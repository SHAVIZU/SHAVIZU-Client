import { FC } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "../components/Main";

const Router: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
