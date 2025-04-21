
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-semibold text-sky-600">
            Tanmay Sharma
          </Link>
          <div className="flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-sky-600 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-sky-600 transition-colors">
              About Me
            </Link>
            <Link to="/projects" className="text-gray-600 hover:text-sky-600 transition-colors">
              Projects
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-sky-600 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
