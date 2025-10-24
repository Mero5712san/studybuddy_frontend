import { Outlet, useLocation } from 'react-router-dom';
import { SideBar } from './sideBar';
import { Topbar } from './topBar';
import { Upload } from './Upload';
import { useState } from 'react';
import { PlusIcon } from '../assets/PlusIcon';
export const MainLayout = () => {
    const location = useLocation();
    const hidePlusBtn = ["/community", "/chat"].includes(location.pathname);
    const [openUpload, setOpenUpload] = useState(false);
    return (
        <div className="flex h-screen relative">
            <SideBar />
            <div className="flex-1 flex flex-col">
                <Topbar />
                <div className="flex-1 overflow-auto bg-[#f5f5f5] text-black p-3">
                    <Outlet />
                </div>
            </div>

            {/* Floating button (hidden on /community and /chats) */}
            {!hidePlusBtn && (
                <div className="fixed bottom-6 right-6 w-12 h-12 text-xl bg-blue-800 text-white rounded-full flex items-center justify-center shadow-lg cursor-pointer"
                    onClick={() => setOpenUpload(true)}
                >
                    <PlusIcon size={14} />
                </div>
            )}
            <Upload isOpen={openUpload} onClose={() => setOpenUpload(false)} />
        </div>
    );
};
