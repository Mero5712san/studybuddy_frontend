
export const PlusIcon = (props) => {
    const { size, color } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size || "24"}
            height={size || "24"}
            viewBox="0 0 32 32"
        >
            <g id="Page-1" fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                <g id="Icon-Set-Filled" fill={color || "#FFFFFF"} transform="translate(-362 -1037)">
                    <path
                        id="plus"
                        d="M390 1049h-8v-8a4 4 0 1 0-8 0v8h-8a4 4 0 1 0 0 8h8v8a4 4 0 1 0 8 0v-8h8a4 4 0 1 0 0-8"
                    ></path>
                </g>
            </g>
        </svg>
    )
}
