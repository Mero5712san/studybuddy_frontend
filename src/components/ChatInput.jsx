import { SendIcon } from "../assets/SendIcon";

export const ChatInput = (props) => {
  const { value, setValue, onSubmit, placeholder, noSendIcon } = props;

  const onValueChange = (e) => {
    setValue(e.target.value);
  };

  const onButtonClick = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue("");
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" && value.trim()) {
      onSubmit(value);
      setValue("");
    }
  };
  return (
    <div className="flex items-center bg-gray-300 p-2 rounded-md w-full">
      {/* Input box */}
      <input
        type="text"
        value={value}
        placeholder={placeholder || "Ask something in community"}
        onChange={onValueChange}
        onKeyDown={onKeyDown}
        className="flex-1 px-4 py-2 rounded-full outline-none border border-gray-200"
      />

      {/* Send button */}
      {!noSendIcon && (
        <button
          className="ml-2 bg-[#041455] p-2 rounded-full text-white hover:bg-[#041455] transition"
          onClick={onButtonClick}
        >
          <SendIcon color="white" />
        </button>
      )}
    </div>
  );
};
