import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white px-4 py-3 flex justify-between">
      <div className="text-2xl font-semibold">MyApp</div>
      <ul className="flex space-x-6 text-lg">
        <li>
          <a href="/crud " className="hover:text-gray-300">
            CRUD
          </a>
        </li>
        <li>
          <a href="#todo" className="hover:text-gray-300">
            Todo
          </a>
        </li>
        <li>
          <a href="#dark-theme" className="hover:text-gray-300">
            Dark Theme
          </a>
        </li>
        <li>
          <a href="#counter-app" className="hover:text-gray-300">
            Counter App
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
