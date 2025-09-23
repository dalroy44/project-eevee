import { FaHome, FaRegBookmark, FaRegFileAlt } from 'react-icons/fa';
import { IoMdAddCircle } from 'react-icons/io';

const NavLink = ({ icon, text, active = false }: { icon: React.ReactNode, text: string, active?: boolean }) => (
  <a
    href="#"
    className={`flex items-center space-x-3 p-2 rounded-lg ${
      active ? 'bg-accent text-white' : 'hover:bg-gray-100'
    }`}
  >
    {icon}
    <span>{text}</span>
  </a>
);

const LeftSidebar = () => {
  return (
    <div className="w-64 bg-card p-4 rounded-xl shadow-md flex flex-col justify-between">
      <div>
        <nav className="space-y-2">
          <NavLink icon={<FaHome />} text="Home" active />
          <NavLink icon={<FaRegFileAlt />} text="Your treads" />
          <NavLink icon={<FaRegBookmark />} text="Saved" />
        </nav>
        <div className="mt-8">
          <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-2">Current Course (5)</h3>
          {/* Add course links here */}
        </div>
        <div className="mt-8">
          <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-2">Courses 2019/2020</h3>
          {/* Add course links here */}
        </div>
      </div>
      <button className="flex items-center justify-center space-x-2 w-full p-3 bg-accent text-white rounded-lg hover:bg-purple-700">
        <IoMdAddCircle size={24} />
        <span>Join a new class</span>
      </button>
    </div>
  );
};

export default LeftSidebar;
