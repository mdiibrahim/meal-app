import React from "react";
import { useGetRandomMealQuery } from "../api/mealApi";
import MealCard from "../components/MealCard";

const Random = () => {
  const { data, isLoading, error, refetch } = useGetRandomMealQuery();

  return (
    <div className="min-h-screen p-6 bg-yellow-50">
      <h1 className="text-3xl font-bold text-center text-yellow-600 mb-6">
        🎲 Random Meal
      </h1>

      <div className="flex justify-center mb-6">
        <button
          onClick={() => refetch()}
          className="px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
        >
          Surprise Me Again
        </button>
      </div>

      {isLoading && (
        <p className="text-center text-gray-500">Loading random meal...</p>
      )}
      {error && (
        <p className="text-center text-red-500">Something went wrong.</p>
      )}

      {data?.meals?.[0] && (
        <div className="flex justify-center">
          <MealCard meal={data.meals[0]} />
        </div>
      )}
    </div>
  );
};

export default Random;
