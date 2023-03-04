import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUsers } from "../../apis/Auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    const loginData = {
      email,
      password,
    };
    const loginUserData = await loginUsers(loginData);
    localStorage.setItem("token", loginUserData.data.token);
    localStorage.setItem("firstName", loginUserData.data.user.firstName);
    localStorage.setItem("lastName", loginUserData.data.user.lastName);
    navigate("/home");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
      <div className="px-8 py-6 mx-4 mt-4 text-left rounded-lg bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
        <form action="" onSubmit={login}>
          <div className="mt-4">
            <div className="mt-4">
              <label className="block" for="email">
                Email
              </label>
              <input
                type="text"
                placeholder="Email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <label className="block">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-end">
              <Link
                className="text-blue-600 hover:underline hover:text-indigo-500"
                to="/fpassword"
              >
                Forget Password?
              </Link>
            </div>
            <div className="flex">
              <button className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                Login
              </button>
            </div>

            <div className="mt-6 text-grey-dark">
              Do not have an account?
              <Link
                className="text-blue-600 hover:underline hover:text-indigo-500"
                to="/"
              >
                Signup
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
