import React, { useState, useEffect } from "react";

import Layout from "components/Layout";
import imgAva from "assets/woman.png";

import { Link, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { getProfile } from "utils/Datatypes";

const Profile = () => {
  const [cookie, setCookie] = useCookies(["token"]);
  const checkToken = cookie.token;
  const [loading, setLoading] = useState<boolean>(false);
  const [profile, setProfile] = useState<getProfile>({});
  const [id, setId] = useState<number>();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [pictures, setPictures] = useState<string>("");

  useEffect(() => {
    const fetchDataApi = () => {
      setLoading(true);
      axios
        .get(`http://54.255.147.31/users`, {
          headers: {
            Authorization: `Bearer ${checkToken}`,
          },
        })
        .then((res) => {
          const { data } = res.data;
          // localStorage.setItem("dataProfile", JSON.stringify(data));
          setProfile(data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => setLoading(false));
    };

    fetchDataApi();
  }, []);

  // async function loadData() {
  //   const getData = await localStorage.getItem("dataProfile");
  //   const profileData = JSON.parse(getData || "[]");
  //   setProfile(profileData);
  // }

  // useEffect(() => {
  //   loadData();
  // }, []);

  return (
    <Layout>
      return (
      <>
        <div className="w-full h-full flex flex-col items-center justify-center">
          <h2 className=" text-black font-extrabold text-5xl font-poppins mt-2 mb-24">
            Informasi Pribadi
          </h2>
          <img
            src={profile.pictures}
            alt="user-image"
            className="w-60 text-center border-4 border-customcyan rounded-full mb-4"
          />
          <p className="text-slate-500 font-medium text-xl font-poppins mt-5 mb-5 text-center">
            {profile.email}
          </p>
          <p className="text-black font-bold text-3xl font-poppins mt-4 mb-2 text-center">
            Nama Lengkap: {profile.name}
          </p>
          <p className="text-black font-bold text-3xl font-poppins mt-4 mb-2 text-center">
            No. telepon: {profile.phone}
          </p>
          <p className="text-black font-bold text-3xl font-poppins mt-4 mb-2 text-center">
            Alamat: {profile.address}
          </p>
          <button className="btn btn-active bg-red-500 text-zinc-50 font-poppins mt-10 mb-4">
            Edit Profil
          </button>
          <Link
            to="/landingPageListing"
            className="link link-secondary text-red-500 font- font-medium text-3xl font-poppins mt-10 mb-5 text-center"
          >
            Tertarik Menyewakan Homestay ?
          </Link>
        </div>
      </>
      );
    </Layout>
  );
};

export default Profile;
