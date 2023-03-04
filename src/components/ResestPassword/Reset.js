import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { resetUserPassword } from "../../apis/Auth";

function Reset() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [resetPasswrod, setResetPassword] = useState("");
  const navigate = useNavigate();

  const passworderFroget = async (e) => {
    e.preventDefault();
    const resetData = {
      firstName,
      lastName,
      email,
      password: resetPasswrod,
    };
    await resetUserPassword(resetData);
    window.alert("Password Reset Successfully");
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mx-4 mt-4 text-left rounded-lg bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
        <form action="" onSubmit={passworderFroget}>
          <div className="mt-4">
            <h3 className="text-center text-xl">Reset Password</h3>
            <div className="mt-4">
              <label className="block" for="email">
                First Name
              </label>
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <label className="block" for="email">
                Last Name
              </label>
              <input
                type="text"
                placeholder="  Last Name"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                required
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <label className="block" for="email">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <label className="block">New Password</label>
              <input
                type="password"
                placeholder="New Password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                onChange={(e) => setResetPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex">
              <button className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                Reset
              </button>
            </div>
            <div className="mt-6 text-grey-dark">
              Return to?
              <Link
                className="text-blue-600 hover:underline hover:text-indigo-500"
                to="/login"
              >
                Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Reset;
