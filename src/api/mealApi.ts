import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mealApi = createApi({
  reducerPath: "mealApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.themealdb.com/api/json/v1/1/",
  }),
  endpoints: (builder) => ({
    searchMeals: builder.query({
      query: (name: string) => `search.php?s=${name}`,
    }),
    getRandomMeal: builder.query({
      query: () => "random.php",
    }),
    getMealById: builder.query({
      query: (id: string) => `lookup.php?i=${id}`,
    }),

    getCategories: builder.query({
      query: () => "list.php?c=list",
    }),
    getAreas: builder.query({
      query: () => "list.php?a=list",
    }),
    filterByCategory: builder.query({
      query: (category: string) => `filter.php?c=${category}`,
    }),
    filterByArea: builder.query({
      query: (area: string) => `filter.php?a=${area}`,
    }),
  }),
});

export const {
  useSearchMealsQuery,
  useGetRandomMealQuery,
  useGetMealByIdQuery,
  useGetCategoriesQuery,
  useGetAreasQuery,
  useFilterByCategoryQuery,
  useFilterByAreaQuery,
} = mealApi;
