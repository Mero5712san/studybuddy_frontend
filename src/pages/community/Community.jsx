import React, { useEffect, useState, useRef } from "react";
import MessageCard from "../../components/MessageCard";
import ChatInput from "../../components/ChatInput";
import { io } from "socket.io-client";

const SERVER_URL = "http://localhost:5000"; // adjust if needed

const Community = () => {
  const [value, setValue] = useState("");
  const [messagesData, setMessagesData] = useState([
    { date: new Date().toDateString(), messages: [] },
  ]);

  const socketRef = useRef(null);
  const messagesEndRef = useRef(null);

  // Load community messages from the backend
  useEffect(() => {
    const loadOldMessages = async () => {
      try {
        const res = await fetch(`${SERVER_URL}/api/community/messages`);
        const oldMessages = await res.json();

        const grouped = {};
        oldMessages.forEach((msg) => {
          const date = new Date(msg.createdAt).toDateString();
          if (!grouped[date]) grouped[date] = [];
          grouped[date].push({
            message: msg.content,
            userInitial: msg.sender?.name?.[0]?.toUpperCase() || "U",
            time: new Date(msg.createdAt).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
            isSender: false,
          });
        });

        // Convert grouped object → array for rendering
        setMessagesData(
          Object.entries(grouped).map(([date, messages]) => ({
            date,
            messages,
          }))
        );
      } catch (err) {
        console.error("Failed to load old messages", err);
      }
    };

    loadOldMessages();
  }, []);

  // Socket.io setup
  useEffect(() => {
    socketRef.current = io(SERVER_URL, {
      transports: ["websocket", "polling"],
      autoConnect: true,
    });

    const socket = socketRef.current;

    socket.on("connect", () => {
      console.log("  Connected to socket:", socket.id);
      socket.emit("joinCommunity", "community");
    });

    socket.on("connect_error", (err) => {
      console.error("    Socket connection error:", err);
    });

    // Receive community messages (from others)
    const handleReceive = (msg) => {
      const msgDate = new Date().toDateString();

      setMessagesData((prev) => {
        const updated = [...prev];
        const lastSection = updated[updated.length - 1];

        if (!lastSection || lastSection.date !== msgDate) {
          updated.push({ date: msgDate, messages: [msg] });
        } else {
          lastSection.messages = [...lastSection.messages, msg];
        }

        return updated;
      });
    };

    socket.on("receiveCommunityMessage", handleReceive);

    return () => {
      socket.off("receiveCommunityMessage", handleReceive);
      socket.disconnect();
      socketRef.current = null;
    };
  }, []);

  // Auto scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messagesData]);

  const handleSend = (text) => {
    if (!text || !text.trim()) return;

    const timeStr = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const msgData = {
      message: text,
      userInitial: "S", // or get from logged-in user name
      isSender: true,
      time: timeStr,
    };

    // Emit to backend → backend stores + broadcasts (excluding sender)
    if (socketRef.current && socketRef.current.connected) {
      socketRef.current.emit("communityMessage", {
        message: text,
        userInitial: "S",
        userId: 1, // pass actual logged-in user ID here
      });
    } else {
      console.warn("⚠️ Socket not connected, storing locally only.");
    }

    // Add to UI instantly
    const msgDate = new Date().toDateString();
    setMessagesData((prev) => {
      const updated = [...prev];
      const lastSection = updated[updated.length - 1];

      if (!lastSection || lastSection.date !== msgDate) {
        updated.push({ date: msgDate, messages: [msgData] });
      } else {
        lastSection.messages = [...lastSection.messages, msgData];
      }

      return updated;
    });

    setValue("");
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] bg-[#EDE8E8] px-6">
      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        {messagesData.map((section, index) => (
          <div key={index}>
            {/* Date header */}
            <div className="flex justify-center my-3">
              <span className="bg-gray-400 text-white text-xs px-3 py-1 rounded-full shadow">
                {section.date}
              </span>
            </div>

            {/* Messages */}
            {section.messages.map((msg, idx) => (
              <MessageCard
                key={idx}
                message={msg.message}
                time={msg.time}
                userInitial={msg.userInitial || "U"}
                isSender={!!msg.isSender}
              />
            ))}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input box */}
      <div className="p-3 border-t bg-gray-300">
        <ChatInput
          value={value}
          setValue={setValue}
          onSubmit={handleSend}
          placeholder="Ask something in community"
        />
      </div>
    </div>
  );
};

export default Community;
