// NotFound.jsx
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";

const NotFound = () => {
  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        {/* Main Title */}
        <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900">
          404
        </h1>

        {/* Subtitle */}
        <p className="mt-3 text-xl md:text-2xl font-semibold text-gray-700">
          Page Not Found
        </p>

        {/* Explanation */}
        <p className="mt-4 text-gray-500 leading-relaxed">
          The page you're trying to access doesn't exist, has been moved, or the
          URL was entered incorrectly.
        </p>

        {/* Action Button */}
        <Link
          to="/"
          className="
            inline-flex items-center gap-2 mt-8 px-6 py-3
            bg-blue-600 hover:bg-blue-700
            text-white font-medium rounded-lg shadow-md
            transition-all duration-300
          "
        >
          <IoHomeOutline className="text-xl" />
          Go Back Home
        </Link>

        {/* Optional Contact Text */}
        <p className="mt-6 text-sm text-gray-400">
          If you believe this is a mistake, please contact support.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
