import React from "react";

import imgList1 from "assets/john.webp";
import imgList2 from "assets/nelbali.webp";

const list = {
    backgroundImage: `url(${imgList1})`,
    width: "100%",
    height: "auto",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
}

const upload = {
    backgroundImage: `url(${imgList2})`,
    width: "100%",
    height: "auto",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
}

const ListHomestay = () =>{
    return(
        <div className="w-full min-h-screen flex flex-row">
                <div
                    className="lg:flex flex-row hidden flex-1 justify-center items-center text-4xl font-bold text-white font-poppins"
                    style={list}
                >
                    Daftar Homestay yang Anda Listing
                </div>
                <div
                    className="lg:flex flex-row hidden flex-1 justify-center items-center text-5xl font-bold text-white font-poppins"
                    style={upload}
                >
                    Upload Homestay
                </div>
        </div>
    )
}

export default ListHomestay;