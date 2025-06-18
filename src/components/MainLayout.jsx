import { Outlet } from 'react-router-dom';
import { SideBar } from './sideBar';
import { Topbar } from './topBar';


export const MainLayout = () => {
    return (
        <div className="flex h-screen">
            <SideBar/>
            <div className="flex-1 flex flex-col">
                <Topbar/>
                <div className="flex-1 overflow-auto bg-[#f5f5f5] text-black p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
