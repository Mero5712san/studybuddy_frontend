// components/Notifications/Notification.jsx
import React, { useEffect, useState } from "react";
import { NotificationCard } from "./NotificationCard";
import { ModelComp } from "../Model";
import axios from "axios";

export const Notification = ({ isOpen, onClose }) => {
  const [notifies, setNotifies] = useState([]);

  useEffect(() => {
    if (isOpen) {
      fetchNotifications();
    }
  }, [isOpen]);

  const fetchNotifications = async () => {
    try {
      const token = localStorage.getItem("token"); // assuming you saved JWT here
      const res = await axios.get("http://localhost:5000/api/notifications", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setNotifies(res.data);
    } catch (err) {
      console.error("Error fetching notifications:", err);
    }
  };

  return (
    <ModelComp isOpen={isOpen} onClose={onClose} title="Notifications">
      <div className={`${isOpen ? "block" : "hidden"} w-full`}>
        {notifies.length > 0 ? (
          notifies.map((notify) => (
            <NotificationCard
              key={notify.id}
              id={notify.id}
              name={notify.senderName || "System"}
              message={notify.content}
              profilePic={notify.senderPic}
              bgColor="#6d28d9"
            />
          ))
        ) : (
          <div className="text-gray-600 text-center py-6">
            No notifications yet
          </div>
        )}
      </div>
    </ModelComp>
  );
};
