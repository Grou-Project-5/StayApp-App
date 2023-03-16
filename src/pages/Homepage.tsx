import Button from "components/Button";
import Card from "components/Card";
import Layout from "components/Layout";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router";
import axios from "axios";

import imgHeader from "../assets/header.webp";
import img1 from "../assets/img-1 (1).webp";
import { getHomepageRoom } from "utils/Datatypes";

const Homepage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [dataRoom, setDataRoom] = useState<getHomepageRoom[]>([]);

  const fetchDataRoom = () => {
    axios
      .get("http://54.255.147.31/rooms")
      .then((res) => {
        const { data } = res.data;
        setDataRoom(data);
        console.log(data);
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
      <Layout>
        <Header />
        <div className="w-full min-h-screen flex justify-center pl-6 mt-10 overflow-hidden">
          {dataRoom?.map((item) => {
            return (
              <>
                <div
                  className="lg:grid lg:grid-cols-3 grid-cols-1 gap-2 overflow-hidden"
                  key={item.id}
                >
                  <Card
                    image={item.room_picture}
                    place={item.room_name}
                    avail="Available"
                    price={item.price}
                  />
                </div>
              </>
            );
          })}
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

const Header = () => {
  const background = {
    backgroundImage: `url(${imgHeader})`,
    width: "100%",
    height: "auto",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <div className="w-full h-auto" style={background}>
        <div className="w-full h-[45rem] flex flex-col items-center justify-center">
          <h1 className="font-bold text-4xl lg:text-6xl font-poppins">
            StayApp
          </h1>
          <h2 className=" text-2xl lg:text-4xl font-bold mt-10 w-[20rem] lg:w-[30rem] text-center underline">
            Good View, Best Price, and Easy to Book
          </h2>
          <input
            type="text"
            placeholder="Search Hostage...."
            className="input input-bordered w-8/12 lg:w-4/12 bg-white mt-10 text-black"
          />
        </div>
      </div>
    </>
  );
};

export default Homepage;
