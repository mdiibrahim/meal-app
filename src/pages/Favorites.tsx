import { useAppSelector } from "../app/hooks";
import MealCard from "../components/MealCard";

const Favorites = () => {
  const favorites = useAppSelector((state) => state.favorites.meals);

  return (
    <div className="min-h-screen p-6 bg-blue-50">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        ❤️ Bookmarked Meals
      </h1>

      {favorites.length === 0 ? (
        <p className="text-center text-gray-500">No meals bookmarked yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {favorites.map((meal) => (
            <MealCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
