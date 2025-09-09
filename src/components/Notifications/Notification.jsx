// components/Notifications/Notification.jsx
import React from "react";
import { NotificationCard } from "./NotificationCard";
import { ModelComp } from "../Model";

export const Notification = ({ isOpen, onClose }) => {
  const notifies = [
    {
      id: 1,
      name: "Smith",
      prof_pic: "",
      message:
        "hey there can i get connect with you the automated resources allocation methodology doubt clearing session",
      bgColor: "#1e3a8a", // blue
    },
    {
      id: 2,
      name: "Merlin",
      prof_pic: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      message:
        "hey there can i get connect with you the automated resources allocation methodology doubt clearing session",
      bgColor: "#6d28d9", // purple
    },
  ];

  return (
    <ModelComp isOpen={isOpen} onClose={onClose} title="Notifications">
      <div className={`${isOpen ? "block" : "hidden"} w-full`}>
        {notifies.map((notify) => (
          <NotificationCard
            key={notify.id}
            name={notify.name}
            message={notify.message}
            profilePic={notify.prof_pic}
            bgColor={notify.bgColor}
          />
        ))}
      </div>
    </ModelComp>
  );
};
