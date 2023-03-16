import React, { useState, useEffect } from "react";

import Input from "components/Input";
import Button from "components/Button";

import imgAvatar from "../assets/woman.png";
import Layout from "components/Layout";

import { useNavigate } from "react-router";
import { EditProfileUser, getProfile } from "utils/Datatypes";
import { useCookies } from "react-cookie";
import axios from "axios";
import withReactContent from "sweetalert2-react-content";
import Swal from "utils/Swal";

const EditProfile = () => {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const [cookie, setCookie] = useCookies(["token"]);
  const checkToken = cookie.token;
  const [loading, setLoading] = useState<boolean>(false);
  const [profile, setProfile] = useState<getProfile>({});
  const [editProfile, setEditProfile] = useState<EditProfileUser>({});
  const [picture, setPicture] = useState<string>("");

  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();

    const formData = new FormData();
    let key: keyof typeof editProfile;
    for (key in editProfile) {
      formData.append(key, editProfile[key]);
    }

    axios
      .put("http://54.255.147.31/users", formData, {
        headers: {
          Authorization: `Bearer ${checkToken}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        const { message } = res.data;
        setPicture(res.data.picture);

        MySwal.fire({
          title: "Data Successfully Updated",
          text: message,
          showCancelButton: false,
        });

        navigate("/profile");
      })
      .finally(() => setLoading(false));
  };

  const handleChange = (
    value: string | File,
    key: keyof typeof editProfile
  ) => {
    let temp = { ...editProfile };
    temp[key] = value;
    setEditProfile(temp);
  };

  useEffect(() => {
    const fetchDataProfile = () => {
      setLoading(true);
      axios
        .get("http://54.255.147.31/users", {
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

    fetchDataProfile();
  }, []);

  return (
    <Layout>
      <div className="w-full min-h-screen">
        <div className="flex flex-row mt-10">
          <div className="flex-1 flex-col ">
            <h1 className="text-black font-bold font-poppins text-2xl text-center">
              Edit Profile
            </h1>
            <img src={picture} className="w-4/12 mx-auto mt-5 " />
            <Input
              id="input-file"
              type="file"
              className="file-input h-10 w-10/12 lg:w-full lg:max-w-xs flex justify-center bg-white mx-auto mt-5 border-none"
              onChange={(e: any) => {
                if (!e.currentTarget.files) {
                  return;
                }
                setPicture(URL.createObjectURL(e.currentTarget.files[0]));
                handleChange(e.currentTarget.files[0], "pictures");
              }}
            />
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
                  defaultValue={profile.name}
                  type="email"
                  placeholder="marlina1998"
                  className="input input-bordered w-10/12 lg:w-9/12 bg-bg-input border-slate-300 text-black font-semibold font-poppins"
                  onChange={(e: any) => handleChange(e.target.value, "name")}
                />
                <label className="label mt-5">
                  <span className="label-text text-text-input font-semibold text-lg font-poppins w-10/12 lg:w-9/12">
                    No. Telepon
                  </span>
                </label>
                <Input
                  id="input-telefon"
                  defaultValue={profile.phone}
                  type="number"
                  placeholder="08222"
                  className="input input-bordered  bg-bg-input border-slate-300 w-10/12 lg:w-9/12 text-black font-semibold font-poppins"
                  onChange={(e: any) => handleChange(e.target.value, "phone")}
                />
                <label className="label">
                  <span className="label-text text-text-input font-semibold text-lg font-poppins  w-10/12 lg:w-9/12 mt-5">
                    Alamat
                  </span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-24 bg-bg-input border-slate-300 w-10/12 lg:w-9/12 text-black font-semibold font-popins"
                  defaultValue={profile.address}
                  onChange={(e: any) => handleChange(e.target.value, "address")}
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
                  onClick={(e: any) => handleUpdate(e)}
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
