import { Routes, Route } from "react-router-dom";
import App from "../App";
import Random from "../pages/Random";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/random" element={<Random />} />
    </Routes>
  );
};

export default AppRoutes;
