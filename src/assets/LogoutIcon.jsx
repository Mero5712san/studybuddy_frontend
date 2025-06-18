import React from 'react';

export const LogoutIcon = (props) => {
    const { size, color } = props
    return (
        <svg
            fill={color || "#000000"}
            height={size || "800px"}
            width={size || "800px"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 26"
        >
            <g id="logout">
                <g>
                    <path d="M15,24H0V2h15v8h-2V4H2v18h11v-6h2V24z M18.4,18.7L17,17.3l3.3-3.3H5v-2h15.3L17,8.7l1.4-1.4L24,13L18.4,18.7z"></path>
                </g>
            </g>
        </svg>
    );
}