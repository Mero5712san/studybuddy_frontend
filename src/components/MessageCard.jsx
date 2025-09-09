import React from "react";

export const MessageCard = ({ message, time, userInitial, isSender }) => {
  return (
    <div
      className={`flex items-end my-2 ${isSender ? "justify-end space-x-2" : "justify-start space-x-2"
        }`}
    >
      {/* Avatar (only if receiver) */}
      {!isSender && (
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-900 text-white font-bold text-sm">
          {userInitial}
        </div>
      )}

      {/* Message bubble */}
      <div
        className={`relative bg-white px-4 py-2 rounded-lg shadow-md max-w-[70%]`}
      >
        <p className="text-gray-800 text-sm">{message}</p>

        {/* Time */}
        <span className="text-xs text-gray-500 block text-right mt-1">
          {time}
        </span>

        {/* Chat bubble tail */}
        {isSender ? (
          <div className="absolute right-[-10px] top-0 w-0 h-0 border-t-[2px] border-t-transparent border-l-[15px] border-l-white border-b-[15px] border-b-transparent">
          </div>
        ) : (
          <div className="absolute left-[-10px] bottom-0 w-0 h-0 border-t-[12px] border-t-transparent border-r-[15px] border-r-white border-b-[5px] border-b-transparent">
          </div>
        )}
      </div>

      {/* Avatar (only if sender) */}
      {isSender && (
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-600 text-white font-bold text-sm">
          {userInitial}
        </div>
      )}
    </div>
  );
};
