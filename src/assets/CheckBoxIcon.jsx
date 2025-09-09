import * as React from "react";

export const CheckBoxIcon = (props) => {
    const { size, color, checked } = props;
    return (

        !checked ? < svg
            xmlns="http://www.w3.org/2000/svg"
            width={size || "24"}
            height={size || "24"}
            fill="none"
            viewBox="0 0 24 24"
        >
            < path
                fill="#717171"
                fillOpacity="0.25"
                d="M7 5c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zm0 12V7h10l.002 10z"
            ></path >
        </svg >
            :
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={size || "24"}
                height={size || "24"}
                fill="none"
                viewBox="0 0 24 24"
            >
                <path
                    fill={color || "#0C3BF7"}
                    d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m1 2v14h14V5zm6.003 11L6.76 11.757l1.414-1.414 2.829 2.829 5.657-5.657 1.414 1.414z"
                ></path>
            </svg>


    )
}