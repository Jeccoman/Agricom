"use client"

import { useState } from "react"
import { Link } from "@remix-run/react"


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-opacity-80 dark:bg-opacity-80 backdrop-blur-md sticky top-0 z-50 px-6 shadow-sm transition-colors duration-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center py-4">
          <img src="/Agricom.svg" alt="Agricom" className="h-8" />
        </Link>
        <button
          className="md:hidden flex items-center p-2 rounded-md text-gray-700 dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        <ul className="hidden md:flex space-x-1 md:space-x-4 p-4 text-xs md:text-sm">
          <li>
            <Link
              to="/"
              className="text-gray-800 dark:text-gray-100 hover:text-primary dark:hover:text-primary-300 px-3 py-2 rounded transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-gray-800 dark:text-gray-100 hover:text-primary dark:hover:text-primary-300 px-3 py-2 rounded transition-colors duration-200"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="text-gray-800 dark:text-gray-100 hover:text-primary dark:hover:text-primary-300 px-3 py-2 rounded transition-colors duration-200"
            >
              Our Services
            </Link>
          </li>
          <li>
            <Link
              to="/blogs"
              className="text-gray-800 dark:text-gray-100 hover:text-primary dark:hover:text-primary-300 px-3 py-2 rounded transition-colors duration-200"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              to="/locate"
              className="text-gray-800 dark:text-gray-100 hover:text-primary dark:hover:text-primary-300 px-3 py-2 rounded transition-colors duration-200"
            >
              Locate Us
            </Link>
          </li>
        </ul>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg rounded-b-lg">
          <ul className="flex flex-col space-y-2 p-4 text-sm">
            <li>
              <Link
                to="/"
                className="block text-gray-800 dark:text-gray-100 hover:text-primary dark:hover:text-primary-300 px-3 py-2 rounded transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block text-gray-800 dark:text-gray-100 hover:text-primary dark:hover:text-primary-300 px-3 py-2 rounded transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block text-gray-800 dark:text-gray-100 hover:text-primary dark:hover:text-primary-300 px-3 py-2 rounded transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                to="/blogs"
                className="block text-gray-800 dark:text-gray-100 hover:text-primary dark:hover:text-primary-300 px-3 py-2 rounded transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/locate"
                className="block text-gray-800 dark:text-gray-100 hover:text-primary dark:hover:text-primary-300 px-3 py-2 rounded transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Locate Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar

