import React from 'react';
import { Middlemodal } from '../../components/MiddleModel';
import { InputFeild } from '../../components/InputFeild';
import { ButtonComp } from '../../components/ButtonComp';
import { InputComp } from '../../components/InputComp';
import { useNavigate } from 'react-router-dom';
import { OTPModel } from '../../components/OTPModel';

export const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-400 min-h-screen flex items-center justify-center">
      <Middlemodal isOpen>
        <div className="bg-white p-6 rounded-2xl shadow-lg w-[350px] mx-auto">
          {/* Header */}
          <div className="text-center mb-2">
            <h1 className="text-2xl font-bold">Welcome</h1>
          </div>

          {/* Input Fields */}
          <div className="space-y-4 mb-4">
            <InputFeild
              type="text"
              placeholder="example"
              name="name"
              label="Name"
            />
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className='font-semibold text-[14px]' >Email</label>
              <InputComp
                placeholder="example@gmail.com"
                name="email"
                endicon={
                  <div className="flex items-center justify-center text-blue-500 cursor-pointer text-sm" onClick={() => navigate("/verify-email")}>
                    verify
                  </div>
                }
              />
            </div>

            {/* Password + Confirm side by side */}
            <div className="grid grid-cols-2 gap-3">
              <InputFeild
                type="password"
                placeholder="********"
                name="password"
                label="Password"
              />
              <InputFeild
                type="password"
                placeholder="********"
                name="confirmPassword"
                label="Confirm"
              />
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-center mb-4 text-sm">
            <input type="checkbox" id="terms" className="mr-2" />
            <label htmlFor="terms" className="cursor-pointer">
              <span className="text-blue-500 hover:underline"
                onClick={() => navigate("/terms")}
              >Terms and Conditions</span>
            </label>
          </div>

          {/* Register button */}
          <div>
            <ButtonComp btntext="Register" btnstyle="w-full justify-center" onClick={() => navigate("/login")} />
          </div>

          {/* Footer */}
          <div className="text-center mt-4 text-sm">
            Already have an account ?{" "}
            <span className="text-blue-500 cursor-pointer hover:underline"
              onClick={() => navigate("/login")}
            >
              Log in
            </span>
          </div>
        </div>
      </Middlemodal>
    </div>
  );
};
