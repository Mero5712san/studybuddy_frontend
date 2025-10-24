import React from 'react';

export const SortIcon = (props) => {
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
                stroke={color || "#000000"}
                strokeLinecap="round"
                strokeWidth="1.5"
                d="M22 7H2M19 12H5M16 17H8"
            ></path>
        </svg>
    );
}