import React from "react";

import Layout from "components/Layout";
import imgAva from "assets/woman.png";

import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <Layout>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h2 className=" text-black font-extrabold text-5xl font-poppins mt-2 mb-24">
          Informasi Pribadi
        </h2>
        <img
          src={imgAva}
          alt="user-image"
          className="w-60 text-center border-4 border-customcyan rounded-full mb-4"
        />
        <p className="text-slate-500 font-medium text-3xl font-poppins mt-5 mb-5 text-center">
          @marlina1996
        </p>
        <p className="text-black font-bold text-3xl font-poppins mt-4 mb-2 text-center">
          Nama Lengkap: Marlina Marlini
        </p>
        <p className="text-black font-bold text-3xl font-poppins mt-4 mb-2 text-center">
          No. telepon: 083818380526
        </p>
        <p className="text-black font-bold text-3xl font-poppins mt-4 mb-2 text-center">
          Alamat: Bali, Provinsi Bali, Indonesia
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
    </Layout>
  );
};

export default Profile;
