import React from "react";

import Input from "components/Input";
import Button from "components/Button";

import imgAvatar from "../assets/woman.png";
import Layout from "components/Layout";
import { useNavigate } from "react-router";

const EditProfile = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="w-full min-h-screen">
        <div className="flex flex-row mt-10">
          <div className="flex-1 flex-col ">
            <h1 className="text-black font-bold font-poppins text-2xl text-center">
              Edit Profile
            </h1>
            <img src={imgAvatar} className="w-4/12 mx-auto mt-5 " />
          </div>
          <div className="flex-1 ">
            <form>
              <div className="form-control w-full mx-auto">
                <label className="label mt-3">
                  <span className="label-text text-text-input font-semibold text-lg font-poppins  w-10/12 lg:w-9/12">
                    Username
                  </span>
                </label>
                <Input
                  id="input-username"
                  type="username"
                  placeholder="marlina1998"
                  className="input input-bordered w-10/12 lg:w-9/12 bg-bg-input border-slate-300 text-black font-semibold font-poppins"
                />
                <label className="label mt-5">
                  <span className="label-text text-text-input font-semibold text-lg font-poppins w-10/12 lg:w-9/12">
                    No. Telepon
                  </span>
                </label>
                <Input
                  id="input-telefon"
                  type="number"
                  placeholder="08222"
                  className="input input-bordered  bg-bg-input border-slate-300 w-10/12 lg:w-9/12 text-black font-semibold font-poppins"
                />
                <label className="label">
                  <span className="label-text text-text-input font-semibold text-lg font-poppins  w-10/12 lg:w-9/12 mt-5">
                    Alamat
                  </span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-24 bg-bg-input border-slate-300 w-10/12 lg:w-9/12 text-black font-semibold font-popins"
                  placeholder="Bio"
                ></textarea>
              </div>
              <div className=" w-full mt-10">
                <Button
                  id="btn-back"
                  label="Kembali"
                  className="bg-bg-button w-10/12 lg:w-4/12 rounded-lg py-3 text-white font-poppins font-semibold disabled:bg-slate-400 disabled:cursor-not-allowed hover:cursor-pointer"
                  onClick={() => navigate("/profile")}
                />
                <Button
                  id="btn-Update"
                  label="Update"
                  className="bg-bg-button w-10/12 lg:w-4/12 rounded-lg py-3 text-white font-poppins font-semibold disabled:bg-slate-400 disabled:cursor-not-allowed hover:cursor-pointer ml-5"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EditProfile;
