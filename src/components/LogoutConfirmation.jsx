import React from "react";
import { ButtonComp } from "./ButtonComp";
import {WarningIcon} from "../assets/WarningIcon"
export const LogoutConfirmation = ({ onCancel, onConfirm }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-xl shadow-lg p-6 w-[350px] text-center h-60 flex justify-center items-center flex-col">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-orange-100 p-4 rounded-full border border-yellow-400">
            <WarningIcon color = {"orange"} size = {30} />
          </div>
        </div>

        {/* Statement */}
        <p className="text-lg font-medium text-gray-700 mb-6">
          Do you want to confirm it ?
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <ButtonComp
            btntext="Cancel"
            btnstyle="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg"
            onClick={onCancel}
          />
          <ButtonComp
            btntext="Confirm"
            btnstyle="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
            onClick={onConfirm}
          />
        </div>
      </div>
    </div>
  );
};
