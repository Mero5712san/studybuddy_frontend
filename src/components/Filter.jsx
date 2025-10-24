import React, { useState } from "react";
import { ModelComp } from "./Model";

export const Filter = () => {
  const [popular, setPopular] = useState("Most");
  const [date, setDate] = useState("");
  const [subject, setSubject] = useState("");
  const [semester, setSemester] = useState("");
  const [author, setAuthor] = useState("");
  const [size, setSize] = useState("");

  const handleClear = () => {
    setPopular("Most");
    setDate("");
    setSubject("");
    setSemester("");
    setAuthor("");
    setSize("");
  };

  const handleApply = () => {
    // Handle filter apply logic here
    console.log({ popular, date, subject, semester, author, size });
  };

  return (
    <ModelComp>
      <div className="bg-white p-6 w-96 rounded-md shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Filter</h2>
          <button className="text-gray-500 text-xl">&times;</button>
        </div>

        {/* Popular */}
        <div className="mb-4">
          <label className="font-medium">Popular :</label>
          <div className="flex gap-4 mt-2">
            {["Most", "Medium", "Less"].map((option) => (
              <label key={option} className="flex items-center gap-1">
                <input
                  type="checkbox"
                  checked={popular === option}
                  onChange={() => setPopular(option)}
                  className="accent-blue-500"
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        {/* Date */}
        <div className="mb-4">
          <label className="font-medium">Date :</label>
          <div className="flex gap-4 mt-2 items-center">
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="date"
                value="Newest"
                checked={date === "Newest"}
                onChange={(e) => setDate(e.target.value)}
                className="accent-blue-500"
              />
              Newest
            </label>
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="date"
                value="Oldest"
                checked={date === "Oldest"}
                onChange={(e) => setDate(e.target.value)}
                className="accent-blue-500"
              />
              Oldest
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1"
            />
          </div>
        </div>

        {/* Subject */}
        <div className="mb-4">
          <label className="font-medium">Subject :</label>
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full border border-gray-300 rounded px-2 py-1 mt-2"
          >
            <option value="">Select subject to filter</option>
            <option value="Math">Math</option>
            <option value="Science">Science</option>
            <option value="English">English</option>
          </select>
        </div>

        {/* Semester */}
        <div className="mb-4">
          <label className="font-medium">Semester :</label>
          <div className="flex gap-2 flex-wrap mt-2">
            {["I", "II", "III", "IV", "V", "VI", "VII", "VIII"].map((sem) => (
              <label key={sem} className="flex items-center gap-1">
                <input
                  type="radio"
                  name="semester"
                  value={sem}
                  checked={semester === sem}
                  onChange={(e) => setSemester(e.target.value)}
                  className="accent-blue-500"
                />
                {sem}
              </label>
            ))}
          </div>
        </div>

        {/* Author */}
        <div className="mb-4">
          <label className="font-medium">Author :</label>
          <select
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full border border-gray-300 rounded px-2 py-1 mt-2"
          >
            <option value="">Select by Author</option>
            <option value="Author1">Author 1</option>
            <option value="Author2">Author 2</option>
          </select>
        </div>

        {/* Size */}
        <div className="mb-4">
          <label className="font-medium">Size :</label>
          <input
            type="number"
            placeholder="No of Pages"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="w-full border border-gray-300 rounded px-2 py-1 mt-2"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={handleClear}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Clear
          </button>
          <button
            onClick={handleApply}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Apply
          </button>
        </div>
      </div>
    </ModelComp>
  );
};
