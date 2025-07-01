import { useParams } from "react-router-dom";
import { useGetMealByIdQuery } from "../api/mealApi";

const MealDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useGetMealByIdQuery(id || "");

  const meal = data?.meals?.[0];

  return (
    <div className="min-h-screen p-6 bg-white">
      {isLoading && <p className="text-center text-gray-500">Loading...</p>}
      {error && (
        <p className="text-center text-red-500">Failed to load meal.</p>
      )}

      {meal && (
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-4 text-center text-blue-700">
            {meal.strMeal}
          </h1>
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-full rounded mb-4"
          />

          <p>
            <strong>Category:</strong> {meal.strCategory}
          </p>
          <p>
            <strong>Area:</strong> {meal.strArea}
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            {meal.strInstructions}
          </p>

          <a
            href={meal.strYoutube}
            target="_blank"
            className="inline-block mt-6 text-blue-600 underline hover:text-blue-800"
          >
            ▶️ Watch on YouTube
          </a>
        </div>
      )}
    </div>
  );
};

export default MealDetail;
