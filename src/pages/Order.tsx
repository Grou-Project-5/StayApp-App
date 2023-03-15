import React from "react";
import Layout from "components/Layout";
import imgDetail from "assets/prateek-gupta-aL_z92TK3SA-unsplash.jpg";
import location from "assets/location.webp";
import Input from "components/Input";
import Button from "components/Button";
import { useNavigate } from "react-router";

const background = {
  width: "80%",
  height: "25rem",
  backgroundImage: `url(${imgDetail})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

export function DetailPesanan() {
  const navigate = useNavigate();
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
          <div className="flex flex-row w-[80%] mt-10">
            <div className="flex-1 ">
              <p className="text-black font-semibold font-poppins text-xl">
                Biaya Per Malam
              </p>
              <p className="text-black font-semibold font-poppins text-xl mt-5">
                Biaya Kebersihan
              </p>
              <p className="text-black font-semibold font-poppins text-xl mt-5">
                Biaya Layanan
              </p>
              <p className="text-black font-semibold font-poppins text-xl mt-5">
                Biaya Pajak
              </p>
            </div>
            <div className="flex-1 flex items-end flex-col">
              <p className="text-black font-semibold font-poppins text-xl">
                $207/Malam
              </p>
              <p className="text-black font-semibold font-poppins text-xl mt-5">
                $20
              </p>
              <p className="text-black font-semibold font-poppins text-xl mt-5">
                $167
              </p>
              <p className="text-black font-semibold font-poppins text-xl mt-5">
                $32
              </p>
            </div>
          </div>
          <hr className="border-1 border-black w-[80%] mt-5 pb-8" />
          <div className="flex flex-row w-[80%]">
            <div className="flex-1 ">
              <p className="text-black font-semibold font-poppins text-xl ">
                Jumlah Total
              </p>
            </div>
            <div className="flex-1 flex items-end flex-col">
              <p className="text-black font-semibold font-poppins text-xl">
                $1.252
              </p>
            </div>
          </div>
          <div className="w-[80%]">
            <div className="flex flex-row mt-5 w-6/12">
              <label className="flex-1 flex flex-col ">
                <span className="text-black font-semibold text-sm font-poppins">
                  Check-in Date
                </span>
                <Input
                  id="date"
                  type="date"
                  className="flex-1 bg-slate-400 rounded-lg p-3 w-10/12 text-sm mt-3"
                />
              </label>

              <label className="flex-1 flexflex-col ">
                <span className="text-black font-semibold text-sm font-poppins">
                  Check-out Date
                </span>
                <Input
                  id="date"
                  type="date"
                  className="flex-1 bg-slate-400 rounded-lg p-3 w-10/12 text-sm mt-3"
                />
              </label>
            </div>
          </div>
          <div className="form-control w-[80%] mt-10">
            <label className="label">
              <span className="label-text text-black font-poppins font-normal text-lg">
                Metode Pembayaran
              </span>
            </label>
            <select className="select select-bordered font-poppins w-4/12 bg-slate-100 text-black">
              <option disabled selected>
                Pilih Salah satu
              </option>
              <option>Bank Transfer</option>
              <option>Cash</option>
            </select>
          </div>
          <div className="form-control w-[80%] mt-10">
            <label className="label">
              <span className="label-text text-black font-poppins font-normal text-lg">
                Bank Penerima
              </span>
            </label>
            <select className="select select-bordered font-poppins w-4/12 bg-slate-100 text-black">
              <option disabled selected>
                Pilih Salah satu
              </option>
              <option>BCA</option>
              <option>BRI</option>
              <option>BNI</option>
              <option>PERMATA</option>
              <option>QRIS</option>
            </select>
          </div>
          <div className="w-[80%] mt-10">
            <Button
              id="btn-continuePayment"
              label="Continue Payment"
              className="w-4/12 py-3 text-white bg-bg-button text-xl font-semibold rounded-xl hover:bg-red-500"
              onClick={() => navigate("/konfirmasiPemesanan")}
            />
          </div>
        </div>
        <h1 className="text-xl text-slate-500 font-semibold text-center mt-20 pb-10">
          Copyright @2023 StayApp
        </h1>
      </Layout>
    </>
  );
}

export const KonfirmasiPemesanan = () => {
  const navigate = useNavigate();
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
          <div className="flex flex-row w-[80%] mt-10">
            <div className="flex-1 ">
              <p className="text-black font-semibold font-poppins text-xl">
                Biaya Per Malam
              </p>
              <p className="text-black font-semibold font-poppins text-xl mt-5">
                Biaya Kebersihan
              </p>
              <p className="text-black font-semibold font-poppins text-xl mt-5">
                Biaya Layanan
              </p>
              <p className="text-black font-semibold font-poppins text-xl mt-5">
                Biaya Pajak
              </p>
            </div>
            <div className="flex-1 flex items-end flex-col">
              <p className="text-black font-semibold font-poppins text-xl">
                $207/Malam
              </p>
              <p className="text-black font-semibold font-poppins text-xl mt-5">
                $20
              </p>
              <p className="text-black font-semibold font-poppins text-xl mt-5">
                $167
              </p>
              <p className="text-black font-semibold font-poppins text-xl mt-5">
                $32
              </p>
            </div>
          </div>
          <hr className="border-1 border-black w-[80%] mt-5 pb-8" />
          <div className="flex flex-row w-[80%]">
            <div className="flex-1 ">
              <p className="text-black font-semibold font-poppins text-xl ">
                Jumlah Total
              </p>
            </div>
            <div className="flex-1 flex items-end flex-col">
              <p className="text-black font-semibold font-poppins text-xl">
                $1.252
              </p>
            </div>
          </div>

          <div className="w-[80%] mt-10">
            <Button
              id="btn-confirm & Pay"
              label="Confirm & Pay"
              className="w-4/12 py-3 text-white bg-bg-button text-xl font-semibold rounded-xl hover:bg-red-500"
              onClick={() => navigate("/")}
            />
          </div>
        </div>
        <h1 className="text-xl text-slate-500 font-semibold text-center mt-20 pb-10">
          Copyright @2023 StayApp
        </h1>
      </Layout>
    </>
  );
};
