import React from "react";
import { useNavigate } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

const MealCard: React.FC<{ meal: Meal }> = ({ meal }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/meal/${meal.idMeal}`)}
      className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-200 cursor-pointer"
    >
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="mt-3 text-lg font-semibold text-gray-800">
        {meal.strMeal}
      </h3>
      <FavoriteButton meal={meal} />
    </div>
  );
};

export default MealCard;
