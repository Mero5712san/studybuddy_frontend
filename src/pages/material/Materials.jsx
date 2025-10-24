import React, { useState, useEffect } from "react";
import axios from "axios";
import { CardComp } from "../../components/CardComp";
import { useSearchParams, useNavigate } from "react-router-dom";
import { SortIcon } from "../../assets/SortIcon";
import { FilterIcon } from "../../assets/FilterIcon";
import { Filter } from "../../components/Filter";

const Materials = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const selectedContent = searchParams.get("type");

  const [notes, setNotes] = useState([]);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [sortOption, setSortOption] = useState("Date");

  // Fetch from backend
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/notes");
        setNotes(res.data);
      } catch (err) {
        console.error("Error fetching notes:", err);
      }
    };
    fetchNotes();
  }, []);

  // Create sections
  const recentNotes = [...notes].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
  const topNotes = [...notes].sort((a, b) => b.likes - a.likes);
  const recommendedNotes = notes.filter(
    (n) => n.subject?.toLowerCase() === "maths"
  );

  const sections = [
    { key: "recent", title: "Recently Uploaded", items: recentNotes },
    { key: "top", title: "Top Liked", items: topNotes },
    { key: "recommended", title: "Recommended for You", items: recommendedNotes },
  ];

  // Sorting logic
  const sortItems = (items) => {
    switch (sortOption) {
      case "Name":
        return [...items].sort((a, b) => a.title.localeCompare(b.title));
      case "Date":
        return [...items].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
      case "Likes":
        return [...items].sort((a, b) => b.likes - a.likes);
      default:
        return items;
    }
  };

  // If a specific category is opened (via ?type=)
  if (selectedContent) {
    const section = sections.find((s) => s.key === selectedContent);
    if (!section) return null;

    const sortedItems = sortItems(section.items);

    return (
      <div className="flex flex-col gap-4 relative">
        <div className="bg-white rounded-xl relative">
          <div className="px-4 pt-4 flex justify-between items-center">
            <h2 className="text-xl font-bold">{section.title}</h2>

            <div className="flex gap-4 relative">
              {/* Sort Button */}
              <button
                className="border rounded-md p-2 flex items-center gap-1"
                onClick={() => setIsSortOpen(!isSortOpen)}
              >
                <SortIcon />
              </button>

              {/* Sort Dropdown */}
              {isSortOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg z-20">
                  {["Name", "Date", "Likes"].map((option) => (
                    <div
                      key={option}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center"
                      onClick={() => {
                        setSortOption(option);
                        setIsSortOpen(false);
                      }}
                    >
                      <input
                        type="radio"
                        name="sort"
                        checked={sortOption === option}
                        className="mr-3"
                        readOnly
                      />
                      {option}
                    </div>
                  ))}
                </div>
              )}

              <span className="border rounded-md p-2 cursor-pointer">
                <FilterIcon />
              </span>
              <Filter />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
            {sortedItems.length > 0 ? (
              sortedItems.map((item) => (
                <CardComp
                  key={item.id}
                  image="https://cdn-icons-png.flaticon.com/512/337/337946.png"
                  title={item.title}
                  likes={item.likes}
                  content={`${item.subject} - Semester ${item.semester}`}
                  onClick={() => navigate(`/view-note/${item.id}`)}
                />
              ))
            ) : (
              <p className="text-center col-span-4 text-gray-500">
                No materials found.
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Default view — first 4 per section
  return (
    <div className="flex flex-col gap-4">
      {sections.map((section) => (
        <div key={section.key} className="bg-white rounded-xl">
          <div className="px-4 pt-4 flex justify-between items-center">
            <h2 className="text-xl font-bold">{section.title}</h2>
            <span
              className="text-sm text-blue-800 cursor-pointer"
              onClick={() => navigate(`/materials?type=${section.key}`)}
            >
              View All &#10095;
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
            {section.items.slice(0, 4).map((item) => (
              <CardComp
                key={item.id}
                image="https://cdn-icons-png.flaticon.com/512/337/337946.png"
                title={item.title}
                likes={item.likes}
                content={`${item.subject} - Semester ${item.semester}`}
                onClick={() => navigate(`/view-note/${item.id}`)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Materials;
