import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ViewNote = () => {
    const { id } = useParams();
    const [note, setNote] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchNote = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/notes/${id}`);
                setNote(res.data);
            } catch (err) {
                console.error("Error fetching note:", err);
            }
        };
        fetchNote();
    }, [id]);

    if (!note) return <div className="text-center mt-10">Loading...</div>;

    // Construct file URL (make sure backend serves /uploads properly)
    const fileUrl = `http://localhost:5000/${note.file_url.replace(/\\/g, "/")}`;

    return (
        <div className="flex flex-col items-center">
            {/* <button
                className="self-start mb-4 text-blue-600 hover:underline"
                onClick={() => navigate(-1)}
            >
                ← Back
            </button> */}
            {/* <h1 className="text-2xl font-bold mb-4">{note.title}</h1>
            <p className="text-gray-700 mb-6">{note.description}</p> */}

            <div className="w-full h-[87vh] border rounded-lg overflow-hidden">
                <iframe
                    src={fileUrl}
                    title={note.title}
                    width="100%"
                    height="100%"
                    className="rounded-lg"
                ></iframe>
            </div>
        </div>
    );
};

export default ViewNote;
