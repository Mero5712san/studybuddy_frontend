// pages/Home/Home.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "../../components/Carousel";
import { CardComp } from "../../components/CardComp";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);
  const [carouselItems, setCarouselItems] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/notes");
        const allNotes = res.data.filter(n => !n.is_blocked);

        // Carousel: top 3 recently uploaded
        const recentTop3 = [...allNotes]
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 3)
          .map((note) => ({
            image: "https://plus.unsplash.com/premium_photo-1683309567810-4d232ee83d2f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bm90ZXN8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000", // PDF icon
            title: note.title,
            description: `${note.subject} - Semester ${note.semester}`,
          }));

        // Recommended notes (you can filter by subject or any logic)
        const recommended = allNotes;

        setCarouselItems(recentTop3);
        setNotes(recommended);
        console.log("Carousel Items:", recommended);
      } catch (err) {
        console.error("Error fetching notes:", err);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {/* Carousel */}
      <Carousel items={carouselItems} />

      {/* Top Collections */}
      <div className="bg-white rounded-xl">
        <div className="px-4 pt-4 flex justify-between items-center">
          <h2 className="text-xl font-bold">Top Collections</h2>
          <span
            className="text-sm text-blue-800 cursor-pointer"
            onClick={() => navigate("/materials")}
          >
            View All &#10095;
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
          {notes.slice(0, 4).map((note) => (
            <CardComp
              key={note.id}
              image="https://cdn-icons-png.flaticon.com/512/337/337946.png"
              title={note.title}
              likes={note.likes || 0}
              content={`${note.subject} - Semester ${note.semester}`}
              onClick={() => navigate(`/view-note/${note.id}`)}
            />
          ))}
        </div>
      </div>

      {/* Recommended for you */}
      <div className="bg-white rounded-xl">
        <div className="px-4 pt-4 flex justify-between items-center">
          <h2 className="text-xl font-bold">Recommended for you</h2>
          <span
            className="text-sm text-blue-800 cursor-pointer"
            onClick={() => navigate("/materials")}
          >
            View All &#10095;
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
          {notes.slice(4, 8).map((note) => (
            <CardComp
              key={note.id}
              image="https://cdn-icons-png.flaticon.com/512/337/337946.png"
              title={note.title}
              likes={note.likes || 0}
              content={`${note.subject} - Semester ${note.semester}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
