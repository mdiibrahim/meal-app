import React, { useState } from "react";
import { useSearchMealsQuery } from "./api/mealApi";
import SearchBar from "./components/SearchBar";
import MealCard from "./components/MealCard";
import MealCarousel from "./components/MealCarousel";
import AdvancedFilter from "./components/AdvancedFilter";

const App = () => {
  const [query, setQuery] = useState(""); // Empty by default
  const { data, error, isLoading } = useSearchMealsQuery(query, {
    skip: !query,
  });

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        🍽️ Meal Finder
      </h1>

      {/* 🔍 Search Box */}
      <SearchBar query={query} setQuery={setQuery} />

      <MealCarousel />
      {/* 🧪 Advanced Filter */}
      {/* Note: AdvancedFilter internally handles category/area selection */}
      <AdvancedFilter />

      {/* 🍱 Meal Search Results */}
      {isLoading && (
        <p className="text-center text-gray-500 mt-6">Loading...</p>
      )}
      {error && (
        <p className="text-center text-red-500 mt-6">Failed to load meals.</p>
      )}

      {data?.meals && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {data.meals.map((meal: any) => (
            <MealCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
