import React from 'react';

export const InputComp = (props) => {
  const { type, placeholder, value, endicon, onChange, name } = props;

  return (
    <div className="w-full border-[2px] border-[#bfbfbf] rounded-md p-2 flex items-center">
      <input
        type={type || "text"}
        name={name} 
        placeholder={placeholder || "Placeholder"}
        value={value}
        onChange={onChange}
        className="outline-none w-full text-gray-900 font-semibold"
      />
      {endicon && <div className="ml-2">{endicon}</div>}
    </div>
  );
};
