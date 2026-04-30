import React from "react";
import axios from "axios";
import { useState } from "react";
import { backendUrl } from "../App";

function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const adminLoginHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(backendUrl + "/api/v1/users/admin", {
        email,
        password,
      });
      console.log(response);
      if (response.data.token) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
      } else {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-md rounded-lg px-8 py-6 w-full max-w-md">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
            Login Admin
          </h1>
          <form onSubmit={adminLoginHandler}>
            <div className="mb-4 ">
              <p className="text-sm font-semibold text-gray-600 mb-2">
                Email Address
              </p>
              <input
                type="email"
                placeholder="enter admin email"
                name=""
                id=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-[95%] px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-gray-800"
                required
              />
            </div>
            <div className="mb-4">
              <p className="text-sm font-semibold text-gray-600 mb-2">
                Password
              </p>
              <input
                type="password"
                placeholder="enter password"
                name=""
                id=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-[95%] px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-gray-800"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-3 py-2 text-lg font-bold bg-blue-800 rounded-md text-white"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
