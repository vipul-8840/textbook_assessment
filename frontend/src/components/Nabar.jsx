
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center  justify-start">
         <Link to='/'>
         <img src="https://img.freepik.com/free-vector/vector-education-logo_779267-2059.jpg" alt="Textbook" className="w-12 h-12" />
         </Link>
        <div className="ml-30 space-x-30">
          <Link to="/about" className="text-white">About</Link>
          <Link to="/signup" className="text-white">Sign Up</Link>
          <Link to="/signin" className="text-white">Sign In</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;