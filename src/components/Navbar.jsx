import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import lightIcon from "../assets/sun.svg";
import darkIcon from "../assets/moon.svg";
import { Menu, X } from "lucide-react"; // Install lucide-react if not yet

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkMode") === "true");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold dark:text-white">Student Portal</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-800 dark:text-white font-medium">
          <li><Link to="/home" className="hover:text-yellow-400">Home</Link></li>
          <li><Link to="/users" className="hover:text-yellow-400">Users</Link></li>
          <li><Link to="/dashboard" className="hover:text-yellow-400">Dashboard</Link></li>
          <li><Link to="/login" className="hover:text-yellow-400">Logout</Link></li>
          <li><Link to="/profile" className="hover:text-yellow-400 transition">Profile</Link></li>
        </ul>

        {/* Dark Mode Toggle */}
        <div className="flex items-center gap-4">
          <img
            src={darkMode ? lightIcon : darkIcon}
            alt="Toggle Theme"
            className="w-6 h-6 cursor-pointer transition"
            onClick={() => setDarkMode(!darkMode)}
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          />

          {/* Hamburger Button */}
          <button onClick={toggleMobileMenu} className="md:hidden text-gray-700 dark:text-white">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden mt-4 space-y-4 text-gray-800 dark:text-white font-medium text-center">
          <li><Link to="/home" onClick={toggleMobileMenu}>Home</Link></li>
          <li><Link to="/users" onClick={toggleMobileMenu}>Users</Link></li>
          <li><Link to="/dashboard" onClick={toggleMobileMenu}>Dashboard</Link></li>
          <li><Link to="/login" onClick={toggleMobileMenu}>Logout</Link></li>
          <li><Link to="/profile" onClick={toggleMobileMenu}>Profile</Link></li>
          <li><Link to="/login" onClick={() => localStorage.removeItem("isAuthenticated")}>
                Logout
              </Link>
        </li>
        </ul>
      )}
    </nav>
  );
};

// update

export default Navbar;

