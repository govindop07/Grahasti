import React, { useState } from 'react';

const VerifyOTP = () => {
  const [otp, setOtp] = useState('');

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`OTP submitted: ${otp}`);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700">Verify OTP</h2>
        <p className="text-sm text-gray-500 text-center mt-2">Enter the OTP sent to your email</p>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
              OTP
            </label>
            <input
              type="number"
              id="otp"
              name="otp"
              value={otp}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter OTP"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 text-white cursor-pointer bg-blue-500 hover:bg-blue-600 rounded-md focus:border-blue-400"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyOTP;
