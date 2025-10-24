import React, { useState } from "react";

const sampleUser = {
  name: "StudyBuddy",
  role: "Knowledge Creator · Tech & Notes Designer",
  location: "Based in Chennai",
  profilePic: "/profile.png",
  followers: 2985,
  following: 132,
  likes: 548,
  materials: [
    {
      title: "Data Structures PDF",
      views: "9.3k",
      likes: 517,
      thumbnail:
        "https://i.pinimg.com/736x/fa/8c/52/fa8c52553a9ba63274d94762e506dace.jpg",
    },
    {
      title: "Algorithms Notes",
      views: "14k",
      likes: 983,
      thumbnail:
        "https://cdn-ilblhlh.nitrocdn.com/GPZeMEUHDphHkVuSHXUfUfAmIVwnktTp/assets/images/optimized/rev-58642af/notes.newtondesk.com/wp-content/uploads/2024/03/English-Grammar-study-notes-pdf-samp7.jpg",
    },
    {
      title: "Python Guide",
      views: "13.5k",
      likes: 875,
      thumbnail:
        "https://cdn.shopify.com/s/files/1/0506/1135/5854/files/Text-Step-6-Doodle-Time_480x480.jpg?v=1642306889",
    },
  ],
  notes: [
    {
      title: "Java Notes",
      views: "10.2k",
      likes: 812,
      thumbnail:
        "https://back.printster.in/Upload/product/60b7d2042d96b1622659588.jpeg",
    },
    {
      title: "OS Summary",
      views: "9.8k",
      likes: 642,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-SeI9jDmJyHeAuEn0MRMdSnw1f0MFzurLyXuBbYieJ5VHgj-Ht2ZUm5Xms7_vBDUU4gs&usqp=CAU",
    },
  ],
};

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("materials");
  const data =
    activeTab === "materials" ? sampleUser.materials : sampleUser.notes;

  const leftOffsetPx = 40;
  const avatarSizePx = 160;
  const avatarGapPx = 16;
  const leftPadding = leftOffsetPx + avatarSizePx + avatarGapPx;

  return (
    <div className="h-[calc(100vh-4rem)] bg-gradient-to-b from-[#f6f0ff] to-white">
      <div className="w-full bg-white shadow-sm overflow-hidden">
        {/* 🌈 Updated Gradient Header */}
        <div className="relative bg-gradient-to-r from-indigo-600 via-[#3b358f] to-[#2a2a40] h-32">
          <img
            src={sampleUser.profilePic}
            alt="profile"
            style={{
              left: leftOffsetPx,
              width: avatarSizePx,
              height: avatarSizePx,
            }}
            className="absolute -bottom-20 rounded-full border-4 border-white shadow-[0_0_15px_#4f46e5] object-cover"
          />
        </div>

        {/* Profile Info Section */}
        <div
          className="pt-8 pb-6"
          style={{ paddingLeft: leftPadding, paddingRight: 40 }}
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h2 className="text-3xl font-semibold text-gray-800 leading-snug">
                {sampleUser.name}
              </h2>
              <p className="text-gray-600 mt-1">{sampleUser.role}</p>
              <p className="text-gray-500 text-sm mt-1">
                {sampleUser.location}
              </p>
              <div className="mt-4 flex space-x-3">
                <button className="px-4 py-1 bg-indigo-600 text-white rounded-lg text-sm hover:bg-[#2a2a40] hover:shadow-[0_0_10px_#4f46e5] hover:ring-1 hover:ring-indigo-500 transition">
                  Follow
                </button>
                <button className="px-4 py-1 border rounded-lg text-sm hover:bg-[#f3f4f6] transition">
                  Message
                </button>
              </div>
            </div>

            <div className="text-right">
              <div className="flex space-x-8 items-center">
                <div>
                  <p className="text-xl font-bold">
                    {sampleUser.followers.toLocaleString()}
                  </p>
                  <p className="text-gray-500 text-sm">Followers</p>
                </div>
                <div>
                  <p className="text-xl font-bold">{sampleUser.following}</p>
                  <p className="text-gray-500 text-sm">Following</p>
                </div>
                <div>
                  <p className="text-xl font-bold">{sampleUser.likes}</p>
                  <p className="text-gray-500 text-sm">Likes</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-t border-b px-10">
          <div className="mt-4 mb-4 flex justify-center space-x-10">
            <button
              onClick={() => setActiveTab("materials")}
              className={`pb-3 font-medium transition ${activeTab === "materials"
                  ? "border-b-2 border-indigo-600 text-indigo-600"
                  : "text-gray-500 hover:text-indigo-600"
                }`}
            >
              Materials
            </button>
            <button
              onClick={() => setActiveTab("notes")}
              className={`pb-3 font-medium transition ${activeTab === "notes"
                  ? "border-b-2 border-indigo-600 text-indigo-600"
                  : "text-gray-500 hover:text-indigo-600"
                }`}
            >
              Notes
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-[#f9f9f9] rounded-2xl shadow hover:shadow-[0_0_15px_#4f46e5]/30 transition-all cursor-pointer overflow-hidden"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-72 object-cover"
              />
              <div className="p-4">
                <p className="font-semibold text-gray-800 truncate">
                  {item.title}
                </p>
                <div className="flex items-center text-sm text-gray-500 mt-1 space-x-3">
                  <span>❤ {item.likes}</span>
                  <span>👁 {item.views}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;