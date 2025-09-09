import React from 'react';

export const ButtonComp = (props) => {
    const { btntext, endicon, btnstyle, onClick } = props;
    return (
        <div className={`flex gap-4 items-center cursor-pointer p-2 w-fit px-6 rounded-md text-white font-semibold bg-blue-900 ${btnstyle}`}
            onClick={onClick}
        >
            <div className='capitalize'>
                {btntext || "button"}
            </div>
            {
                endicon && <div>
                    {endicon}
                </div>
            }
        </div>
    );
}

