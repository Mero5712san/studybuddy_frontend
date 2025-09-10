import React from 'react';

export const ProfilePic = (props) => {
  const { name, profilePic, bgColor } = props;
  const initial = name?.charAt(0).toUpperCase();
  return (
    <div>
      <div
        className={`w-12 h-12 flex items-center justify-center rounded-full text-white font-bold text-2xl`}
        style={{ backgroundColor: bgColor || "#6366F1" }}
      >
        {profilePic ? (
          <img
            src={profilePic}
            alt="profile"
            className="w-full h-full rounded-full object-cover"
          />
        ) : (
            
          initial
        )}
      </div>
    </div>
  );
}

