import { FaUserCircle } from 'react-icons/fa';

const RightSidebar = () => {
  const attendees = [
    { name: 'Leslie Alexander' },
    { name: 'Darlene Robertson' },
    { name: 'Albert Flores' },
    { name: 'Jane Cooper' },
    { name: 'Jenny Wilson' },
  ];

  return (
    <div className="w-80 bg-card p-6 rounded-xl shadow-md">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-text-primary">Accounting</h3>
        <p className="text-sm text-text-secondary">Group: R2160015</p>
        <div className="relative inline-block mt-4">
          <img
            className="w-24 h-24 rounded-full"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            alt="Dr. Ronald Jackson"
          />
          <span className="absolute bottom-0 right-0 block h-6 w-6 rounded-full bg-green-400 border-2 border-white"></span>
        </div>
        <h2 className="text-xl font-bold mt-4 text-text-primary">Dr Ronald Jackson</h2>
        <p className="text-sm text-text-secondary">Main Lecturer</p>
        <div className="mt-4 space-y-2 text-left">
          <p className="text-sm text-text-secondary">+49 550 233 553</p>
          <p className="text-sm text-text-secondary">ronald.jackson@uec.pl</p>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="font-semibold text-text-primary">22 attendees</h3>
        <div className="mt-4 space-y-3">
          {attendees.map((attendee, index) => (
            <div key={index} className="flex items-center space-x-3">
              <FaUserCircle size={32} className="text-gray-300" />
              <span className="text-sm text-text-primary">{attendee.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
