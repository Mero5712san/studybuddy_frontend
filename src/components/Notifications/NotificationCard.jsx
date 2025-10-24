import React from "react";

export const NotificationCard = ({ name, profilePic, message, id, bgColor }) => {
    const Initial = name?.charAt(0).toUpperCase();
    return (
        <div
            key={id}
            className="flex flex-col w-full rounded-2xl p-4 mb-3 bg-[#f0ebff]"
        >
            <div className="flex items-start gap-3 w-fit">
                {/* Profile Circle */}
                <div
                    className={` p-2 w-12 h-10 flex items-center justify-center rounded-full text-white font-bold text-sm`}
                    style={{ backgroundColor: bgColor || "#6366F1" }}
                >
                    {profilePic ? (
                        <img
                            src={profilePic}
                            alt="profile"
                            className="w-full h-full rounded-full object-cover"
                        />
                    ) : (
                        Initial
                    )}
                </div>

                {/* Message Section */}
                <div>
                    <div className="font-semibold">New message</div>
                    <div className="text-sm text-gray-800">{message}</div>
                </div>
            </div>
        </div>
    );
};
