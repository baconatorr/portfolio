import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black/5 backdrop-blur-sm w-full fixed top-0 z-50">
      <ul className="flex justify-center space-x-12 text-white text-lg font-semibold py-4">
        <li>
          <a
            href="/"
            className="hover:text-gray-300 transition ease-in-out duration-200 hover:underline"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="about"
            className="hover:text-gray-300 transition ease-in-out duration-200 hover:underline"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="projects"
            className="hover:text-gray-300 transition ease-in-out duration-200 hover:underline"
          >
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
