import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import axios from "axios";

import Layout from "components/Layout";
import imgHeader from "assets/img-1 (1).webp";
import location from "assets/location.webp";
import Button from "components/Button";
import { getFeedback } from "utils/Datatypes";
import { handleAuth } from "utils/redux/reducer";

const background = {
  backgroundImage: `url(${imgHeader})`,
  width: "80%",
  height: "25rem",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const UlasanRating = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [, setCookie] = useCookies(["token"]);
  const [cookies, removeCookies] = useCookies(["token"]);
  const checkToken = cookies.token;

  const [loading, setLoading] = useState<boolean>(false);
  const [room_id, setRoomId] = useState<number>();
  const [rating, setRating] = useState<number>();
  const [comment, setComment] = useState<string>("");

  useEffect(() => {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);
      const body = {
        room_id,
        rating,
        comment,
      };

      axios
        .post("https://group5.altapro.online/feedbacks", body, {
          headers: {
            Authorization: `Bearer ${checkToken}`,
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          const { data, message } = res.data;

          setCookie("token", res.data.token, { path: "/" });

          dispatch(handleAuth(true));

          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => setLoading(false));
    };
  });

  return (
    <Layout>
      <div className="w-full min-h-screen flex flex-col bg-white items-center mt-10">
        <h1 className="text-black font-semibold w-9/12 flex justify-start text-2xl font-poppins">
          Private Beach Villa - cook, dolphins, snorkeling
        </h1>
        <div className="flex flex-row w-9/12 mt-5 mb-5">
          <img src={location} width="30" />
          <p className="w-[30%] font-poppins text-slate-500 ml-3 text-xl font-semibold">
            Bali, Indonesia{" "}
            <span className="ml-5 text-text-card font-poppins ">Available</span>
          </p>
          <p className="font-semibold w-[70%] flex justify-end items-end font-poppins text-xl text-slate-500">
            Contact Person: 0822XXXX
          </p>
        </div>
        <div className=" rounded-2xl" style={background}></div>
      </div>

      <div>
        <div className="form-control w-96 pl-20 ml-48 mt-20">
          <label className="label">
            <span className="label-text text-black font-poppins font-bold">
              Berikan Ulasan Tentang Private Beach Villa
            </span>
          </label>
          <textarea
            className="w-50 h-60 textarea textarea-bordered text-black bg-white text-xs font-poppins"
            placeholder="Mempunyai Kolam Renang Pribadi 24 Jam"
          ></textarea>
        </div>
        <div className="form-control w-96 pl-20 ml-48 mt-7">
          <label className="label">
            <span className="label-text text-black font-poppins font-bold">
              Rating
            </span>
          </label>
          <div className="rating w-[30%] justify-end card-title text-color3 mr-5 border-spacing-3">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
          </div>
        </div>
      </div>
      <Button
        id="btn-submit"
        label="Submit Ulasan"
        className="bg-bg-button w-30 lg:w-2/12 ml-72 mt-20 rounded-lg py-2 text-white font-poppins font-semibold hover:bg-red-600 text-xl"
      />
      <h1 className="text-slate-500 font-bold font-poppins text-center mt-20 pb-10 text-xl">
        Copyright @2023 StayApp
      </h1>
    </Layout>
  );
};

export default UlasanRating;
