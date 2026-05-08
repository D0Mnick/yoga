import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-indigo-700 text-white shadow-md">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h2 className="text-2xl font-bold">Yoga Bliss</h2>

        {/* Hamburger button (mobile) */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <Link
            className="hover:bg-white hover:text-indigo-700 px-3 py-1 rounded-full"
            to="/"
          >
            Home
          </Link>
          <Link
            className="hover:bg-white hover:text-indigo-700 px-3 py-1 rounded-full"
            to="/about"
          >
            About
          </Link>
          <Link
            className="hover:bg-white hover:text-indigo-700 px-3 py-1 rounded-full"
            to="/classes"
          >
            Classes
          </Link>
          <Link
            className="hover:bg-white hover:text-indigo-700 px-3 py-1 rounded-full"
            to="/schedule"
          >
            Schedule
          </Link>
          <Link
            className="hover:bg-white hover:text-indigo-700 px-3 py-1 rounded-full"
            to="/video"
          >
            Video
          </Link>
          <Link
            className="hover:bg-white hover:text-indigo-700 px-3 py-1 rounded-full"
            to="/instructor"
          >
            Instructors
          </Link>
          <Link
            className="hover:bg-white hover:text-indigo-700 px-3 py-1 rounded-full"
            to="/contact"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-3 px-6 pb-4 text-sm font-medium">
          <Link onClick={() => setOpen(false)} to="/">
            Home
          </Link>
          <Link onClick={() => setOpen(false)} to="/about">
            About
          </Link>
          <Link onClick={() => setOpen(false)} to="/classes">
            Classes
          </Link>
          <Link onClick={() => setOpen(false)} to="/schedule">
            Schedule
          </Link>
          <Link onClick={() => setOpen(false)} to="/video">
            Video
          </Link>
          <Link onClick={() => setOpen(false)} to="/instructor">
            Instructors
          </Link>
          <Link onClick={() => setOpen(false)} to="/contact">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
