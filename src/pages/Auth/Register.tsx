import React from "react";

import imgAuth from "assets/img-auth.webp";
import imgLogo from "assets/Logo.webp";

import Input from "components/Input";
import Button from "components/Button";

import { Link } from "react-router-dom";

const background = {
  backgroundImage: `url(${imgAuth})`,
  width: "100%",
  height: "auto",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const Register = () => {
  return (
    <>
      <div className="w-full min-h-screen overflow-auto bg-white">
        <div className="w-full h-full flex flex-row">
          <div
            className="flex-1 w-full h-auto lg:flex flex-col hidden justify-center items-center text-6xl font-bold text-white"
            style={background}
          >
            <img src={imgLogo} className="w-2/12 h-auto" />
            StayApp
          </div>
          <div className="flex-1  w-full h-auto">
            <div className=" text-center lg:hidden flex flex-col justify-center items-center mt-10">
              <img src={imgLogo} className="w-2/12 h-auto " />
            </div>
            <h1 className=" text-2xl lg:text-4xl font-bold text-center text-text-input mt-8 lg:mt-20 font-poppins ">
              Register
            </h1>
            <p className="text-md lg:text-xl w-9/12 lg:w-6/12 mx-auto font-semibold text-text-input text-center mt-5 font-poppins">
              Register Yourself and Enjoy The Benefit with Us
            </p>
            <form>
              <div className="form-control w-full mx-auto">
                <label className="label mt-10">
                  <span className="label-text text-text-input font-semibold text-lg font-poppins mx-auto w-10/12 lg:w-6/12">
                    Nama Lengkap
                  </span>
                </label>
                <Input
                  id="input-namalengkap"
                  type="text"
                  placeholder="Marlina Marlini"
                  className="input input-bordered w-10/12 lg:w-6/12 bg-bg-input border-slate-300  mx-auto"
                />
                <label className="label mt-3">
                  <span className="label-text text-text-input font-semibold text-lg font-poppins mx-auto w-10/12 lg:w-6/12">
                    Username
                  </span>
                </label>
                <Input
                  id="input-username"
                  type="text"
                  placeholder="marlina1998"
                  className="input input-bordered w-10/12 lg:w-6/12 bg-bg-input border-slate-300  mx-auto"
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
                  className="input input-bordered  bg-bg-input border-slate-300  mx-auto w-10/12 lg:w-6/12"
                />
                <label className="label mt-5">
                  <span className="label-text text-text-input font-semibold text-lg font-poppins  mx-auto w-10/12 lg:w-6/12">
                    No. Telepon
                  </span>
                </label>
                <Input
                  id="input-notelepon"
                  type="number"
                  placeholder="0822XXXXX"
                  className="input input-bordered  bg-bg-input border-slate-300  mx-auto w-10/12 lg:w-6/12"
                />

                <label className="label">
                  <span className="label-text text-text-input font-semibold text-lg font-poppins mx-auto w-10/12 lg:w-6/12 mt-5">
                    Alamat
                  </span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-24 bg-bg-input border-slate-300  mx-auto w-10/12 lg:w-6/12"
                  placeholder="Bio"
                ></textarea>
              </div>

              <div className="text-center w-full  mt-10">
                <Button
                  id="btn-login"
                  label="Register"
                  className="bg-bg-button w-10/12 lg:w-6/12 rounded-lg py-2 text-white font-poppins font-semibold"
                />
              </div>
            </form>
            <p className="text-center text-text-input font-semibold mt-5 font-poppins">
              Already Have an Account?{" "}
              <span className="font-bold font-poppins">
                <Link to="/">Login</Link>
              </span>
            </p>
            <h2 className="font-semibold text-slate-400 font-poppins text-md lg:text-lg text-center pb-10 mt-16 flex justify-center items-end">
              Copyright @2023 StayApp
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
