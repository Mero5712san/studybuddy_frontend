import React from 'react';

const ButtonComp = (props) => {
    const { text } = props
    return (
        <div>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm'
                onClick={() => alert("Hi Buddy")}
            >
                {text}
            </button>
        </div>
    );
}

export default ButtonComp;
