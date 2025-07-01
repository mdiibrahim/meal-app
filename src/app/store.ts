import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "../features/favorites/favoritesSlice";
import { mealApi } from "../api/mealApi";

export const store = configureStore({
  reducer: {
    [mealApi.reducerPath]: mealApi.reducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mealApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
