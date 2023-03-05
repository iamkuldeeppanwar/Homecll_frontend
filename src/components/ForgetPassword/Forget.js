import React, { useState } from "react";
import { forgetPassword } from "../../apis/Auth";

function Forget() {
  const [email, setEmail] = useState("");

  const forget = async (e) => {
    e.preventDefault();
    await forgetPassword({ email });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mx-4 mt-4 text-left bg-white rounded-lg shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
        <h3 className="text-3xl text-center mb-4">Forget Password</h3>
        <h3 className=" text-center">
          {" "}
          We will sent link on your Email please check
        </h3>
        <form onSubmit={forget}>
          <div className="mt-4">
            <div className="mt-4">
              <label>Email</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex">
              <button className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Forget;
