import React, { useState, useEffect, useCallback } from "react";

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
  const [loading, setLoading] = useState<boolean>(false);

  const [profile, setProfile] = useState<getProfile>({});

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

  const fetchDataProfile = () => {
    setLoading(true);
    axios
      .get("https://group5.altapro.online/users", {
        headers: {
          Authorization: `Bearer ${checkToken}`,
        },
      })
      .then((res) => {
        const { data } = res.data;
        setProfile(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchDataProfile();
  }, []);

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
                <Link to="/" className="text-lg">
                  Home
                </Link>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl text-black hidden lg:flex"
          >
            <img src={imgLogo} width="45" />
          </Link>
        </div>

        <div className="navbar-end">
          {checkToken ? (
            <>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={profile.pictures} />
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
                          navigate(`/profile/${profile.name}`);
                        }}
                      >
                        Profile
                        <span className="badge">New</span>
                      </a>
                    </li>
                  </>

                  <li>
                    <Link to="/history">Histori</Link>
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
