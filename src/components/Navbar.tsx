import React, { useState, useEffect } from "react";

import imgLogo from "assets/Logo.webp";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import withReactContent from "sweetalert2-react-content";
import Swal from "utils/Swal";
import useCookies from "react-cookie/cjs/useCookies";
import { handleAuth } from "utils/redux/reducer";
import Button from "./Button";
import axios from "axios";
import { getProfile } from "utils/Datatypes";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const MySwal = withReactContent(Swal);

  const [profile, setProfile] = useState<getProfile[]>([]);

  const [cookie, , removeCookie] = useCookies(["token"]);
  const checkToken = cookie.token;

  const handleLogout = async () => {
    removeCookie("token");
    localStorage.removeItem("dataProfile");
    localStorage.clear();

    dispatch(handleAuth(false));
    navigate("/");
    MySwal.fire({
      title: "Log Out Account",
      text: "You have been Logged out",
      showCancelButton: false,
    });
  };

  return (
    <>
      <div className="navbar bg-white border-2 border-stroke-nav h-[7rem] p-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost bg-bg-button hover:bg-red-600 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-5 shadow bg-base-100 rounded-box w-64"
            >
              <li>
                <a className="text-lg">Home</a>
              </li>
              <ul className="flex flex-row">
                <li className="ml-4">Light / Dark Mode</li>
                <input type="checkbox" className="toggle ml-5" />
              </ul>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl text-black hidden lg:flex">
            <img src={imgLogo} width="45" />
          </a>
        </div>
        <div className="navbar-center ">
          {/* The button to open modal */}
          <label
            htmlFor="my-modal-5"
            className="text-black font-bold text-lg lg:text-2xl"
          >
            How To Book
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my-modal-5" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
              <h3 className="font-bold text-lg">
                Congratulations random Internet user!
              </h3>
              <p className="py-4">
                You've been selected for a chance to get one year of
                subscription to use Wikipedia for free!
              </p>
              <div className="modal-action">
                <label htmlFor="my-modal-5" className="btn">
                  Yay!
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-end">
          <input type="checkbox" className="toggle mr-5 lg:flex hidden" />
          {checkToken ? (
            <>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                >
                  <>
                    <li>
                      <a
                        className="justify-between"
                        onClick={() => {
                          navigate("/profile");
                          window.location.reload();
                        }}
                      >
                        Profile
                        <span className="badge">New</span>
                      </a>
                    </li>
                  </>

                  <li>
                    <a>Histori</a>
                  </li>
                  <li>
                    <a
                      onClick={() =>
                        checkToken ? handleLogout() : navigate("/")
                      }
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <div className="flex flex-row">
              <Button
                id="btn-login"
                label="Login"
                className="btn"
                onClick={() => navigate("/login")}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
