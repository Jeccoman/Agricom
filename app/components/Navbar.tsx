import agricom from "/public/Agricom.svg"; 

const Navbar = () => {
  return (
    <nav className=" bg-opacity-50 backdrop-blur-md sticky top-0 z-50 px-6">
      <ul className="flex space-x-4 p-4 text-sm">
      <li>
          <a href="#home">
            <img src={agricom} alt="Agricom" className="h-8" />
          </a>
          </li>
        <li><a href="#home" className="text-white  px-3 py-2 rounded">Home</a></li>
        <li><a href="#about" className="text-white  px-3 py-2 rounded">About Us</a></li>
        <li><a href="#services" className="text-white  px-3 py-2 rounded">Our Services</a></li>
        <li><a href="#Blogs" className="text-white  px-3 py-2 rounded">Blogs</a></li>
        <li><a href="#contact" className="text-white px-3 py-2 rounded">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;