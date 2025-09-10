import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Middlemodal } from '../../components/MiddleModel';
import { InputFeild } from '../../components/InputFeild';
import { ButtonComp } from '../../components/ButtonComp';
const ResetPassword = () => {
  const navigate = useNavigate();
  return (
    <div className='min-h-screen flex items-center justify-center bg-[#bfbfbf]'>
      <Middlemodal isOpen>
        <div className='flex flex-col gap-8 items-center p-4 w-[350px] shadow-xl'>
          <div className='text-xl font-bold'>
            Reset Password
          </div>
          <div className='w-full'>
            {/* Back button */}
            <div className="flex items-center text-sm text-gray-600 cursor-pointer mb-2">
              <span className="mr-1"
                onClick={() => navigate(-1)}>← Back</span>
            </div>
            <div className='flex flex-col gap-4'>
              <InputFeild
                type="password"
                placeholder="********"
                name="password"
                label="Password"
              />
              <InputFeild
                type="password"
                placeholder="********"
                name="password"
                label="Confirm Password"
              />
            </div>

          </div>
          <div className='w-full'>
            <ButtonComp btntext="Submit" btnstyle="justify-center w-full"
              onClick={() => navigate("/login")} />
          </div>
        </div>
      </Middlemodal>
    </div>
  );
}

export default ResetPassword;
