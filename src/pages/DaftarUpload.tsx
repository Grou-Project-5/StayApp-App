import React, { useState, useEffect } from "react";

import Layout from "components/Layout";
import Card from "components/Card";

import img1 from "../assets/img-1 (1).webp";
import Button from "components/Button";
import { useNavigate } from "react-router";
import { getHomepageRoom } from "utils/Datatypes";
import axios from "axios";

const DaftarUpload = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [listingUser, setListingUser] = useState<getHomepageRoom[]>([]);

  const fetchDataListUser = () => {
    axios
      .get("https://group5.altapro.online/room")
      .then((res) => {
        const { data } = res.data;
        setListingUser(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchDataListUser();
  }, []);

  return (
    <Layout>
      <div className="grid-cols-3 flex justify-between items-center">
        <div className="text-center w-full">
          <Button
            id="btn-back"
            label="Kembali"
            className="bg-bg-button w-52 lg:w-3/12 mt-10 rounded-lg py-4 text-white font-poppins font-semibold hover:bg-red-600 text-xl"
          />
        </div>
        <h1 className="text-black font-extrabold font-poppins text-3xl justify-center items-center">
          Homestayku
        </h1>
        <div className="text-center w-full">
          <Button
            id="btn-upload"
            label="Upload Homestay Baru"
            className="bg-bg-button w-96 lg:w-3/12 mt-10 ml-15 rounded-lg py-4 text-white font-poppins font-semibold hover:bg-red-600 text-xl"
            onClick={() => navigate("/uploadNew")}
          />
        </div>
      </div>
      <div className="w-full min-h-screen flex justify-center pl-6 mt-10 overflow-hidden">
        <div className="font-poppins lg:grid lg:grid-cols-3 grid-cols-1 gap-2 overflow-hidden">
          {loading ? (
            <>
              <p>Mohon Tunggu Sebentar</p>
            </>
          ) : (
            <>
              {listingUser?.map((item, index) => {
                return (
                  <>
                    <div>
                      <Card
                        key={index}
                        image={item.pictures}
                        place={item.name}
                        avail={item.availability}
                        price={item.price}
                      />
                      <div className="flex flex-row">
                        <Button
                          id="btn-edit"
                          label="Edit"
                          className="btn ml-7 bg-bg-button border-none hover:bg-red-500 text-white"
                          onClick={() => navigate(`/editUpdate/${item.id}`)}
                        />
                        <Button
                          id="btn-hapus"
                          label="Delete"
                          className="btn ml-7 bg-bg-button border-none hover:bg-red-500 text-white"
                        />
                      </div>
                    </div>
                  </>
                );
              })}
            </>
          )}
        </div>
      </div>
      <div className="text-center w-full">
        <Button
          id="btn-loadMore"
          label="Load More"
          className="bg-bg-button w-10/12 lg:w-3/12 mt-10 rounded-lg py-4 text-white font-poppins font-semibold hover:bg-red-600 text-xl"
        />{" "}
        Load More
      </div>
      <h1 className="text-slate-500 font-bold font-poppins text-center mt-10 pb-10 text-xl">
        Copyright @2023 StayApp
      </h1>
    </Layout>
  );
};

export default DaftarUpload;
