import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

import Layout from "components/Layout";
import imgDetail from "assets/prateek-gupta-aL_z92TK3SA-unsplash.jpg";
import location from "assets/location.webp";
import Input from "components/Input";
import Button from "components/Button";
import avatar from "assets/avatar.webp";
import { getFeedback } from "utils/Datatypes";
import { getDataHomestay } from "utils/Datatypes";
import { useCookies } from "react-cookie";
import { useParams } from "react-router";
import imgIcon from "../assets/double-bed 1.webp";
import imgIcon2 from "../assets/room 1.webp";

export default function DetailHomestay() {
  const [cookie, setCookie] = useCookies(["token"]);
  const checkToken = cookie.token;
  const [dataRoom, setDataRoom] = useState<getDataHomestay>({});
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [dataUlasan, setDataUlasan] = useState<getFeedback[]>([]);
  const [getHomestay, setGetHomestay] = useState<getDataHomestay>({});
  const { id } = useParams();

  const fetchDataUlasan = () => {
    axios
      .get("https://group5.altapro.online/rooms/1/feedbacks")
      .then((res) => {
        const { data } = res.data;
        setDataUlasan(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchDataUlasan();
  }, []);

  const fetchDataGetUpdate = () => {
    axios
      .get(`https://group5.altapro.online/rooms/${id}`, {
        headers: {
          Authorization: `Bearer ${checkToken}`,
        },
      })
      .then((res) => {
        const { data } = res.data;
        setGetHomestay(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchDataGetUpdate();
  }, []);

  return (
    <>
      <Layout>
        <div className="w-full min-h-screen flex flex-col bg-white items-center mt-10">
          <h1 className="text-black font-semibold w-9/12 flex justify-start text-2xl font-poppins">
            {getHomestay.name}
          </h1>
          <div className="flex flex-row w-9/12 mt-5 mb-5">
            <img src={location} width="30" />
            <p className="w-[30%] font-poppin text-slate-500 ml-3 text-xl font-semibold">
              {getHomestay.location}
              <span className="ml-5 text-text-card ">
                {getHomestay.availability}
              </span>
            </p>

            <p className="font-semibold w-[70%] flex justify-end items-end text-xl text-slate-500">
              Contact Person: {getHomestay.user_phone}
            </p>
          </div>
          <div
            className=" rounded-2xl bg-no-repeat bg-auto bg-center"
            style={{
              width: "80%",
              height: "25rem",
              backgroundImage: `url(${getHomestay.pictures})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="flex flex-row w-[80%] min-h-screen mt-20">
            <div className="w-[65%] text-black">
              <div className="flex flex-col w-11/12">
                <h1 className="text-black text-2xl font-bold font-poppins">
                  Deskripsi Tempat:
                </h1>
                <p className="text-black font-normal font-poppins text-lg mt-8">
                  {getHomestay.description}
                </p>
                <h1 className="text-black text-2xl font-bold font-poppins mt-10">
                  Fasilitas yang ditawarkan :
                </h1>
                <div className="flex flex-col ">
                  <span className="flex mt-5">
                    <img src={imgIcon} />
                    <p className="ml-5">{getHomestay.special_access}</p>
                  </span>
                  <span className="flex mt-5">
                    <img src={imgIcon2} />
                    <p className="ml-5">
                      {getHomestay.bedroom} Ruangan Kamar Tidur
                    </p>
                  </span>
                  <span className="flex mt-5">
                    <img src={imgIcon2} />
                    <p className="ml-5">
                      {getHomestay.room_total} Ruangan Kamar{" "}
                    </p>
                  </span>

                  <span className="flex mt-5">
                    <img src={imgIcon2} />
                    <p className="ml-5">{getHomestay.kitchen}</p>
                  </span>
                  <span className="flex mt-5">
                    <img src={imgIcon2} />
                    <p className="ml-5">{getHomestay.wifi}</p>
                  </span>
                  <span className="flex mt-5">
                    <img src={imgIcon2} />
                    <p className="ml-5">{getHomestay.garage}</p>
                  </span>
                  <span className="flex mt-5">
                    <img src={imgIcon2} />
                    <p className="ml-5">{getHomestay.excellent_features}</p>
                  </span>
                </div>
                <h1 className="text-black text-2xl font-bold font-poppins mt-10">
                  Peraturan Rumah
                </h1>
                <p className="text-black font-semibold mt-3">
                  Check-in: {getHomestay.check_in}
                </p>
                <p className="text-black font-semibold mt-3">
                  Check-out sebelum {getHomestay.check_out}
                </p>
                <p className="text-black font-semibold mt-3">
                  Maksimum Pengunjung 8 Orang
                </p>
                {/* The button to open modal */}
                <label
                  htmlFor="my-modal-5"
                  className="text-black font-bold text-lg mt-5 "
                >
                  Lihat lebih banyak...
                </label>

                {/* Put this part before </body> tag */}
                <input
                  type="checkbox"
                  id="my-modal-5"
                  className="modal-toggle"
                />
                <div className="modal">
                  <div className="modal-box w-11/12 max-w-5xl bg-white">
                    <h1 className="text-black text-2xl font-bold font-poppins mt-10">
                      Peraturan Rumah
                    </h1>
                    <p className="text-black font-semibold mt-3">
                      Maksimum Pengunjung {getHomestay.max_visitors} Orang
                    </p>
                    <p className="text-black font-semibold mt-3">
                      {getHomestay.bring_animal}
                    </p>
                    <h1 className="text-black text-2xl font-bold font-poppins mt-10">
                      Apa saja yang diperbolehkan
                    </h1>
                    <p className="text-black font-semibold mt-3">
                      Check-in: {getHomestay.check_in}
                    </p>
                    <p className="text-black font-semibold mt-3">
                      Check-out sebelum : {getHomestay.check_out}
                    </p>
                    <p className="text-black font-semibold mt-3">
                      Check-in mandiri dengan Petugas Gedung
                    </p>
                    <p className="text-black font-semibold mt-3">
                      {getHomestay.take_photo}
                    </p>
                    <h1 className="text-black text-2xl font-bold font-poppins mt-10">
                      Peraturan Tambahan
                    </h1>
                    <p className="text-black font-semibold mt-3">
                      {getHomestay.other}
                    </p>
                    <div className="modal-action">
                      <label htmlFor="my-modal-5" className="btn">
                        Yay!
                      </label>
                    </div>
                  </div>
                </div>
                <h1 className="text-black text-2xl font-bold font-poppins mt-5">
                  Ulasan (4 Orang)
                </h1>

                <div className="flex w-full justify-center">
                  <Button
                    id="loadMore"
                    label="Load More"
                    className="w-6/12 py-2 bg-bg-button rounded-xl text-white font-poppins font-semibold mt-8 hover:bg-red-600"
                  />
                </div>
              </div>
            </div>
            <div className="w-[35%] text-black flex justify-center sticky">
              <div className="card bg-bg-card w-10/12 h-[33rem] items-center">
                <div className="flex flex-row w-[85%] mt-7">
                  <div className="flex-1 justify-start">
                    <h1 className="font-semibold text-xl font-poppins">
                      $207/Malam
                    </h1>
                  </div>
                  <div className="flex-1 justify-end pl-16">
                    <h1>Rating</h1>
                  </div>
                </div>
                <div className="flex flex-row mt-5">
                  <label className="flex-1 flex items-center flex-col ">
                    <span className="text-black font-semibold text-sm font-poppins">
                      Check-in Date
                    </span>
                    <Input
                      id="date"
                      type="date"
                      className="flex-1 bg-slate-200 rounded-lg p-3 w-10/12 text-sm mt-3"
                    />
                  </label>

                  <label className="flex-1 flex items-center flex-col ">
                    <span className="text-black font-semibold text-sm font-poppins">
                      Check-out Date
                    </span>
                    <Input
                      id="date"
                      type="date"
                      className="flex-1 bg-slate-200 rounded-lg p-3 w-10/12 text-sm mt-3"
                    />
                  </label>
                </div>
                <Button
                  id="btn-check"
                  label="Check Availibity"
                  className="bg-bg-button text-white font-semibold rounded-2xl w-10/12 mt-5 py-2 hover:bg-orange-500"
                />
                <Button
                  id="btn-check"
                  label="Pesan"
                  className="bg-bg-button text-white font-semibold rounded-2xl w-10/12 mt-5 py-2 hover:bg-orange-500"
                  onClick={() => navigate("/detailPesanan")}
                />
                <div className="flex flex-row w-[85%] h-auto mt-10">
                  <div className="flex-1">
                    <p className="font-bold text-sm">$207 x 5 malam</p>
                    <p className="font-bold text-sm mt-2">Biaya Kebersihan</p>
                    <p className="font-bold text-sm mt-2">Biaya Layanan</p>
                    <p className="font-bold text-sm mt-2">Pajak</p>
                  </div>
                  <div className="flex-1 flex items-end flex-col">
                    <p className="font-bold text-sm">$1.033</p>
                    <p className="font-bold text-sm mt-2">$20</p>
                    <p className="font-bold text-sm mt-2">$67</p>
                    <p className="font-bold text-sm mt-2">$32</p>
                  </div>
                </div>
                <hr className="w-10/12 border-1 border-black mt-4" />
                <div className="flex flex-row w-[85%] h-auto mt-5">
                  <div className="flex-1">
                    <p className="font-bold text-sm mt-2">Jumlah Total</p>
                  </div>
                  <div className="flex-1 flex items-end flex-col">
                    <p className="font-bold text-sm mt-2">$1.252</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1 className="font-poppins font-semibold text-center text-slate-500 w-full mt-10 pb-10">
            Copyright @2023 StayApp
          </h1>
        </div>
      </Layout>
    </>
  );
}

const CardUlasan = () => {
  return (
    <>
      <div className="flex flex-row mt-5">
        <div className="w-[8%]">
          <img src={avatar} />
        </div>
        <div className="flex-1 ml-5">
          <p>Marlina</p>
          <p>Januari 2023</p>
        </div>
      </div>
      <p className="mt-3">
        Anne and Leon's house is a real gem and the owners are just great to
        communicate with. A special thanks from our side to Ketut (great food
        and spotlessly clean house)
      </p>
    </>
  );
};
