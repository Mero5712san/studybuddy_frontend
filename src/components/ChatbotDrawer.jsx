import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CloseIcon } from "../assets/CloseIcon";

const quickActions = [
    { label: "Go to Home", value: "go to home" },
    { label: "Open Materials", value: "open materials" },
    { label: "Open Community", value: "open community" },
    { label: "Open Chat", value: "open chat" },
    { label: "Upload File", value: "upload file" },
    { label: "My Profile", value: "go to profile" },
];

export const ChatbotDrawer = ({ isOpen, onClose, onOpenUpload }) => {
    const navigate = useNavigate();
    const [input, setInput] = useState("");
    const [loadingReply, setLoadingReply] = useState(false);
    const messageEndRef = useRef(null);
    const [messages, setMessages] = useState([
        {
            id: 1,
            role: "assistant",
            text: "Hi, I am your StudyBuddy assistant. Ask me anything about this portal.",
        },
    ]);

    const canSend = useMemo(() => input.trim().length > 0, [input]);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
            }, 100);
        }
    }, [isOpen, messages]);

    const applyAction = (action) => {
        if (!action) return;

        if (action.type === "navigate" && action.path) {
            navigate(action.path);
            return;
        }

        if (action.type === "upload") {
            onOpenUpload?.();
        }
    };

    const getAssistantReply = async (userText) => {
        const token = localStorage.getItem("token");

        const response = await fetch("http://localhost:5000/api/assistant/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                ...(token ? { Authorization: `Bearer ${token}` } : {}),
            },
            body: JSON.stringify({ message: userText }),
        });

        if (!response.ok) {
            const body = await response.json().catch(() => ({}));
            throw new Error(body.error || "Assistant service unavailable");
        }

        return response.json();
    };

    const sendMessage = async (rawText) => {
        const userText = (rawText ?? input).trim();
        if (!userText) return;

        const userMessage = {
            id: Date.now(),
            role: "user",
            text: userText,
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput("");

        try {
            setLoadingReply(true);
            const result = await getAssistantReply(userText);
            const botMessage = {
                id: Date.now() + 1,
                role: "assistant",
                text: result.reply,
                recommendations: result.recommendations || [],
            };

            setMessages((prev) => [...prev, botMessage]);
            applyAction(result.action);
        } catch (err) {
            setMessages((prev) => [
                ...prev,
                {
                    id: Date.now() + 1,
                    role: "assistant",
                    text:
                        `I could not reach the assistant service right now. ${err.message || "Please try again."} You can still try commands like 'go to home' or ask topics like 'elective courses notes'.`,
                },
            ]);
        } finally {
            setLoadingReply(false);
        }
    };

    return (
        <>
            {isOpen && <div className="fixed inset-0 bg-black/30 z-30" onClick={onClose} />}

            <aside
                className={`fixed top-0 right-0 h-full w-full sm:w-[380px] bg-white shadow-2xl z-40 transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="h-16 px-4 border-b flex items-center justify-between bg-[#1e1e2f] text-white">
                    <h2 className="font-semibold">StudyBuddy Assistant</h2>
                    <button onClick={onClose} className="p-1 rounded hover:bg-white/10">
                        <CloseIcon size={16} color="white" />
                    </button>
                </div>

                <div className="h-[calc(100%-8rem)] overflow-y-auto p-4 space-y-3 bg-[#f8fafc]">
                    <div className="flex flex-wrap gap-2">
                        {quickActions.map((action) => (
                            <button
                                key={action.value}
                                onClick={() => sendMessage(action.value)}
                                className="text-xs px-2 py-1 rounded-full border bg-white hover:bg-blue-50"
                            >
                                {action.label}
                            </button>
                        ))}
                    </div>

                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`max-w-[85%] px-3 py-2 rounded-lg text-sm ${msg.role === "user"
                                ? "ml-auto bg-blue-700 text-white"
                                : "mr-auto bg-white border text-gray-800"
                                }`}
                        >
                            {msg.text}
                            {msg.role === "assistant" && msg.recommendations?.length > 0 && (
                                <div className="mt-2 space-y-2">
                                    {msg.recommendations.map((note) => (
                                        <button
                                            key={note.id}
                                            onClick={() => navigate(`/view-note/${note.id}`)}
                                            className="w-full text-left p-2 rounded border bg-blue-50 hover:bg-blue-100"
                                        >
                                            <p className="font-medium text-sm text-blue-900">{note.title}</p>
                                            <p className="text-xs text-gray-700">
                                                {note.subject || "General"} | Sem {note.semester || "N/A"}
                                            </p>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    {loadingReply && (
                        <div className="max-w-[85%] px-3 py-2 rounded-lg text-sm mr-auto bg-white border text-gray-800">
                            Thinking...
                        </div>
                    )}
                    <div ref={messageEndRef} />
                </div>

                <div className="h-16 border-t p-2 flex items-center gap-2">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                        placeholder="Ask anything: navigation, topics, or note recommendations"
                        className="flex-1 border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        onClick={sendMessage}
                        disabled={!canSend || loadingReply}
                        className="px-4 py-2 rounded-md bg-blue-700 text-white text-sm disabled:opacity-50"
                    >
                        {loadingReply ? "..." : "Send"}
                    </button>
                </div>
            </aside>
        </>
    );
};
