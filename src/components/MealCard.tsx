import React from "react";
import { useNavigate } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strArea: string;
}

const MealCard: React.FC<{ meal: Meal }> = ({ meal }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-200">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-48 object-cover rounded"
      />

      <h3 className="mt-3 text-lg font-semibold text-gray-800">
        {meal.strMeal}
      </h3>

      {/* ✅ Category and Area */}
      <p className="text-sm text-gray-600 mt-1">
        <span className="font-medium">Category:</span> {meal.strCategory}
      </p>
      <p className="text-sm text-gray-600 mb-2">
        <span className="font-medium">Area:</span> {meal.strArea}
      </p>

      {/* ✅ Action Buttons: Favorite + Details */}
      <div className="flex gap-2 mt-3">
        <FavoriteButton meal={meal} />

        <button
          onClick={() => navigate(`/meal/${meal.idMeal}`)}
          className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default MealCard;
