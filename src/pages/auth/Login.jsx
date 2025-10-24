import React, { useState } from "react";
import { Middlemodal } from "../../components/MiddleModel";
import { InputFeild } from "../../components/InputFeild";
import { ButtonComp } from "../../components/ButtonComp";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/Authservice";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please fill all fields!");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const data = await loginUser(email, password);
      console.log("Login Success:", data);

      // Save token if needed
      localStorage.setItem("token", data.token);

      navigate("/home");
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <Middlemodal isOpen>
        <div className="bg-white p-6 rounded-2xl shadow-lg w-[350px] mx-auto">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold">Welcome</h1>
          </div>

          <div className="space-y-4 mb-4">
            <InputFeild
              type="text"
              placeholder="example@gmail.com"
              name="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputFeild
              type="password"
              placeholder="********"
              name="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm mb-3 text-center">{error}</div>
          )}

          <div className="flex items-center justify-between text-sm mb-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" name="remember" />
              Remember me
            </label>
            <button
              className="text-blue-500 hover:underline"
              onClick={() => navigate("/forget-password")}
            >
              Forgot password
            </button>
          </div>

          <div>
            <ButtonComp
              btntext={loading ? "Logging in..." : "Log in"}
              btnstyle="w-full justify-center"
              onClick={handleLogin}
              disabled={loading}
            />
          </div>

          <div className="text-center mt-4 text-sm">
            Don’t have account?{" "}
            <span
              className="text-blue-500 cursor-pointer hover:underline"
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
