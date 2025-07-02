/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  useGetCategoriesQuery,
  useGetAreasQuery,
  useFilterByCategoryQuery,
  useFilterByAreaQuery,
} from "../api/mealApi";
import MealCard from "./MealCard";

const AdvancedFilter = () => {
  const [category, setCategory] = useState("");
  const [area, setArea] = useState("");

  const { data: categoryData } = useGetCategoriesQuery("");
  const { data: areaData } = useGetAreasQuery("");

  const { data: categoryMeals, isFetching: loadingCategory } =
    useFilterByCategoryQuery(category, { skip: !category });

  const { data: areaMeals, isFetching: loadingArea } = useFilterByAreaQuery(
    area,
    { skip: !area }
  );

  const handleReset = () => {
    setCategory("");
    setArea("");
  };

  const mealsToShow = categoryMeals?.meals || areaMeals?.meals || [];

  return (
    <div className="bg-white p-4 rounded shadow w-full">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">
        🔍 Advanced Filter
      </h2>

      <div className="flex flex-col md:flex-row gap-4">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border px-4 py-2 rounded w-full md:w-1/2"
        >
          <option value="">Filter by Category</option>
          {categoryData?.meals?.map((c: any) => (
            <option key={c.strCategory} value={c.strCategory}>
              {c.strCategory}
            </option>
          ))}
        </select>

        <select
          value={area}
          onChange={(e) => setArea(e.target.value)}
          className="border px-4 py-2 rounded w-full md:w-1/2"
        >
          <option value="">Filter by Area</option>
          {areaData?.meals?.map((a: any) => (
            <option key={a.strArea} value={a.strArea}>
              {a.strArea}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={handleReset}
        className="bg-gray-300 px-4 py-1 rounded text-sm text-gray-700 hover:bg-gray-400 transition"
      >
        Reset Filters
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {loadingCategory || loadingArea ? (
          <p>Loading...</p>
        ) : mealsToShow?.length > 0 ? (
          mealsToShow.map((meal: any) => (
            <MealCard key={meal.idMeal} meal={meal} />
          ))
        ) : (
          <p>No meals found.</p>
        )}
      </div>
    </div>
  );
};

export default AdvancedFilter;
