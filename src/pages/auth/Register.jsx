import React, { useState } from "react";
import { Middlemodal } from "../../components/MiddleModel";
import { InputFeild } from "../../components/InputFeild";
import { ButtonComp } from "../../components/ButtonComp";
import { InputComp } from "../../components/InputComp";
import { useNavigate } from "react-router-dom";
import { OTPModel } from "../../components/OTPModel";
import { registerUser, sendOtp, verifyOtp } from "../../services/Authservice";

export const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [otpModalOpen, setOtpModalOpen] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [otpDigits, setOtpDigits] = useState(["", "", "", "", "", ""]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //  Send OTP
  const handleSendOtp = async () => {
    if (!formData.email) {
      setError("Enter your email before verifying");
      return;
    }
    try {
      setError("");
      await sendOtp(formData.email);
      setOtpModalOpen(true);
    } catch (err) {
      setError(err.error || "Failed to send OTP");
    }
  };

  //   Verify OTP
  const handleOtpSubmit = async () => {
    const otp = otpDigits.join("");
    try {
      const res = await verifyOtp(formData.email, otp);
      console.log(res.message);
      setIsEmailVerified(true);
      setOtpModalOpen(false);
      alert("Email verified successfully  ");
    } catch (err) {
      setError(err.error || "Invalid OTP");
    }
  };

  // 🧠 Update OTP digit state from OTPModel
  const handleOtpChange = (index, value) => {
    const newOtp = [...otpDigits];
    newOtp[index] = value;
    setOtpDigits(newOtp);
  };

  // 👤 Register function
  const handleRegister = async () => {
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (!isEmailVerified) {
      setError("Please verify your email first");
      return;
    }

    try {
      setLoading(true);
      setError("");
      await registerUser({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      navigate("/login");
    } catch (err) {
      setError(err.error || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-400 min-h-screen flex items-center justify-center">
      <Middlemodal isOpen>
        <div className="bg-white p-6 rounded-2xl shadow-lg w-[350px] mx-auto">
          <div className="text-center mb-2">
            <h1 className="text-2xl font-bold">Welcome</h1>
          </div>

          <div className="space-y-4 mb-4">
            <InputFeild
              type="text"
              placeholder="example"
              name="name"
              label="Name"
              value={formData.name}
              onChange={handleChange}
            />

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-semibold text-[14px]">
                Email
              </label>
              <InputComp
                placeholder="example@gmail.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
                endicon={
                  <div
                    className={`flex items-center justify-center cursor-pointer text-sm ${isEmailVerified ? "text-green-600" : "text-blue-500"
                      }`}
                    onClick={handleSendOtp}
                  >
                    {isEmailVerified ? "Verified" : "Verify"}
                  </div>
                }
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <InputFeild
                type="password"
                placeholder="********"
                name="password"
                label="Password"
                value={formData.password}
                onChange={handleChange}
              />
              <InputFeild
                type="password"
                placeholder="********"
                name="confirmPassword"
                label="Confirm"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center mb-2">{error}</p>
          )}

          <div>
            <ButtonComp
              btntext={loading ? "Registering..." : "Register"}
              btnstyle="w-full justify-center"
              onClick={handleRegister}
              disabled={loading}
            />
          </div>

          <div className="text-center mt-4 text-sm">
            Already have an account?{" "}
            <span
              className="text-blue-500 cursor-pointer hover:underline"
              onClick={() => navigate("/login")}
            >
              Log in
            </span>
          </div>
        </div>
      </Middlemodal>

      {/*   OTP Modal Integration */}
      {otpModalOpen && (
        <OTPModel
          isOpen={otpModalOpen}
          onClose={handleOtpSubmit}
          onOtpChange={handleOtpChange}
        />
      )}
    </div>
  );
};
