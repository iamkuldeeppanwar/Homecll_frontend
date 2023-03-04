import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../apis/Auth";

function Home() {
  const [openSideNav, setOpenSideNav] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("token");
    if (!auth) {
      navigate("/login");
    }
  }, []);

  const logout = async () => {
    await logoutUser(localStorage.getItem("token"));
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    navigate("/login");
  };

  return (
    <>
      <button
        onClick={() => setOpenSideNav(!openSideNav)}
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      {openSideNav && (
        <div className="sidebar fixed top-0 bottom-0 lg:left-0 w-64 p-2 overflow-y-auto text-center bg-gray-900">
          <div className="text-gray-100 text-xl">
            <div className="p-2.5 mt-1 flex justify-between items-center">
              <div className="flex">
                <i className="bi bi-app-indicator px-2 rounded-md bg-blue-600"></i>
                <h1 className="font-bold text-gray-200 text-[15px] ml-3">
                  Home CLL
                </h1>
              </div>
              <i
                className="bi bi-x cursor-pointer lg:hidden"
                onClick={() => setOpenSideNav(!openSideNav)}
              >
                X
              </i>
            </div>
            <div className="my-2 bg-gray-600 h-[1px]"></div>
          </div>
          <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white">
            <i className="bi bi-search text-sm"></i>
            <input
              type="text"
              placeholder="Search"
              className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
            />
          </div>
          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-700 text-white">
            <i className="bi bi-house-door-fill"></i>
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              NATIONAL INSIGHTS
            </span>
          </div>
          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-700 text-white">
            <i className="bi bi-bookmark-fill"></i>
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              LOCAL INSIGHTS
            </span>
          </div>
          <div className="my-4 bg-gray-600 h-[1px]"></div>
        </div>
      )}

      <div className={`${openSideNav ? " sm:ml-64" : ""}`}>
        <div className="flex justify-between px-5">
          <div className="p-2.5 flex items-center rounded-md px-10 duration-300 cursor-pointer bg-gray-700 text-white">
            <i className="bi bi-search text-sm"></i>
            <input
              type="text"
              placeholder="Search"
              className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-3">
            <p className="capitalize">
              {localStorage.getItem("firstName")}{" "}
              {localStorage.getItem("lastName")}
            </p>
            <button
              onClick={logout}
              className="bg-gray-700 text-white px-1 py-1 rounded-lg"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="p-4 rounded-lg ">
          <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
              Welcome to Dashboard
            </p>
          </div>
          <h3 className="text-center">Experience</h3>
          <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
              Blitzbud Technologies (February 2022-May 2022) Added access
              control to frontend on the basis of loggedin user permissions, the
              dashboard is shown according to user permissions. I have used
              several libraries for creating components in the front end. Used
              several web packages like Datepicker, full calendar,
              react-toastify, multi-select, etc. for adding functionalities to
              components. Added several departments like Addstaff, Add class,
              Canteen, Attendance, Transportation, and Staff profile. Calendar,
              School profile, etc.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
