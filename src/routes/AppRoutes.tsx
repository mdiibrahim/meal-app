import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import App from "../App";
import Random from "../pages/Random";
import Favorites from "../pages/Favorites";
import MealDetail from "../pages/MealDetail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="/random" element={<Random />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/meal/:id" element={<MealDetail />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
