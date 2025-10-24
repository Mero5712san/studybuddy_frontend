import React, { useRef } from "react";
import { Middlemodal } from "./MiddleModel";

export const OTPModel = (props) => {
    const { isOpen, onClose, onOtpChange } = props;
    const inputRefs = useRef([]);

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (onOtpChange) onOtpChange(index, value);
        if (value && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !e.target.value && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    return (
        <Middlemodal isOpen={isOpen}>
            <div className="bg-white p-6 rounded-2xl shadow-lg w-[320px] mx-auto">
                <div className="text-center font-semibold text-lg mb-4">Verify OTP</div>

                <div className="flex justify-between items-center mb-4 text-sm">
                    <span className="text-gray-700">Enter code</span>
                    <button className="text-blue-500 hover:underline">Resend OTP</button>
                </div>

                <div className="flex justify-center gap-4 m-6">
                    {Array(6)
                        .fill(0)
                        .map((_, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength="1"
                                ref={(el) => (inputRefs.current[index] = el)}
                                onChange={(e) => handleChange(e, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                className="w-9 h-9 border border-gray-300 rounded-md text-center text-lg 
                  focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none"
                            />
                        ))}
                </div>

                <button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition"
                    onClick={onClose}
                >
                    Submit
                </button>
            </div>
        </Middlemodal>
    );
};
