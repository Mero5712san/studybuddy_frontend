// components/Modal.jsx
import React from "react";

export const Middlemodal = ({ isOpen, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
            <div className="bg-white rounded-lg shadow-lg relative">
                {children}
            </div>
        </div>
    );
};
