import { Route, Routes, Router } from "solid-app-router";
import HomePage from "./components/pages/home-page";

const PageRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default PageRouter;
