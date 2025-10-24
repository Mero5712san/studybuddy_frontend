import React from "react";
import { SendIcon } from "../assets/SendIcon";
/**
 * Props:
 *  - value: string
 *  - setValue: fn
 *  - onSubmit: fn(text)
 *  - placeholder: string
 */
export const ChatInput = ({ value, setValue, onSubmit, placeholder = "Type a message..." }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSubmit(value);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <textarea
        rows={1}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="flex-1 resize-none rounded-md p-2 focus:outline-none"
      />
      <button
        onClick={() => onSubmit(value)}
        className="px-4 py-2 bg-purple-600 text-white rounded-md"
      >
        <SendIcon color="white" />
      </button>
    </div>
  );
};

export default ChatInput;
