import React from 'react';
import { Middlemodal } from '../../components/MiddleModel';
import { InputFeild } from '../../components/InputFeild';
import { ButtonComp } from '../../components/ButtonComp';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
  const navigate = useNavigate();
  return (
    <div className='min-h-screen flex items-center justify-center bg-[#bfbfbf]'>
      <Middlemodal isOpen>
        <div className='flex flex-col gap-4 items-center p-4 w-[300px] shadow-xl'>
          <div className='text-xl font-bold'>
            Forget Password
          </div>
          <div className='w-full'>
            {/* Back button */}
            <div className="flex items-center text-sm text-gray-600 cursor-pointer mb-2">
              <span className="mr-1"
                onClick={() => navigate(-1)}>← Back</span>
            </div>
            <InputFeild
              type="email"
              placeholder="example@gmail.com"
              name="email"
              label="Email"
            />
          </div>
          <div className='w-full'>
            <ButtonComp btntext="Submit" btnstyle="justify-center w-full"
              onClick={() => navigate("/verify-password-reset")} />
          </div>
        </div>
      </Middlemodal>
    </div>
  );
}

export default ForgetPassword;
