import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { MessageCard } from "../../components/MessageCard";
import { ChatInput } from "../../components/ChatInput";
import { ProfilePic } from "../../components/ProfilePic";
import { Search } from "lucide-react";
import { CallModal } from "./CallModal";
import { MessageIcon } from "../../assets";
import { VideoIcon } from "../../assets/VideoIcon";
import { CallIcon } from "../../assets/CallIcon";
import { socket } from "../../utils/socket";

const ChatPage = () => {
  const { chatId, callType: callRouteType } = useParams();
  const navigate = useNavigate();

  const [loggedInUser, setLoggedInUser] = useState(null);
  const [allUsers, setAllUsers] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [callOpen, setCallOpen] = useState(false);
  const [callType, setCallType] = useState(null);
  const [incomingCall, setIncomingCall] = useState(null);

  // Fetch logged-in user
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("No token found");
        const res = await axios.get("http://localhost:5000/api/users/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setLoggedInUser(res.data);
      } catch (err) {
        console.error("Error fetching logged-in user:", err);
      }
    };
    fetchUser();
  }, []);

  // Fetch all users
  useEffect(() => {
    const fetchAllUsers = async () => {
      if (!loggedInUser) return;
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/users", {
          headers: { Authorization: `Bearer ${token}` },
        });
        // Exclude logged-in user
        setAllUsers(res.data.filter(u => u.id !== loggedInUser.id));
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };
    fetchAllUsers();
  }, [loggedInUser]);

  // Socket connection
  useEffect(() => {
    if (!loggedInUser) return;

    socket.connect();
    socket.emit("userOnline", loggedInUser.id);

    socket.on("online_users", users => {
      setOnlineUsers(users.filter(u => u.userId !== loggedInUser.id));
    });

    socket.on("receive_message", msg => {
      if (msg.sender_id === selectedChat?.id || msg.receiver_id === selectedChat?.id) {
        setMessages(prev => [...prev, { ...msg, isSender: msg.sender_id === loggedInUser.id }]);
      }
    });

    socket.on("incoming_call", data => {
      setIncomingCall(data);
      setCallOpen(true);
      setCallType(data.type);
    });

    return () => socket.disconnect();
  }, [loggedInUser, selectedChat]);

  // Set selected chat based on route
  useEffect(() => {
    if (chatId && allUsers.length) {
      const chat = allUsers.find(u => u.id === parseInt(chatId));
      setSelectedChat(chat || null);
      setMessages([
        {
          message: `This is a sample chat with ${chat?.name}.`,
          time: "11:11 PM",
          userInitial: chat?.name?.charAt(0),
          isSender: false,
        },
      ]);
    } else {
      setSelectedChat(null);
      setMessages([]);
    }
  }, [chatId, allUsers]);

  // Handle route-based call
  useEffect(() => {
    if (callRouteType) {
      setCallType(callRouteType);
      setCallOpen(true);
    } else {
      setCallOpen(false);
      setCallType(null);
    }
  }, [callRouteType]);

  // Merge online status into users
  const displayedUsers = allUsers.map(user => ({
    ...user,
    isOnline: onlineUsers.some(o => o.userId === user.id),
    color: user.color || "#1E3A8A",
  }));

  // Send message
  const handleSend = text => {
    if (!text.trim() || !selectedChat || !loggedInUser) return;

    const newMsg = {
      message: text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      userInitial: loggedInUser.name?.charAt(0),
      isSender: true,
    };
    setMessages([...messages, newMsg]);

    socket.emit("send_message", {
      sender_id: loggedInUser.id,
      receiver_id: selectedChat.id,
      content: text,
      message_type: "text",
    });

    setInputValue("");
  };

  // Navigation helpers
  const openChat = user => navigate(`/chat/${user.id}`);
  const openCall = type => {
    if (!selectedChat) return;
    navigate(`/chat/${selectedChat.id}/call/${type}`);
  };
  const closeCall = () => {
    setCallOpen(false);
    setCallType(null);
    navigate(`/chat/${selectedChat?.id}`);
  };

  return (
    <div className="flex h-[calc(100vh-5.5rem)] bg-[#f5f5f5] no-scrollbar">
      {/* LEFT CHAT LIST */}
      <div className="w-[25%] min-w-[260px] border-r bg-white flex flex-col">
        <div className="px-4 py-3 border-b">
          <h2 className="font-semibold text-lg">Chats</h2>
          <div className="flex items-center mt-2 bg-gray-100 rounded-full px-3">
            <Search size={16} className="text-gray-500" />
            <input type="text" placeholder="Search..." className="flex-1 bg-transparent p-2 text-sm outline-none" />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto no-scrollbar">
          {displayedUsers.map(user => (
            <div
              key={user.id}
              className={`flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-100 ${selectedChat?.id === user.id ? "bg-gray-200" : ""
                }`}
              onClick={() => openChat(user)}
            >
              <ProfilePic name={user.name} bgColor={user.color} />
              <div className="flex-1">
                <h3 className="font-medium text-sm text-gray-800 truncate">{user.name}</h3>
                <p className="text-xs text-gray-500 truncate">{user.isOnline ? "Online" : "Offline"}</p>
              </div>
             
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT CHAT WINDOW */}
      <div className="flex-1 flex flex-col">
        {!selectedChat ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-400">
            <div className="opacity-30">
              <MessageIcon size={400} color="#5A5A5A" />
            </div>
            <p className="text-lg">No messages Selected</p>
          </div>
        ) : (
          <>
            {/* Chat Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-white border-b">
              <div className="flex items-center gap-3">
                <ProfilePic name={selectedChat.name} bgColor={selectedChat.color} />
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm">{selectedChat.name}</h3>
                  <p className="text-xs text-gray-500">{selectedChat.isOnline ? "Online" : "Offline"}</p>
                </div>
              </div>
              <div className="flex gap-3 text-gray-500">
                <div className="cursor-pointer hover:text-blue-500" onClick={() => openCall("video")}>
                  <VideoIcon />
                </div>
                <div className="cursor-pointer hover:text-blue-500" onClick={() => openCall("audio")}>
                  <CallIcon />
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-3 no-scrollbar bg-[#f3f4f6]">
              {messages.map((msg, idx) => (
                <MessageCard key={idx} {...msg} />
              ))}
            </div>

            {/* Chat Input */}
            <div className="border-t bg-gray-300 p-3">
              <ChatInput value={inputValue} setValue={setInputValue} onSubmit={handleSend} placeholder="Type a message..." />
            </div>
          </>
        )}
      </div>

      {/* Call Modal */}
      {callOpen && selectedChat && (
        <CallModal isOpen={callOpen} onClose={closeCall} type={callType} user={selectedChat.name} />
      )}
    </div>
  );
};

export default ChatPage;
