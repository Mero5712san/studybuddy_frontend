import React from 'react';

export const InputFeild = (props) => {
    const {
        type,
        placeholder,
        value,
        onChange,
        name,
        label
    } = props;
    return (
        <div className='w-full flex flex-col gap-2' >
            {label && <div className='font-semibold capitalize'>
                {label}
            </div>}
            <div className='w-full border-2 border-[#717171] rounded-md p-2'>
                <input className='w-full outline-none text-[#5a5a5a]'
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    name={name}
                />
            </div>
        </div>
    );
}
