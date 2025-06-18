import { HelpIcon, BellIcon, ProfileIcon } from '../assets';

export const Topbar = () => {
  return (
    <div className="w-full h-16 bg-[#1e1e2f] flex items-center justify-between px-6 shadow-md border-l">
      <div className="text-white font-bold text-xl tracking-wide">StudyBuddy</div>

      <div className="flex-1 px-10">
        <input
          type="text"
          placeholder="Search..."
          className="w-full max-w-md px-4 py-2 rounded-md bg-[#2a2a40] text-white focus:outline-none focus:ring-2 focus:ring-violet-500 placeholder:text-gray-300"
        />
      </div>

      <div className="flex items-center gap-6">
        <HelpIcon size={22} color="white" className="cursor-pointer hover:text-violet-400 transition" />
        <BellIcon isNotify size={22} color="white" className="cursor-pointer hover:text-violet-400 transition" />
        <span className="bg-white rounded-full p-1">
          <ProfileIcon size={16} color="grey" className="cursor-pointer hover:text-violet-400 transition" />
        </span>
      </div>
    </div>
  );
};
