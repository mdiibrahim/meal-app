import React from "react";

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

const MealCard: React.FC<{ meal: Meal }> = ({ meal }) => {
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
    </div>
  );
};

export default MealCard;
