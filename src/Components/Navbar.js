import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between py-2">

      <Link to="/" class="px-2 lg:px-0 font-bold capitalize"> Sephry Blog </Link>

      <button class="block md:hidden px-2 text-3xl">
        <i class="bx bx-menu"></i>
      </button>

      <ul class="hidden md:inline-flex items-center">

        <li class="px-2 md:px-4">
          <Link to="/" class="text-green-800 font-semibold hover:text-green-600">Home</Link>
        </li>

        <li class="px-2 md:px-4">
          <Link to="/about" class="text-gray-500 font-semibold hover:text-green-600">About</Link>
        </li>

        <li class="px-2 md:px-4">
          <Link to="/contact" class="text-gray-500 font-semibold hover:text-green-600">
            Contact
          </Link>
        </li>

        <li class="px-2 md:px-4">
          <Link to="/login" class="text-gray-500 font-semibold hover:text-green-600">Login</Link>
        </li>

        <li class="px-2 md:px-4 hidden md:block">
          <Link to="/register" class="text-gray-500 font-semibold hover:text-green-600">
            Register
          </Link>
        </li>

        <li class="px-2 md:px-4 hidden md:block">
          <a class="text-gray-500 font-semibold hover:text-green-600">Search</a>
        </li>

      </ul>
    </header>
  );
}
