import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupUsers } from "../../apis/Auth";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signupUser = async (e) => {
    e.preventDefault();

    firstName.toLowerCase();
    lastName.toLowerCase();

    const userData = {
      firstName,
      lastName,
      email,
      password,
    };
    const signupdata = await signupUsers(userData);
    localStorage.setItem("token", signupdata.data.token);
    localStorage.setItem("firstName", signupdata.data.user.firstName);
    localStorage.setItem("lastName", signupdata.data.user.lastName);
    navigate("/home");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mx-4 mt-4 text-left rounded-lg bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
        <h3 className="text-3xl text-center">Sign Up</h3>
        <form action="" onSubmit={signupUser}>
          <div className="mt-4">
            <div>
              <label className="block" for="Name">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <label className="mt-4" for="Name">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                required
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div>
              <label className="block" for="email">
                Email
              </label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex">
              <button className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                Create Account
              </button>
            </div>
            <div className="mt-6 text-grey-dark">
              Already have an account?{" "}
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

export default Signup;
