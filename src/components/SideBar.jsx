import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  MenuIcon, CloseIcon, HomeIcon,
  BookIcon, CommunityIcon, MessageIcon, LogoutIcon
} from '../assets';

export const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: <HomeIcon size={22} color="white" />, label: 'Home', path: '/home' },
    { icon: <BookIcon size={22} color="white" />, label: 'Materials', path: '/materials' },
    { icon: <CommunityIcon size={22} color="white" />, label: 'Community', path: '/community' },
    { icon: <MessageIcon size={22} color="white" />, label: 'Chat', path: '/chat' },
  ];

  const handleLogout = () => {
    
  };

  return (
    <div
      className={`bg-[#1e1e2f] text-white h-screen shadow-lg flex flex-col justify-between transition-all duration-300 ease-in-out ${isOpen ? 'w-44' : 'w-16'
        }`}
    >
      <div className='flex flex-col gap-4'>
        <div className="p-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <CloseIcon size={22} color="white" /> : <MenuIcon size={22} color="white" />}
        </div>
        <div className="flex flex-col gap-3 px-2">
          {menuItems.map((item, idx) => {
            const isActive = location.pathname === item.path;
            return (
              <div
                key={idx}
                onClick={() => navigate(item.path)}
                className={`flex items-center gap-4 p-3 rounded-md cursor-pointer transition-all duration-200
                  ${isActive ? 'bg-indigo-600' : 'hover:bg-[#2a2a40] hover:shadow-[0_0_10px_#4f46e5] hover:ring-1 hover:ring-indigo-500'}`}
              >
                <div className="w-6 h-6 flex items-center justify-center">{item.icon}</div>
                {isOpen && <span className="text-sm font-medium">{item.label}</span>}
              </div>
            );
          })}
        </div>
      </div>
      <div className="px-2 mb-4">
        <div
          onClick={handleLogout}
          className="flex items-center gap-4 p-3 rounded-md cursor-pointer transition-all duration-200
            hover:bg-[#2a2a40] hover:shadow-[0_0_10px_#ef4444] hover:ring-1 hover:ring-red-500"
        >
          <div className="w-6 h-6 flex items-center justify-center">
            <LogoutIcon size={22} color="white" />
          </div>
          {isOpen && <span className="text-sm font-medium">Logout</span>}
        </div>
      </div>
    </div>
  );
};
