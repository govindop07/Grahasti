import { Link, useNavigate } from "react-router-dom";
import { showToast } from '../lib/showToast.js'
import axiosInstance from "../lib/axios.js";
import { useState } from "react";

function Register() {
  const [isLoading, SetIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    SetIsLoading(true);
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const res = await axiosInstance.post('/auth/register', {
        username,
        email,
        password
      });
      showToast('success', "Registration successful!");
      navigate('/login');
    } catch (error) {
      console.log(error.response?.data?.message)
      showToast('error', error.response?.data?.message || "An error occurred");
    } finally {
      SetIsLoading(false);
    }
  };

  return (
    <div className="register flex items-center justify-center min-h-[90vh] bg-gray-50">
      <div className="formContainer bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <form onSubmit={handleSubmit} className="space-y-5">
          <h1 className="text-2xl font-bold text-center text-gray-700">
            Create Your Account
          </h1>
          <input
            name="username"
            type="text"
            required
            placeholder="Username"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            name="password"
            type="password"
            required
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md font-semibold hover:bg-blue-600 transition duration-200 cursor-pointer"
          >
            Register
          </button>
          <Link
            to="/login"
            className="block text-center text-blue-500 hover:text-blue-700 text-sm"
          >
            Already have an account? Log in
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Register;
