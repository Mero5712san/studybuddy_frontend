import * as React from "react";
export const SendIcon = (props) => {
    const { size, color } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size || "21"}
            height={size || "21"}
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                stroke={color || "#000"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m10.3 13.695 9.802-9.798M10.58 14.136l2.222 4.444c.537 1.075.806 1.612 1.144 1.756a1 1 0 0 0 .903-.061c.316-.188.51-.757.898-1.893l4.2-12.298c.338-.99.506-1.485.39-1.813a1 1 0 0 0-.609-.61c-.328-.115-.823.054-1.813.392l-12.297 4.2c-1.137.387-1.705.581-1.893.897a1 1 0 0 0-.061.904c.144.338.681.607 1.755 1.143l4.445 2.223c.177.088.265.133.342.192a1 1 0 0 1 .182.181c.059.077.103.166.191.343"
            ></path>
        </svg>)
};