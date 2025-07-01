/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useSearchMealsQuery } from "./api/mealApi";
import SearchBar from "./components/SearchBar";
import MealCard from "./components/MealCard";
import MealCarousel from "./components/MealCarousel";
import AdvancedFilter from "./components/AdvancedFilter";

const App = () => {
  const [query, setQuery] = useState("chicken");
  const { data, error, isLoading } = useSearchMealsQuery(query);

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        🍽️ Meal Finder
      </h1>

      <SearchBar query={query} setQuery={setQuery} />
      <AdvancedFilter />

      <MealCarousel />
      {isLoading && <p className="text-center text-gray-500">Loading...</p>}
      {error && (
        <p className="text-center text-red-500">Error loading meals.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {data?.meals?.map((meal: any) => (
          <MealCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default App;
