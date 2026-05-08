import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-indigo-700 shadow-md text-white">
      {/* Logo */}
      <h2 className="text-2xl font-bold tracking-wide">Yoga Bliss</h2>

      {/* Menu */}
      <div className="flex gap-8 text-sm font-medium">
        <Link
          to="/"
          className="hover:bg-white hover:text-indigo-700 px-3 py-1 rounded-full transition"
        >
          Home
        </Link>

        <Link
          to="/about"
          className="hover:bg-white hover:text-indigo-700 px-3 py-1 rounded-full transition"
        >
          About
        </Link>

        <Link
          to="/classes"
          className="hover:bg-white hover:text-indigo-700 px-3 py-1 rounded-full transition"
        >
          Classes
        </Link>

        <Link
          to="/schedule"
          className="hover:bg-white hover:text-indigo-700 px-3 py-1 rounded-full transition"
        >
          Schedule
        </Link>

        <Link
          to="/schedule"
          className="hover:bg-white hover:text-indigo-700 px-3 py-1 rounded-full transition"
        >
          Schedule
        </Link>

        <Link
          to="/video"
          className="hover:bg-white hover:text-indigo-700 px-3 py-1 rounded-full transition"
        >
          Video
        </Link>

        <Link
          to="/instructor"
          className="hover:bg-white hover:text-indigo-700 px-3 py-1 rounded-full transition"
        >
          Instructors
        </Link>

        <Link
          to="/contact"
          className="hover:bg-white hover:text-indigo-700 px-3 py-1 rounded-full transition"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
