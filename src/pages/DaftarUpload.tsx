import React from "react";

import Layout from "components/Layout";
import Card from "components/Card";

import img1 from "../assets/img-1 (1).webp";
import Button from "components/Button";

const DaftarUpload = () =>{
    return(
        <Layout>
           <div className="grid-cols-3 flex justify-between items-center">
                <div className="text-center w-full">
                        <Button
                            id="btn-back"
                            label="Kembali"
                            className="bg-bg-button w-52 lg:w-3/12 mt-10 rounded-lg py-4 text-white font-poppins font-semibold hover:bg-red-600 text-xl"
                        />
                </div>
                <h1 className="text-black font-extrabold font-poppins text-3xl justify-center items-center">Homestayku</h1>
                <div className="text-center w-full">
                        <Button
                            id="btn-upload"
                            label="Upload Homestay Baru"
                            className="bg-bg-button w-96 lg:w-3/12 mt-10 ml-15 rounded-lg py-4 text-white font-poppins font-semibold hover:bg-red-600 text-xl"
                        />
                </div>
           </div>
            <div className="w-full min-h-screen flex justify-center pl-6 mt-10 overflow-hidden">
                <div className="font-poppins lg:grid lg:grid-cols-3 grid-cols-1 gap-2 overflow-hidden">
                    <Card
                    image={img1}
                    place="Bali, Indonesia"
                    avail="Available"
                    price="$200/Malam"
                    />
                    <Card
                    image={img1}
                    place="Lombok, Indonesia"
                    avail="Unavailable"
                    price="$200/Malam"
                    />
                    <Card
                    image={img1}
                    place="Lombok, Indonesia"
                    avail="Unavailable"
                    price="$200/Malam"
                    />
                    <Card
                    image={img1}
                    place="Lombok, Indonesia"
                    avail="Unavailable"
                    price="$200/Malam"
                    />
                    <Card
                    image={img1}
                    place="Lombok, Indonesia"
                    avail="Unavailable"
                    price="$200/Malam"
                    />
                    <Card
                    image={img1}
                    place="Lombok, Indonesia"
                    avail="Unavailable"
                    price="$200/Malam"
                    />
                    <Card
                    image={img1}
                    place="Lombok, Indonesia"
                    avail="Unavailable"
                    price="$200/Malam"
                    />
                    <Card
                    image={img1}
                    place="Lombok, Indonesia"
                    avail="Unavailable"
                    price="$200/Malam"
                    />
                    <Card
                    image={img1}
                    place="Lombok, Indonesia"
                    avail="Unavailable"
                    price="$200/Malam"
                    />
                </div>
            </div>
            <div className="text-center w-full">
                <Button
                    id="btn-loadMore"
                    label="Load More"
                    className="bg-bg-button w-10/12 lg:w-3/12 mt-10 rounded-lg py-4 text-white font-poppins font-semibold hover:bg-red-600 text-xl"
                /> Load More
            </div>
            <h1 className="text-slate-500 font-bold font-poppins text-center mt-10 pb-10 text-xl">
                Copyright @2023 StayApp
            </h1>
        </Layout>
    )
};

export default DaftarUpload;