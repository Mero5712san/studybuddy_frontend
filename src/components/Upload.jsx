import React, { useState } from "react";
import { ModelComp } from "./Model";
import { InputFeild } from "./InputFeild";
import { ButtonComp } from "./ButtonComp";
import { DeleteIcon } from "../assets/DeleteIcon";
import { UploadIcon } from "../assets/UploadIcon";
import { uploadNote } from "../services/NotesService";

export const Upload = ({ isOpen, onClose }) => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [semester, setSemester] = useState("");
  const [description, setDescription] = useState("");
  const [subject, setSubject] = useState("");
  const [type, setType] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
  };

  const handleSubmit = async () => {
    if (!file || !title || !semester || !subject || !type) {
      setError("All fields are required");
      return;
    }

    try {
      setLoading(true);
      setError("");
      const token = localStorage.getItem("token");
      await uploadNote(
        { file, title, semester, description, subject, type },
        token
      );
      alert("  Note uploaded successfully!");
      onClose();
    } catch (err) {
      setError(err.error || "Failed to upload note");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ModelComp isOpen={isOpen} onClose={onClose} title="Add Notes">
      <div className="space-y-4">
        {/* Upload Section */}
        <div>
          <label className="block text-sm font-medium mb-1">Upload :</label>
          {!file ? (
            <label className="flex flex-col items-center justify-center h-32 border-2 border-dashed rounded-xl cursor-pointer hover:bg-gray-50">
              <UploadIcon className="w-8 h-8 text-gray-500" />
              <p className="text-sm text-gray-500">Upload your file here</p>
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          ) : (
            <div className="flex items-center justify-between border rounded-lg p-2 bg-gray-100">
              <span className="text-sm truncate">{file.name}</span>
              <button
                onClick={handleRemoveFile}
                className="p-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                <DeleteIcon size={16} />
              </button>
            </div>
          )}
        </div>

        {/* Other Inputs */}
        <InputFeild
          label="Title"
          placeholder="Enter note title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <InputFeild
          label="Description"
          placeholder="Enter short description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div>
          <label className="block text-sm font-medium mb-1">Semester :</label>
          <div className="grid grid-cols-4 gap-2">
            {["I", "II", "III", "IV", "V", "VI", "VII", "VIII"].map((sem) => (
              <label key={sem} className="flex items-center gap-1 text-sm">
                <input
                  type="radio"
                  name="semester"
                  value={sem}
                  checked={semester === sem}
                  onChange={(e) => setSemester(e.target.value)}
                />
                {sem}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Subject :</label>
          <select
            className="w-full border rounded-md p-2 text-sm"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          >
            <option value="">Select Subject</option>
            <option value="maths">Mathematics</option>
            <option value="physics">Physics</option>
            <option value="chemistry">Chemistry</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Type :</label>
          <select
            className="w-full border rounded-md p-2 text-sm"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">File type</option>
            <option value="pdf">PDF</option>
            <option value="doc">DOC</option>
            <option value="ppt">PPT</option>
          </select>
        </div>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <ButtonComp
          onClick={handleSubmit}
          btnstyle="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2 flex items-center justify-center gap-2"
        >
          {loading ? "Uploading..." : "Upload"}
          <UploadIcon className="w-4 h-4" />
        </ButtonComp>
      </div>
    </ModelComp>
  );
};
