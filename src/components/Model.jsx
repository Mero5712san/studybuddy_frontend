import { useEffect } from "react";
import { CloseIcon } from "../assets/CloseIcon";

export const ModelComp = ({ isOpen, onClose, children, title }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"; // Prevent background scroll
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    return (
        <>
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-40 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                onClick={onClose}
            />

            {/* Slide-in Modal */}
            <div
                className={`fixed top-0 right-0 h-full w-1/4 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Top Title section */}
                <div className="flex justify-between p-3 border-b"  >
                    <h1 className="text-lg font-bold">{title}</h1>
                    <button
                        onClick={onClose}
                    >
                        <CloseIcon />
                    </button>
                </div>

                {/* content of the page */}
                <div className="p-4 overflow-y-auto h-[calc(100%-3rem)]">
                    {children}
                </div>
            </div>
        </>
    );
};
