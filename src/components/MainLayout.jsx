import { Outlet } from 'react-router-dom';
import { SideBar } from './SideBar';
import { Topbar } from './TopBar';
import { Upload } from './Upload';
import { useState } from 'react';
import { Bot } from 'lucide-react';
import { ChatbotDrawer } from './ChatbotDrawer';

export const MainLayout = () => {
    const [openUpload, setOpenUpload] = useState(false);
    const [openChatbot, setOpenChatbot] = useState(false);

    return (
        <div className="flex h-screen relative">
            <SideBar />
            <div className="flex-1 flex flex-col">
                <Topbar onOpenUpload={() => setOpenUpload(true)} />
                <div className="flex-1 overflow-auto bg-[#f5f5f5] text-black p-3">
                    <Outlet />
                </div>
            </div>

            <div
                className="fixed bottom-6 right-6 w-12 h-12 text-xl bg-blue-800 text-white rounded-full flex items-center justify-center shadow-lg cursor-pointer z-30"
                onClick={() => setOpenChatbot(true)}
                title="Open StudyBuddy Assistant"
            >
                <Bot size={20} />
            </div>

            <ChatbotDrawer
                isOpen={openChatbot}
                onClose={() => setOpenChatbot(false)}
                onOpenUpload={() => setOpenUpload(true)}
            />
            <Upload isOpen={openUpload} onClose={() => setOpenUpload(false)} />
        </div>
    );
};
