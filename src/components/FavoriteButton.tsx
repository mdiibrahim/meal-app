import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { toggleFavorite } from "../features/favorites/favoritesSlice";

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strArea: string;
}

const FavoriteButton: React.FC<{ meal: Meal }> = ({ meal }) => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favorites.meals);

  // Check if this meal is already in favorites
  const isFavorite = favorites.some((m) => m.idMeal === meal.idMeal);

  const handleToggle = () => {
    dispatch(toggleFavorite(meal));
  };

  return (
    <button
      onClick={handleToggle}
      className={`px-4 py-2 text-sm font-medium rounded-md shadow ${
        isFavorite
          ? "bg-red-500 text-white hover:bg-red-600"
          : "bg-gray-200 text-gray-800 hover:bg-gray-300"
      }`}
    >
      {isFavorite ? "★ Bookmarked" : "☆ Bookmark"}
    </button>
  );
};

export default FavoriteButton;
