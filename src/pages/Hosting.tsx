import React from "react";
import listing1 from "../assets/listing-1.webp";
import imgAuth from "assets/img-auth.webp";
import { useNavigate } from "react-router";
import img1 from "../assets/img-1 (1).webp";
import Layout from "components/Layout";
import Card from "components/Card";
import Button from "components/Button";
import imgDetail from "assets/prateek-gupta-aL_z92TK3SA-unsplash.jpg";

const listing_1 = {
  backgroundImage: `url(${listing1})`,
  width: "100%",
  height: "auto",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const listing_2 = {
  backgroundImage: `url(${imgAuth})`,
  width: "100%",
  height: "auto",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

export const Hosting = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full min-h-screen flex flex-row">
        <div
          className="flex-1 w-full flex justify-center items-center"
          style={listing_1}
          onClick={() => navigate("/listHosting")}
        >
          <h1 className="text-white font-bold text-4xl text-center w-8/12">
            Daftar Homestay yang Anda Listing
          </h1>
        </div>
        <div
          className="flex-1 w-full flex justify-center items-center"
          style={listing_2}
          onClick={() => navigate("/uploadHosting")}
        >
          <h1 className="text-white font-bold text-4xl text-center w-8/12">
            Upload Homestay
          </h1>
        </div>
      </div>
    </>
  );
};

export const ListHosting = () => {
  const navigate = useNavigate();
  return (
    <>
      <Layout>
        <div className="flex flex-row mx-auto w-[90%] mt-10">
          <div className="flex-1 b">
            <Button
              id="btn-back"
              label="Kembali"
              className="w-6/12 py-3 bg-bg-button text-white rounded-xl font-poppins font-semibold hover:bg-red-500"
              onClick={() => navigate("/profile")}
            />
          </div>
          <div className="flex-1 ">
            <h1
              className="text-black text-center text-2xl font-poppins font-bold"
              onClick={() => navigate("/")}
            >
              Homestayku
            </h1>
          </div>
          <div className="flex-1  flex justify-end">
            <Button
              id="btn-back"
              label="Upload Homestay Baru"
              className="w-8/12 py-3 bg-bg-button text-white rounded-xl font-poppins font-semibold hover:bg-red-500"
              onClick={() => navigate("/uploadHosting")}
            />
          </div>
        </div>
        <div className="w-full min-h-screen flex justify-center pl-6 overflow-hidden">
          <div className="lg:grid lg:grid-cols-3 grid-cols-1 gap-2 overflow-hidden">
            <div>
              <Card
                image={img1}
                place="Bali, Indonesia"
                avail="Available"
                price="$200/Malam"
              />
              <div className="flex flex-row pl-5 mt-5">
                <Button
                  id="btn-edit"
                  label="Edit"
                  className="w-4/12 py-2 rounded-xl bg-bg-button hover:bg-red-500"
                />
                <Button
                  id="btn-edit"
                  label="Delete"
                  className="w-4/12 py-2 rounded-xl bg-bg-button ml-5 hover:bg-red-500"
                />
              </div>
            </div>

            <div>
              <Card
                image={img1}
                place="Bali, Indonesia"
                avail="Available"
                price="$200/Malam"
              />
              <div className="flex flex-row pl-5 mt-5">
                <Button
                  id="btn-edit"
                  label="Edit"
                  className="w-4/12 py-2 rounded-xl bg-bg-button hover:bg-red-500"
                />
                <Button
                  id="btn-edit"
                  label="Delete"
                  className="w-4/12 py-2 rounded-xl bg-bg-button ml-5 hover:bg-red-500"
                />
              </div>
            </div>
            <div>
              <Card
                image={img1}
                place="Bali, Indonesia"
                avail="Available"
                price="$200/Malam"
              />
              <div className="flex flex-row pl-5 mt-5">
                <Button
                  id="btn-edit"
                  label="Edit"
                  className="w-4/12 py-2 rounded-xl bg-bg-button hover:bg-red-500"
                />
                <Button
                  id="btn-edit"
                  label="Delete"
                  className="w-4/12 py-2 rounded-xl bg-bg-button ml-5 hover:bg-red-500"
                />
              </div>
            </div>
            <div>
              <Card
                image={img1}
                place="Bali, Indonesia"
                avail="Available"
                price="$200/Malam"
              />
              <div className="flex flex-row pl-5 mt-5">
                <Button
                  id="btn-edit"
                  label="Edit"
                  className="w-4/12 py-2 rounded-xl bg-bg-button hover:bg-red-500"
                />
                <Button
                  id="btn-edit"
                  label="Delete"
                  className="w-4/12 py-2 rounded-xl bg-bg-button ml-5 hover:bg-red-500"
                />
              </div>
            </div>
            <div>
              <Card
                image={img1}
                place="Bali, Indonesia"
                avail="Available"
                price="$200/Malam"
              />
              <div className="flex flex-row pl-5 mt-5">
                <Button
                  id="btn-edit"
                  label="Edit"
                  className="w-4/12 py-2 rounded-xl bg-bg-button hover:bg-red-500"
                />
                <Button
                  id="btn-edit"
                  label="Delete"
                  className="w-4/12 py-2 rounded-xl bg-bg-button ml-5 hover:bg-red-500"
                />
              </div>
            </div>
            <div>
              <Card
                image={img1}
                place="Bali, Indonesia"
                avail="Available"
                price="$200/Malam"
              />
              <div className="flex flex-row pl-5 mt-5">
                <Button
                  id="btn-edit"
                  label="Edit"
                  className="w-4/12 py-2 rounded-xl bg-bg-button hover:bg-red-500"
                />
                <Button
                  id="btn-edit"
                  label="Delete"
                  className="w-4/12 py-2 rounded-xl bg-bg-button ml-5 hover:bg-red-500"
                />
              </div>
            </div>
            <div>
              <Card
                image={img1}
                place="Bali, Indonesia"
                avail="Available"
                price="$200/Malam"
              />
              <div className="flex flex-row pl-5 mt-5">
                <Button
                  id="btn-edit"
                  label="Edit"
                  className="w-4/12 py-2 rounded-xl bg-bg-button hover:bg-red-500"
                />
                <Button
                  id="btn-edit"
                  label="Delete"
                  className="w-4/12 py-2 rounded-xl bg-bg-button ml-5 hover:bg-red-500"
                />
              </div>
            </div>
            <div>
              <Card
                image={img1}
                place="Bali, Indonesia"
                avail="Available"
                price="$200/Malam"
              />
              <div className="flex flex-row pl-5 mt-5">
                <Button
                  id="btn-edit"
                  label="Edit"
                  className="w-4/12 py-2 rounded-xl bg-bg-button hover:bg-red-500"
                />
                <Button
                  id="btn-edit"
                  label="Delete"
                  className="w-4/12 py-2 rounded-xl bg-bg-button ml-5 hover:bg-red-500"
                />
              </div>
            </div>
            <div>
              <Card
                image={img1}
                place="Bali, Indonesia"
                avail="Available"
                price="$200/Malam"
              />
              <div className="flex flex-row pl-5 mt-5">
                <Button
                  id="btn-edit"
                  label="Edit"
                  className="w-4/12 py-2 rounded-xl bg-bg-button hover:bg-red-500"
                />
                <Button
                  id="btn-edit"
                  label="Delete"
                  className="w-4/12 py-2 rounded-xl bg-bg-button ml-5 hover:bg-red-500"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center w-full">
          <Button
            id="btn-loadMore"
            label="Load More"
            className="bg-bg-button w-10/12 lg:w-3/12 mt-10 rounded-lg py-4 text-white font-poppins font-semibold hover:bg-red-600 text-xl"
          />
        </div>
        <h1 className="text-slate-500 font-bold text-center mt-10 pb-10 text-xl">
          Copyright @2023 StayApp
        </h1>
      </Layout>
    </>
  );
};

const CardListing = () => {};

export const UploadHosting = () => {
  const background = {
    width: "80%",
    height: "25rem",
    backgroundImage: `url(${imgDetail})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const navigate = useNavigate();
  return (
    <>
      <Layout>
        <div className="flex flex-row mx-auto w-[90%] mt-10">
          <div className="flex-1 b">
            <Button
              id="btn-back"
              label="Kembali"
              className="w-6/12 py-3 bg-bg-button text-white rounded-xl font-poppins font-semibold hover:bg-red-500"
              onClick={() => navigate("/profile")}
            />
          </div>
          <div className="flex-1 ">
            <h1 className="text-black text-center text-2xl font-poppins font-bold">
              Upload Homestay
            </h1>
          </div>
          <div className="flex-1  flex justify-end">
            <Button
              id="btn-back"
              label="Lihat Daftar Homestay"
              className="w-8/12 py-3 bg-bg-button text-white rounded-xl font-poppins font-semibold hover:bg-red-500"
              onClick={() => navigate("/listHosting")}
            />
          </div>
        </div>
        <div className=" rounded-2xl mx-auto mt-20" style={background}></div>
        <div className="w-full flex justify-center mt-8">
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </div>
        <div className="flex mx-auto flex-row w-[80%] border-2 border-black">
          <div className="flex-1">
            <label className="label">
              <span className="label-text">What is your name?</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              <span className="label-text">What is your name?</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="flex-1">
            <label className="label">
              <span className="label-text">What is your name?</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export const UpdateHosting = () => {};
