import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
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
        state.meals.push(action.payload);
      }
      localStorage.setItem("favorites", JSON.stringify(state.meals));
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
