// src/services/NoteService.js
import axios from "axios";

const API_URL = "http://localhost:5000/api/notes"; // adjust if needed

export const uploadNote = async (noteData, token) => {
    try {
        const formData = new FormData();
        formData.append("file", noteData.file);
        formData.append("title", noteData.title);
        formData.append("description", noteData.description);
        formData.append("type", noteData.type);
        formData.append("subject", noteData.subject);
        formData.append("semester", noteData.semester);

        const res = await axios.post(`${API_URL}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
            },
        });

        return res.data;
    } catch (err) {
        throw err.response?.data || { error: "Failed to upload note" };
    }
};
