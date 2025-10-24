import React from "react";

/**
 * MessageCard
 * Props:
 *  - message: string
 *  - time: string
 *  - userInitial: string
 *  - isSender: boolean
 */
export const MessageCard = ({ message, time, userInitial, isSender }) => {
  return (
    <div
      className={`flex items-end my-2 ${isSender ? "justify-end" : "justify-start"}`}
    >
      {/* Avatar (only if receiver) */}
      {!isSender && (
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-900 text-white font-bold text-sm mr-2">
          {userInitial}
        </div>
      )}

      {/* Message bubble */}
      <div
        className={`relative px-4 py-2 rounded-lg shadow-md max-w-[70%] ${isSender ? "bg-purple-600 text-white" : "bg-white text-gray-800"}`}
      >
        <p className="text-sm break-words">{message}</p>

        {/* Time */}
        <span className={`text-xs block mt-1 ${isSender ? "text-white/80 text-right" : "text-gray-500 text-right"}`}>
          {time}
        </span>

        {/* Chat bubble tail */}
        {isSender ? (
          <div
            className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-0 h-0"
            aria-hidden
          >
            {/* triangle pointing right, matches bubble color */}
            <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0L12 7L0 14V0Z" fill="currentColor" />
            </svg>
            <style>{`
              .absolute svg { color: #7c3aed; } /* purple-600 */
            `}</style>
          </div>
        ) : (
          <div
            className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0 h-0"
            aria-hidden
          >
            {/* triangle pointing left, matches white bubble */}
            <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0L0 7L12 14V0Z" fill="currentColor" />
            </svg>
            <style>{`
              .absolute svg { color: #ffffff; } /* white bubble color */
            `}</style>
          </div>
        )}
      </div>

      {/* Avatar (only if sender) */}
      {isSender && (
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-600 text-white font-bold text-sm ml-2">
          {userInitial}
        </div>
      )}
    </div>
  );
};

export default MessageCard;
