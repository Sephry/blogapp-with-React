import { Link } from "react-router-dom";
import SearcBar from "./SearchBar";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between py-4 border-b-2 ">

      <Link to="/" className="px-2 lg:px-0 font-bold capitalize text-2xl"> Sephry Blog </Link>

      <button className="block md:hidden px-2 text-3xl">
        <i className="bx bx-menu"></i>
      </button>

      <ul className="hidden md:inline-flex items-center">

        <li className="px-2 md:px-4">
          <Link to="/" className="text-green-800 font-semibold hover:text-green-600">Home</Link>
        </li>

        <li className="px-2 md:px-4">
          <Link to="/about" className="text-gray-500 font-semibold hover:text-green-600">About</Link>
        </li>

        <li className="px-2 md:px-4">
          <Link to="/contact" className="text-gray-500 font-semibold hover:text-green-600">
            Contact
          </Link>
        </li>

        <li className="px-2 md:px-4">
          <Link to="/login" className="text-gray-500 font-semibold hover:text-green-600">Login</Link>
        </li>

        <li className="px-2 md:px-4 hidden md:block">
          <Link to="/register" className="text-gray-500 font-semibold hover:text-green-600">
            Register
          </Link>
        </li>

        <li className="px-2 md:px-4 hidden md:block">
          <SearcBar />
        </li>

      </ul>
    </header>
  );
}
