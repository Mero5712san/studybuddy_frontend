import * as React from "react";

export const RadioButtonIcon = (props) => {
    const { size, color, checked } = props;
    return (
        !checked ? <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size || "30"}
            height={size || "30"}
            fill="none"
            viewBox="0 0 30 30"
        >
            <path
                fill="#000"
                d="M15 5.625a9.375 9.375 0 1 0 0 18.75 9.375 9.375 0 0 0 0-18.75M3.75 15a11.25 11.25 0 1 1 22.5 0 11.25 11.25 0 0 1-22.5 0"
            ></path>
        </svg> :
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={size || "30"}
                height={size || "30"}
                fill="none"
                viewBox="0 0 30 30"
            >
                <path
                    fill={color || "#1B81FE"}
                    d="M15 20.625a5.625 5.625 0 1 0 0-11.25 5.625 5.625 0 0 0 0 11.25M15 3.75a11.25 11.25 0 1 0 0 22.5 11.25 11.25 0 0 0 0-22.5M5.625 15a9.375 9.375 0 1 1 18.75 0 9.375 9.375 0 0 1-18.75 0"
                ></path>
            </svg>
    );
}
