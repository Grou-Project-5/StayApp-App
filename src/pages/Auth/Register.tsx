import imgAuth from "assets/img-auth.webp";
import imgLogo from "assets/Logo.webp";

import Input from "components/Input";
import Button from "components/Button";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

import withReactContent from "sweetalert2-react-content";
import Swal from "utils/Swal";

const background = {
  backgroundImage: `url(${imgAuth})`,
  width: "100%",
  height: "auto",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const Register = () => {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const [cookie, , removeCookie] = useCookies(["token"]);
  const checkToken = cookie.token;
  const [disabled, setDisabled] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  function handleGender(event: any) {
    setGender(event.target.value);
  }

  useEffect(() => {
    if (name && email && password && phone && gender && address) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, email, password, phone, gender, address]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();

    const body = {
      name,
      email,
      password,
      phone,
      gender,
      address,
    };

    axios
      .post("https://group5.altapro.online/register", body, {
        headers: {
          Authorization: `Bearer ${checkToken}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const { message } = res.data;
        console.log(res.data);
        console.log(res.data.message);
        MySwal.fire({
          title: "Success",
          text: message,
          showCancelButton: false,
        });
        navigate("/login");
      })
      .catch((err) => {
        const { message } = err.response.data;
        MySwal.fire({
          title: "Failed",
          text: message,
          showCancelButton: false,
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      {loading ? (
        <p>Tunggu</p>
      ) : (
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
                <form onSubmit={(e) => handleSubmit(e)}>
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
                      className="input input-bordered w-10/12 lg:w-6/12 bg-bg-input border-slate-300  mx-auto text-black font-semibold font-popins"
                      onChange={(e: any) => setName(e.target.value)}
                    />
                    <label className="label mt-3">
                      <span className="label-text text-text-input font-semibold text-lg font-poppins mx-auto w-10/12 lg:w-6/12">
                        Email
                      </span>
                    </label>
                    <Input
                      id="input-username"
                      type="email"
                      placeholder="marlina1998"
                      className="input input-bordered w-10/12 lg:w-6/12 bg-bg-input border-slate-300  mx-auto text-black font-semibold font-popins"
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
                      className="input input-bordered  bg-bg-input border-slate-300  mx-auto w-10/12 lg:w-6/12 text-black font-semibold font-popins"
                      onChange={(e: any) => setPassword(e.target.value)}
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
                      className="input input-bordered  bg-bg-input border-slate-300  mx-auto w-10/12 lg:w-6/12 text-black font-semibold font-popins "
                      onChange={(e: any) => setPhone(e.target.value)}
                    />

                    <label className="label mt-5">
                      <span className="label-text text-text-input font-semibold text-lg font-poppins  mx-auto w-10/12 lg:w-6/12">
                        Gender
                      </span>
                    </label>
                    <select
                      defaultValue={"DEFAULT"}
                      name="gender"
                      className="input input-bordered  bg-bg-input border-slate-300 text-black  mx-auto w-10/12 lg:w-6/12"
                      onChange={handleGender}
                    >
                      <option value="DEFAULT" disabled selected>
                        Pilih Salah satu
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Prefer Not To Say">
                        Prefer Not To Say
                      </option>
                    </select>

                    <label className="label">
                      <span className="label-text text-text-input font-semibold text-lg font-poppins mx-auto w-10/12 lg:w-6/12 mt-5">
                        Alamat
                      </span>
                    </label>
                    <textarea
                      className="textarea textarea-bordered h-24 bg-bg-input border-slate-300  mx-auto w-10/12 lg:w-6/12 text-black font-semibold font-popins"
                      placeholder="Bio"
                      onChange={(e: any) => setAddress(e.target.value)}
                    ></textarea>
                  </div>

                  <div className="text-center w-full  mt-10">
                    <Button
                      id="btn-login"
                      label="Register"
                      className="bg-bg-button w-10/12 lg:w-6/12 rounded-lg py-2 text-white font-poppins font-semibold disabled:bg-slate-400 disabled:cursor-not-allowed hover:cursor-pointer"
                      loading={loading || disabled}
                    />
                  </div>
                </form>
                <p className="text-center text-text-input font-semibold mt-5 font-poppins">
                  Already Have an Account?{" "}
                  <span className="font-bold font-poppins">
                    <Link to="/login">Login</Link>
                  </span>
                </p>
                <h2 className="font-semibold text-slate-400 font-poppins text-md lg:text-lg text-center pb-10 mt-16 flex justify-center items-end">
                  Copyright @2023 StayApp
                </h2>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Register;
