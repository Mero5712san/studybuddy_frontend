import React from 'react';

export const InputComp = (props) => {
  const { type, placeholder, value, setValue, endicon } = props;
  const onInputChange = (e) => {
    setValue(e.target.value);
  }
  return (
    <div className='w-full  border-[2px] border-[#bfbfbf] rounded-md p-2 flex'>
      <input
        type={type || "text"}
        placeholder={placeholder || "Placeholder"}
        value={value}
        onChange={(e) => onInputChange(e)}
        className='outline-none w-full text-gray-900 fontsemibold'
      />
      {endicon && <div>{endicon}</div>}
    </div>
  );
}

