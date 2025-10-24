import * as React from "react";

export const MicIcon = (props) => {
    const { size, color } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size || "24"}
            height={size || "24"}
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                stroke={color || "#000"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M14.75 7.333v3.889a2.293 2.293 0 0 1-2.25 2.334 2.293 2.293 0 0 1-2.25-2.334V7.333A2.293 2.293 0 0 1 12.5 5a2.293 2.293 0 0 1 2.25 2.333"
                clipRule="evenodd"
            ></path>
            <path
                fill={color || "#000"}
                d="M8.462 13.853a.75.75 0 0 0-.924 1.182zm9 1.182a.75.75 0 0 0-.924-1.182zM13.25 16a.75.75 0 0 0-1.5 0zm-1.5 3a.75.75 0 0 0 1.5 0zm-4.212-3.965a8.05 8.05 0 0 0 9.924 0l-.924-1.182a6.55 6.55 0 0 1-8.076 0zM11.75 16v3h1.5v-3z"
            ></path>
        </svg>
    );
};