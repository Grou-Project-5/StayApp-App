import React from "react";

import listing1 from "../assets/listing-1.webp";
import imgAuth from "assets/img-auth.webp";
import { useNavigate } from "react-router";

const list = {
  backgroundImage: `url(${listing1})`,
  width: "100%",
  height: "auto",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const upload = {
  backgroundImage: `url(${imgAuth})`,
  width: "100%",
  height: "auto",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const ListHomestay = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen flex flex-row">
      <div
        className="lg:flex flex-row hidden flex-1 justify-center items-center text-4xl font-bold text-white font-poppins"
        style={list}
        onClick={() => navigate("/daftarUpload")}
      >
        <h1 className="text-white font-bold text-4xl text-center w-8/12">
          Daftar Homestay yang Anda Listing
        </h1>
      </div>
      <div
        className="lg:flex flex-row hidden flex-1 justify-center items-center text-5xl font-bold text-white font-poppins"
        style={upload}
        onClick={() => navigate("/uploadNew")}
      >
        <h1 className="text-white font-bold text-4xl text-center w-8/12">
          Upload Homestay
        </h1>
      </div>
    </div>
  );
};

export default ListHomestay;
