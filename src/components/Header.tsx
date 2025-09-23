import { FaBell, FaUserCircle, FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-card shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-accent rounded-md"></div>
          <span className="text-xl font-bold text-text-primary">Cracovia University</span>
        </div>

        {/* Search Bar */}
        <div className="relative w-1/3">
          <input
            type="search"
            placeholder="Type to search"
            className="w-full p-2 pl-10 rounded-lg bg-background border border-transparent focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
        </div>

        {/* User Icons */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-500 hover:text-accent">
            <FaBell size={24} />
          </button>
          <button className="text-gray-500 hover:text-accent">
            <FaUserCircle size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
