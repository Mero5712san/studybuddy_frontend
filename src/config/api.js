const DEFAULT_API_BASE_URL = "https://studybuddy-backend-1-2t38.onrender.com";

export const API_BASE_URL = (
    import.meta.env.VITE_API_BASE_URL || DEFAULT_API_BASE_URL
).replace(/\/+$/, "");

export const SOCKET_URL = API_BASE_URL;

export const buildApiUrl = (path) => {
    const normalizedPath = path.startsWith("/") ? path : `/${path}`;
    return `${API_BASE_URL}${normalizedPath}`;
};

export const buildFileUrl = (filePath) => {
    const normalizedPath = (filePath || "")
        .replace(/^\/+/, "")
        .replace(/\\/g, "/");

    return `${API_BASE_URL}/${normalizedPath}`;
};
