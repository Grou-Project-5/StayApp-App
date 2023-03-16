import React from "react";
import { Link } from "react-router-dom";

import Input from "components/Input";
import Layout from "components/Layout";
import Button from "components/Button";
import img1 from "../assets/img-1 (1).webp";

const EditUpdate = () =>{
    return(
        <Layout>
            <div className="grid-cols-3 flex justify-between items-center">
                <div className="text-center w-full">
                    <Link to="/">
                        <Button
                            id="btn-back"
                            label="Kembali"
                            className="bg-bg-button w-40 lg:w-3/12 mt-10 rounded-lg py-4 text-white font-poppins font-semibold hover:bg-red-600 text-xl"
                            
                        />
                    </Link>
                </div>
                <p className="text-black flex font-extrabold font-poppins text-2xl">Upload Data Homestay</p>
                <div className="text-center w-full">
                        <Button
                            id="btn-update"
                            label="Update"
                            className="bg-bg-button w-96 lg:w-4/12 mt-10 ml-15 rounded-lg py-4 text-white font-poppins font-semibold hover:bg-red-600 text-xl"
                        />
                </div>
            </div>
            <div className="flex justify-center pl-5 pr-5 mr-5 ml-5 mt-10 overflow-hidden">
                <img
                    className="h-96 w-9/12 bg-no-repeat bg-center bg-auto rounded-xl"
                    src={img1} 
                    alt="img-header" 
                />
            </div>

            <div className="wrap flex justify-center">
                <div className="form-control bg-white font-poppins mt-8 border-spacing-2">
                    <label className="input-group">
                        <span>Choose File</span>
                        <input type="text" placeholder="No File Choosen" className="bg-white input input-bordered" />
                    </label>
                </div>
            </div>

            <div className="wrap gap-2 flex">
                <div className="flex-1">
                    <div className="form-control w-96 pl-20 ml-48 mt-20">
                        <label className="label">
                            <span className="label-text text-black font-poppins font-bold">Nama Tempat</span>
                        </label>
                        <input type="text" placeholder="Private Beach Villa - cook, dolphins, snorkeling" className="input input-bordered w-full max-w-xs bg-white font-poppins text-xs" />
                    </div>
                    <div className="form-control w-96 pl-20 ml-48 mt-7">
                        <label className="label">
                            <span className="label-text text-black font-poppins font-bold">Alamat</span>
                        </label>
                        <textarea className="textarea textarea-bordered bg-white text-xs font-poppins" placeholder="Private Beach Villa - cook, dolphins, snorkeling"></textarea>
                    </div>
                    <div className="form-control w-96 pl-20 ml-48 mt-7">
                        <label className="label">
                            <span className="label-text text-black font-poppins font-bold">Deskripsi Tempat</span>
                        </label>
                        <textarea className="w-50 h-60 textarea textarea-bordered bg-white text-xs font-poppins" placeholder="The villa is located in the middle of the nature and culture of the north of Bali, between the beach and the rice fields, in a quiet bay with dolphins, away from "></textarea>
                    </div>
                    <div className="form-control w-96 pl-20 ml-48 mt-7">
                        <label className="label">
                            <span className="label-text text-black font-poppins font-bold">Ketersediaan</span>
                        </label>
                        <input type="text" placeholder="Avalaible" className="input input-bordered w-full max-w-xs bg-white font-poppins text-xs" />
                    </div>
                    <div className="form-control w-96 pl-20 ml-48 mt-7">
                        <label className="label">
                            <span className="label-text text-black font-poppins font-bold">Alasan Homestay Tidak Tersedia (*jika memilih tidak tersedia) </span>
                        </label>
                        <textarea className="w-50 h-60 textarea textarea-bordered bg-white text-xs font-poppins" placeholder="The villa is located in the middle of the nature and culture of the north of Bali, between the beach and the rice fields, in a quiet bay with dolphins, away from "></textarea>
                    </div>
                    <div className="flex-row form-control w-96 pl-20 ml-48 mt-7">
                            <div className="flex-1">
                                <label className="label">
                                    <span className="label-text text-black font-poppins font-bold text-center">Pilih Periode Waktu (*jika memilih tersedia) </span>
                                </label>
                                <select className="select select-bordered w-full max-w-xs bg-white font-poppins text-black">
                                    <option disabled selected>12.00</option>
                                    <option>13.00</option>
                                    <option>14.00</option>
                                </select>
                            </div>
                            <div className="flex-col space-x-3">
                                <label className="label ">
                                    <span className="ml-3 label-text text-black font-poppins font-bold mt-10"></span>
                                </label>
                                <select className="select select-bordered w-full max-w-xs bg-white font-poppins text-black">
                                    <option disabled selected>15.00</option>
                                    <option>16.00</option>
                                    <option>17.00</option>
                                    <option>18.00</option>
                                    <option>19.00</option>
                                    <option>20.00</option>
                                </select>
                            </div>
                    </div>
                </div>
                <div className="flex-col">
                    <div className="form-control w-96 pr-20 mr-48 mt-20">
                        <label className="label">
                            <span className="label-text text-black font-poppins font-bold">Harga Per Malam</span>
                        </label>
                        <input type="text" placeholder="Private Beach Villa - cook, dolphins, snorkeling" className="input input-bordered w-full max-w-xs bg-white font-poppins text-xs" />
                    </div>
                    <div className="form-control w-96 pr-20 mr-48 mt-7">
                        <label className="label">
                            <span className="label-text text-black font-poppins font-bold">Biaya Kebersihan</span>
                        </label>
                        <input type="text" placeholder="Private Beach Villa - cook, dolphins, snorkeling" className="input input-bordered w-full max-w-xs bg-white font-poppins text-xs" />
                    </div>
                    <div className="form-control w-96 pr-20 mr-48 mt-7">
                        <label className="label">
                            <span className="label-text text-black font-poppins font-bold">Biaya Layanan</span>
                        </label>
                        <input type="text" placeholder="Private Beach Villa - cook, dolphins, snorkeling" className="input input-bordered w-full max-w-xs bg-white font-poppins text-xs" />
                    </div>
                    <div className="form-control w-96 pr-20 mr-48 mt-7">
                        <label className="label">
                            <span className="label-text text-black font-poppins font-bold">Contact Person</span>
                        </label>
                        <input type="text" placeholder="Private Beach Villa - cook, dolphins, snorkeling" className="input input-bordered w-full max-w-xs bg-white font-poppins text-xs" />
                    </div>
                </div>
            </div>

            <div className="wrap gap-2 flex">
                <div className="flex-1">
                    <p className="text-black font-poppins font-bold pl-20 ml-48 mt-40 mb-10">Fasilitas Yang Ditawarkan: </p>
                    <div className="form-control w-96 pl-20 ml-48 mt-10">
                            <label className="label">
                                <span className="label-text text-black font-poppins font-bold">Akses Khusus</span>
                            </label>
                            <input type="text" placeholder="Akses Khusus ke Pantai Pribadi" className="input input-bordered w-full max-w-xs bg-white font-poppins text-xs" />
                        </div>
                        <div className="flex-row form-control w-96 pl-20 ml-48 mt-7">
                            <div className="flex-1">
                                <label className="label">
                                    <span className="label-text text-black font-poppins font-bold">Jumlah Kamar Tidur</span>
                                </label>
                                <select className="select select-bordered w-full max-w-xs bg-white font-poppins text-black">
                                    <option disabled selected>4 Kamar Tidur</option>
                                    <option>3 Kamar Tidur</option>
                                    <option>2 Kamar Tidur</option>
                                    <option>1 Kamar Tidur</option>
                                </select>
                            </div>
                            <div className="flex-col space-x-3">
                                <label className="label ">
                                    <span className="ml-3 label-text text-black font-poppins font-bold">Jumlah Ruangan</span>
                                </label>
                                <select className="select select-bordered w-full max-w-xs bg-white font-poppins text-black">
                                    <option disabled selected>6 Ruangan</option>
                                    <option>5 Ruangan</option>
                                    <option>4 Ruangan</option>
                                    <option>3 Ruangan</option>
                                    <option>2 Ruangan</option>
                                    <option>1 Ruangan</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-control w-96 pl-20 ml-48 mt-7">
                            <label className="label">
                                <span className="label-text text-black font-poppins font-bold">Apakah Memiliki Dapur?</span>
                            </label>
                            <select className="select select-bordered w-full max-w-xs bg-white font-poppins text-black">
                                <option disabled selected>Ya</option>
                                <option>Tidak</option>
                            </select>
                        </div>
                        <div className="form-control w-96 pl-20 ml-48 mt-7">
                            <label className="label">
                                <span className="label-text text-black font-poppins font-bold">Apakah Memiliki Wifi?</span>
                            </label>
                            <select className="select select-bordered w-full max-w-xs bg-white font-poppins text-black">
                                <option disabled selected>Ya</option>
                                <option>Tidak</option>
                            </select>
                        </div>
                        <div className="form-control w-96 pl-20 ml-48 mt-7">
                            <label className="label">
                                <span className="label-text text-black font-poppins font-bold">Apakah Memiliki Akses Parkir/Garasi?</span>
                            </label>
                            <select className="select select-bordered w-full max-w-xs bg-white font-poppins text-black">
                                <option disabled selected>Ya</option>
                                <option>Tidak</option>
                            </select>
                        </div>
                        <div className="form-control w-96 pl-20 ml-48 mt-7">
                            <label className="label">
                                <span className="label-text text-black font-poppins font-bold">Fitur Unggulan Lain</span>
                            </label>
                            <textarea className="w-50 h-60 textarea textarea-bordered bg-white text-xs font-poppins" placeholder="Memiliki Kolam Renang Pribadi 24 Jam."></textarea>
                        </div>
                </div>
                <div className="flex-col">
                    <p className="text-black font-poppins font-bold pr-20 mr-48 mt-40 mb-10">Peraturan Rumah: </p>
                    <div className="form-control w-96 pr-20 mr-48 mt-10">
                        <label className="label">
                            <span className="label-text text-black font-poppins font-bold">Waktu Check-In: </span>
                        </label>
                        <select className="select select-bordered w-full max-w-xs bg-white font-poppins text-black">
                            <option disabled selected>12.00</option>
                            <option>13.00</option>
                            <option>14.00</option>
                        </select>
                    </div>
                    <div className="form-control w-96 pr-20 mr-48 mt-7">
                        <label className="label">
                            <span className="label-text text-black font-poppins font-bold">Waktu Check-Out (Sebelum): </span>
                        </label>
                        <select className="select select-bordered w-full max-w-xs bg-white font-poppins text-black">
                            <option disabled selected>12.00</option>
                            <option>13.00</option>
                            <option>14.00</option>
                        </select>
                    </div>
                    <div className="form-control w-96 pr-20 mr-48 mt-7">
                        <label className="label">
                            <span className="label-text text-black font-poppins font-bold">Maksimal Pengunjung</span>
                        </label>
                            <input type="text" placeholder="8" className="input input-bordered w-full max-w-xs bg-white font-poppins text-xs" />
                        </div>
                    <div className="form-control w-96 pr-20 mr-48 mt-7">
                        <label className="label">
                            <span className="label-text text-black font-poppins font-bold">Apakah Pengunjung Diizinkan Membawa Hewan Peliharaan?</span>
                        </label>
                        <select className="select select-bordered w-full max-w-xs bg-white font-poppins text-black">
                            <option disabled selected>Ya</option>
                            <option>Tidak</option>
                        </select>
                    </div>
                    <div className="form-control w-96 pr-20 mr-48 mt-7">
                        <label className="label">
                            <span className="label-text text-black font-poppins font-bold">Apakah Pengunjung Diizinkan Melakukan Pemotretan Komersial?</span>
                        </label>
                        <select className="select select-bordered w-full max-w-xs bg-white font-poppins text-black">
                            <option disabled selected>Ya</option>
                            <option>Tidak</option>
                        </select>
                    </div>
                    <div className="form-control w-96 pr-20 mr-48 mt-7">
                        <label className="label">
                            <span className="label-text text-black font-poppins font-bold">Apakah Pengunjung Diizinkan Melakukan Pesta?</span>
                        </label>
                        <select className="select select-bordered w-full max-w-xs bg-white font-poppins text-black">
                            <option disabled selected>Ya</option>
                            <option>Tidak</option>
                        </select>
                    </div>
                    <div className="form-control w-96 pr-20 mr-48 mt-7">
                        <label className="label">
                            <span className="label-text text-black font-poppins font-bold">Peraturan Tambahan</span>
                        </label>
                        <textarea className="w-50 h-60 textarea textarea-bordered bg-white text-xs font-poppins" placeholder="Memiliki Kolam Renang Pribadi 24 Jam."></textarea>
                    </div>
                </div>
            </div>
            <h1 className="text-slate-500 font-bold font-poppins text-center mt-20 pb-10 text-xl">
                Copyright @2023 StayApp
            </h1>
        </Layout>
    )
}

export default EditUpdate;