import React, { useState } from 'react';
import { BiUser } from 'react-icons/bi';
import { AiOutlineLock } from 'react-icons/ai';
import img1 from "../assets/logo.png";

function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Check if credentials match admin details
        if (
          username === 'admin' &&
          password === 'UniPl@nner!Admin' &&
          data.userType === 'admin'
        ) {
          alert(data.message); // Show login success message
          window.location.href = '/UserRegister'; // Redirect to UserRegister
        } else {
          // Show error if credentials are valid but userType is not admin
          setError('Unauthorized access. Admin only.');
        }
      } else {
        setError(data.message); // Show error message from server
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="w-full max-w-[500px]">
        <div className="text-center mb-3">
          <img src={img1} alt="logo of project" className="mx-auto h-[210px]" />
        </div>
        <div className="w-full max-w-[500px] border-4 border-gray-700 rounded-3xl relative">
          <span className="absolute -top-6 right-[375px] bg-white px-2 text-black font-semibold text-[30px]">Login</span>
          <form className="px-8 pt-14 pb-8" onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 text-lg font-bold mb-2 pl-2" htmlFor="username">
                User Name
              </label>
              <input
                className="w-full py-2 pl-4 pr-2 text-gray-700 border-2 border-gray-600 rounded-xl"
                id="username"
                type="text"
                placeholder="User Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <BiUser className="absolute top-[103px] right-[45px] size-[22px]" />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-lg font-bold mb-2 pl-2" htmlFor="password">
                Password
              </label>
              <input
                className="w-full py-2 pl-4 pr-2 text-gray-700 border-2 border-gray-600 rounded-xl"
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <AiOutlineLock className="absolute top-[198px] right-[45px] size-[22px]" />
            </div>

            {error && <div className="text-red-500 mb-4">{error}</div>}

            <div className="flex items-center justify-end">
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-14 rounded-3xl focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Log In
              </button>
            </div>
          </form>
        </div>

        <div className="text-center text-gray-500 text-xs p-4">
          <p>Terms and Conditions | Privacy policy</p>
          <p>&copy; Copyright 2024 – Uni Planner</p>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
