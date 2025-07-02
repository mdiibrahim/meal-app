/* eslint-disable @typescript-eslint/no-explicit-any */

import { useSearchMealsQuery } from "../api/mealApi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import MealCard from "./MealCard";

const MealCarousel = () => {
  const { data, isLoading, error } = useSearchMealsQuery("chicken");

  if (isLoading)
    return (
      <p className="text-center text-gray-500">Loading featured meals...</p>
    );
  if (error)
    return (
      <p className="text-center text-red-500">Error loading featured meals.</p>
    );

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-center mb-4 text-green-700">
        🔥 Featured Meals
      </h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {data?.meals?.slice(0, 10).map((meal: any) => (
          <SwiperSlide key={meal.idMeal}>
            <MealCard meal={meal} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MealCarousel;
