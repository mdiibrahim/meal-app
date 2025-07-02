/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  useSearchMealsQuery,
  useGetCategoriesQuery,
  useGetAreasQuery,
} from "../api/mealApi";
import MealCard from "./MealCard";
import MealCarousel from "./MealCarousel";

const SearchWithFilter = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [area, setArea] = useState("");

  const {
    data: mealsData,
    isLoading,
    error,
  } = useSearchMealsQuery(query, {
    skip: !query,
  });

  const { data: categoryData } = useGetCategoriesQuery("");
  const { data: areaData } = useGetAreasQuery("");

  const allMeals = mealsData?.meals || [];

  // 🔍 Apply client-side filtering
  const filteredMeals = allMeals.filter((meal: any) => {
    const matchCategory = category ? meal.strCategory === category : true;
    const matchArea = area ? meal.strArea === area : true;
    return matchCategory && matchArea;
  });

  const resetFilters = () => {
    setCategory("");
    setArea("");
  };

  return (
    <div className="min-h-screen p-6 bg-white">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        🍽️ Smart Meal Search
      </h1>

      {/* 🔎 Search and Filter Inline */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search meals..."
          className="flex-1 px-4 py-2 border rounded shadow"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 border rounded shadow"
        >
          <option value="">All Categories</option>
          {categoryData?.meals?.map((c: any) => (
            <option key={c.strCategory} value={c.strCategory}>
              {c.strCategory}
            </option>
          ))}
        </select>

        <select
          value={area}
          onChange={(e) => setArea(e.target.value)}
          className="px-4 py-2 border rounded shadow"
        >
          <option value="">All Areas</option>
          {areaData?.meals?.map((a: any) => (
            <option key={a.strArea} value={a.strArea}>
              {a.strArea}
            </option>
          ))}
        </select>

        <button
          onClick={resetFilters}
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
        >
          Reset
        </button>
      </div>

      {/* 🔁 Search Results */}
      {isLoading && <p className="text-center text-gray-500">Loading...</p>}
      {error && (
        <p className="text-center text-red-500">Something went wrong.</p>
      )}

      {filteredMeals.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredMeals.map((meal: any) => (
            <MealCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      ) : (
        query && <p className="text-center text-gray-500">No meals found.</p>
      )}

      {/* ✅ Featured Meals */}
      {query === "" && filteredMeals.length === 0 && <MealCarousel />}
    </div>
  );
};

export default SearchWithFilter;
