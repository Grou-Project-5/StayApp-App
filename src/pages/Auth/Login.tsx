import React from "react";

import imgAuth from "assets/img-auth.webp";
import imgLogo from "assets/Logo.webp";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";

import Input from "components/Input";
import Button from "components/Button";

import withReactContent from "sweetalert2-react-content";
import Swal from "utils/Swal";
import { useCookies } from "react-cookie";
import { handleAuth } from "utils/redux/reducer";

const background = {
  backgroundImage: `url(${imgAuth})`,
  width: "100%",
  height: "auto",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const Login = () => {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [, setCookie] = useCookies(["token"]);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (email && password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, password]);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const body = {
      email,
      password,
    };

    axios
      .post("http://54.255.147.31/login", body)
      .then((res) => {
        const { data, message } = res.data;

        setCookie("token", res.data.token, { path: "/" });

        dispatch(handleAuth(true));

        MySwal.fire({
          title: "Success Login",
          text: message,
          showCancelButton: false,
        });

        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <div className="w-full min-h-screen overflow-auto bg-white">
        <div className="w-full  min-h-screen flex flex-row">
          <div className="flex-1">
            <div className="flex flex-col">
              <div className=" text-center lg:hidden flex flex-col justify-center items-center mt-10">
                <img src={imgLogo} className="w-2/12 h-auto " />
              </div>
              <h1 className=" text-2xl lg:text-4xl font-bold text-center text-text-input mt-8 lg:mt-20 font-poppins ">
                Welcome Back
              </h1>
              <p className="text-md lg:text-xl w-9/12 lg:w-6/12 mx-auto font-semibold text-text-input text-center mt-5 font-poppins">
                Good View, Best Price, and Easy To Book
              </p>
              <form>
                <div className="form-control w-full mx-auto">
                  <label className="label mt-3">
                    <span className="label-text text-text-input font-semibold text-lg font-poppins mx-auto w-10/12 lg:w-6/12">
                      Email
                    </span>
                  </label>
                  <Input
                    id="input-username"
                    type="email"
                    placeholder="marlina1998"
                    className="input input-bordered w-10/12 lg:w-6/12 bg-bg-input border-slate-300  mx-auto text-black font-semibold font-poppins"
                    onChange={(e: any) => setEmail(e.target.value)}
                  />
                  <label className="label mt-5">
                    <span className="label-text text-text-input font-semibold text-lg font-poppins  mx-auto w-10/12 lg:w-6/12">
                      Password
                    </span>
                  </label>
                  <Input
                    id="input-password"
                    type="password"
                    placeholder="********"
                    className="input input-bordered  bg-bg-input border-slate-300  mx-auto w-10/12 lg:w-6/12 text-black font-semibold font-poppins"
                    onChange={(e: any) => setPassword(e.target.value)}
                  />
                </div>
                <div className="text-center w-full  mt-10">
                  <Button
                    id="btn-login"
                    label="Login"
                    className="bg-bg-button w-10/12 lg:w-6/12 rounded-lg py-2 text-white font-poppins font-semibold disabled:bg-slate-400 disabled:cursor-not-allowed hover:cursor-pointer"
                    loading={loading || disabled}
                    onClick={handleLogin}
                  />
                </div>
              </form>
              <p className="text-center text-text-input font-semibold mt-5 font-poppins">
                Don't Have an Account?{" "}
                <span className="font-bold font-poppins">
                  <Link to="/register">Register</Link>
                </span>
              </p>
            </div>
            <h2 className="font-semibold text-slate-400 font-poppins text-md lg:text-lg text-center h-[15%] pb-10 mt-5 lg:mt-0 lg:p-0 flex justify-center items-end">
              Copyright @2023 StayApp
            </h2>
          </div>
          <div
            className="lg:flex flex-col hidden flex-1 justify-center items-center text-6xl font-bold text-white"
            style={background}
          >
            <img src={imgLogo} className="w-2/12 h-auto" />
            StayApp
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
