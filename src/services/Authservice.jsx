import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { email, password });
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || "Login failed. Please try again.";
    }
};



export const sendOtp = async (email) => {
    try {
        const res = await axios.post(`${API_URL}/send-otp`, { email });
        return res.data;
    } catch (error) {
        throw error.response?.data || { error: "Failed to send OTP" };
    }
};

export const verifyOtp = async (email, otp) => {
    try {
        const res = await axios.post(`${API_URL}/verify-otp`, { email, otp });
        return res.data;
    } catch (error) {
        throw error.response?.data || { error: "Invalid OTP" };
    }
};

export const registerUser = async (userData) => {
    try {
        const res = await axios.post(`${API_URL}/register`, userData);
        return res.data;
    } catch (error) {
        throw error.response?.data || { error: "Registration failed" };
    }
};