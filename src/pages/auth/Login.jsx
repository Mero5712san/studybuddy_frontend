import React from 'react';
import { Middlemodal } from '../../components/MiddleModel';
import { InputFeild } from '../../components/InputFeild';
import { ButtonComp } from '../../components/ButtonComp';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <Middlemodal isOpen>
        <div className="bg-white p-6 rounded-2xl shadow-lg w-[350px] mx-auto">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold">Welcome</h1>
          </div>

          {/* Input Fields */}
          <div className="space-y-4 mb-4">
            <InputFeild
              type="text"
              placeholder="example@gmail.com"
              name="email"
              label="Email"
            />
            <InputFeild
              type="password"
              placeholder="********"
              name="password"
              label="Password"
            />
          </div>

          {/* Remember + Forgot Password */}
          <div className="flex items-center justify-between text-sm mb-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" name="remember" />
              Remember me
            </label>
            <button className="text-blue-500 hover:underline"
              onClick={() => navigate("/forget-password")}
            >
              Forgot password
            </button>
          </div>

          {/* Submit button */}
          <div>
            <ButtonComp btntext="Log in" btnstyle="w-full justify-center" onClick={() => navigate("/home")} />
          </div>

          {/* Footer */}
          <div className="text-center mt-4 text-sm">
            Don’t have account ?{" "}
            <span className="text-blue-500 cursor-pointer hover:underline"
              onClick={() => navigate("/register")}
            >
              Register
            </span>
          </div>
        </div>
      </Middlemodal>
    </div>
  );
};