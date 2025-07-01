import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname === path
      ? "text-blue-600 font-semibold"
      : "text-gray-600";

  return (
    <nav className="bg-white shadow-md py-4 mb-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">
          <Link to="/">🍽️ MealApp</Link>
        </h1>
        <ul className="flex gap-6 text-lg">
          <li>
            <Link to="/" className={isActive("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/random" className={isActive("/random")}>
              Random
            </Link>
          </li>
          <li>
            <Link to="/favorites" className={isActive("/favorites")}>
              Favorites
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
