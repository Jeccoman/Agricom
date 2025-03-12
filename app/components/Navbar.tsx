import { Link } from "@remix-run/react";

// Import the logo
import agricom from "/public/Agricom.svg";

const Navbar = () => {
  return (
    <nav className=" bg-opacity-80 dark:bg-opacity-80 backdrop-blur-md sticky top-0 z-50 px-6 shadow-sm transition-colors duration-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center ">
          <img src={agricom || "/placeholder.svg"} alt="Agricom" className="h-8" />
        </Link>
        
        <ul className="flex space-x-1 md:space-x-4 p-4 text-xs md:text-sm">
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
    </nav>
  );
};

export default Navbar;
