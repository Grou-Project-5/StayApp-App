import React, { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import imgComponent from "/assets/header.webp";
import Button from "./Button";
import axios from "axios";
import { getHomepageRoom } from "utils/Datatypes";
import { useParams } from "react-router";

interface PropsCard {
  image?: any;
  avail?: string;
  place?: string;
  price?: string;
}

const Card: FC<PropsCard> = ({ image, avail, place, price }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  // const [id, setId] = useState<number>();
  const [loading, setLoading] = useState<boolean>(false);
  const [dataRoom, setDataRoom] = useState<getHomepageRoom[]>([]);

  function onClickDetail() {
    navigate(`/detailHomestay/${id}`);
  }

  const fetchDataRoom = () => {
    axios
      .get("https://group5.altapro.online/rooms")
      .then((res) => {
        const { data } = res.data;
        setDataRoom(data);

        // setId(res.data.id);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchDataRoom();
  }, []);

  return (
    <>
      <div className="card w-11/12 h-[32rem] bg-bgCard mt-10 overflow-hidden ">
        <figure className="p-4">
          <img
            src={image}
            alt="logo.svg"
            className="rounded-2xl shadow-lg w-full h-[20rem]  object-fill"
          />
        </figure>

        <div className="card-body items-center text-center p-2">
          <div className="flex flex-row justify-center w-full">
            <h1 className="w-[70%] justify-start card-title text-color3 capitalize font-bold font-poppins  text-black ml-5 text-xl">
              {place}
            </h1>
            <div className="rating w-[30%] justify-end card-title text-color3 mr-5">
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
            </div>
          </div>
          <p className="text-slate-500 w-full font-semibold flex justify-start text-xl pl-5">
            Di Dekat Pantai Bagus
          </p>
          <div className="flex flex-row justify-center w-full -mt-20">
            <h1 className="flex-1 justify-start card-title text-color3 capitalize font-bold font-poppins text-text-card text- ml-5 text-xl">
              {avail}
            </h1>

            <h1 className="flex-1 justify-end card-title text-color3 capitalize font-bold font-poppins text-black mr-5 text-xl">
              {price}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
