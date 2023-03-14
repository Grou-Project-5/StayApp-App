import React from "react";
import Layout from "components/Layout";
import imgDetail from "assets/prateek-gupta-aL_z92TK3SA-unsplash.jpg";
import location from "assets/location.webp";

const background = {
  width: "80%",
  height: "25rem",
  backgroundImage: `url(${imgDetail})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

export default function DetailPesanan() {
  return (
    <>
      <Layout>
        <div className="w-full min-h-screen flex flex-col bg-white items-center mt-10">
          <h1 className="text-black font-semibold w-9/12 flex justify-start text-2xl font-poppins">
            Private Beach Villa - cook, dolphins, snorkeling
          </h1>
          <div className="flex flex-row w-9/12 mt-5 mb-5">
            <img src={location} width="30" />
            <p className="w-[30%] font-poppin text-slate-500 ml-3 text-xl font-semibold">
              Bali, Indonesia{" "}
              <span className="ml-5 text-text-card ">Available</span>
            </p>

            <p className="font-semibold w-[70%] flex justify-end items-end text-xl text-slate-500">
              Contact Person: 0822XXXX
            </p>
          </div>
          <div className=" rounded-2xl" style={background}></div>
        </div>
      </Layout>
    </>
  );
}
