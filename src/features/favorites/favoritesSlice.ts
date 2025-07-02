import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strArea: string;
}

interface FavoritesState {
  meals: Meal[];
}

const initialState: FavoritesState = {
  meals: JSON.parse(localStorage.getItem("favorites") || "[]"),
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<Meal>) {
      const exists = state.meals.find(
        (m) => m.idMeal === action.payload.idMeal
      );
      if (exists) {
        state.meals = state.meals.filter(
          (m) => m.idMeal !== action.payload.idMeal
        );
      } else {
        // Save complete meal object
        state.meals.push({
          idMeal: action.payload.idMeal,
          strMeal: action.payload.strMeal,
          strMealThumb: action.payload.strMealThumb,
          strCategory: action.payload.strCategory || "Unknown",
          strArea: action.payload.strArea || "Unknown",
        });
      }

      // Save to localStorage
      localStorage.setItem("favorites", JSON.stringify(state.meals));
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
