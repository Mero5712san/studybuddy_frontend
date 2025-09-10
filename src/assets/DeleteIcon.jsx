export const DeleteIcon = (props) => {
    const { size, color } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size || "12"}
            height={size || "12"}
            fill="none"
            viewBox="0 0 50 50"
        >
            <path
                fill={color || "#fff"}
                d="M14.584 43.75q-1.72 0-2.942-1.223-1.223-1.222-1.225-2.944V12.5H8.334V8.333H18.75V6.25h12.5v2.083h10.417V12.5h-2.084v27.083q0 1.719-1.222 2.944-1.224 1.225-2.944 1.223zM35.417 12.5H14.584v27.083h20.833zM18.75 35.417h4.167v-18.75H18.75zm8.334 0h4.166v-18.75h-4.166z"
            ></path>
        </svg>
    )
}
