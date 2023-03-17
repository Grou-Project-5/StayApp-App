import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Input from "components/Input";
import Layout from "components/Layout";
import Button from "components/Button";
import img1 from "assets/img-1 (1).webp";
import { useCookies } from "react-cookie";

import axios from "axios";
import withReactContent from "sweetalert2-react-content";
import Swal from "utils/Swal";
import { getDataHomestay } from "utils/Datatypes";

const UploadNew = () => {
  const navigate = useNavigate();
  const [cookie, setCookie] = useCookies(["token"]);
  const checkToken = cookie.token;
  const [loading, setLoading] = useState<boolean>(false);
  const [submitHomestay, setSubmitHOmestay] = useState<getDataHomestay>({});

  const MySwal = withReactContent(Swal);

  const [pictures, setPictures] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [max_visitors, setMaxVisitors] = useState<string>("");
  const [special_access, setSpecialAccess] = useState<string>("");
  const [availability, setAvailibility] = useState<string>("Available");
  const [bedroom, setBedroom] = useState<number>(0);
  const [room_total, setRoomTotal] = useState<number>(0);
  const [kitchen, setKitchen] = useState<string>("");
  const [wifi, setWifi] = useState<string>("");
  const [garage, setGarage] = useState<string>("");
  const [excellent_features, setExcellentFEatures] = useState<string>("");
  const [cleaning_fee, setCleaningFee] = useState<number>(0);
  const [service_fee, setServiceFee] = useState<number>(0);
  const [bring_animal, setBringAnimal] = useState<string>("");
  const [check_in, setCheckIn] = useState<string>("");
  const [check_out, setCheckOut] = useState<string>("");
  const [take_photo, setTakePhoto] = useState<string>("");
  const [other, setOther] = useState<string>("");
  const [user_phone, setUserPhone] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File>();

  const handlePostSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData();

    const body = {
      pictures,
      name,
      price,
      description,
      location,
      max_visitors,
      special_access,
      bedroom,
      room_total,
      kitchen,
      wifi,
      garage,
      excellent_features,
      cleaning_fee,
      service_fee,
      bring_animal,
      check_in,
      check_out,
      take_photo,
      other,
    };

    axios
      .post("https://group5.altapro.online/rooms", body, {
        headers: {
          Authorization: `Bearer ${checkToken}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        const { message } = res.data;

        MySwal.fire({
          title: "Data Successfully Added",
          text: message,
          showCancelButton: false,
        });

        navigate("/daftarUpload ");
      })
      .catch((err) => {
        const { message } = err.response.data;

        MySwal.fire({
          title: "Data Failed to Add",
          text: message,
          showCancelButton: false,
        });
      })
      .finally(() => setLoading(false));

    if (!selectedFile) {
      return;
    }
  };

  const handleChange = (
    value: string | File,
    key: keyof typeof submitHomestay
  ) => {
    let temp = { ...submitHomestay };
    temp[key] = value;
    setSubmitHOmestay(temp);
  };

  return (
    <Layout>
      <div className="grid-cols-3 flex justify-between items-center">
        <div className="text-center w-full">
          <Link to="/listHomestay">
            <Button
              id="btn-back"
              label="Kembali"
              className="bg-bg-button w-40 lg:w-3/12 mt-10 rounded-lg py-4 text-white font-poppins font-semibold hover:bg-red-600 text-xl"
            />
          </Link>
        </div>
        <p className="text-black fle-row font-extrabold font-poppins text-3xl items-center">
          Upload Homestay
        </p>
        <div className="text-center w-full">
          <Link to="/listHomestay">
            <Button
              id="btn-upload"
              label="Lihat Daftar Homestay"
              className="bg-bg-button w-96 lg:w-4/12 mt-10 ml-15 rounded-lg py-4 text-white font-poppins font-semibold hover:bg-red-600 text-xl"
            />
          </Link>
        </div>
      </div>
      <div className="flex justify-center pl-5 pr-5 mr-5 ml-5 mt-10 overflow-hidden">
        <img
          className="h-96 w-9/12 bg-no-repeat bg-center bg-auto rounded-xl"
          src={pictures}
          alt="img-header"
        />
      </div>

      <div className="wrap flex justify-center">
        <div className="form-control bg-white font-poppins mt-8 border-spacing-2">
          <label className="input-group">
            <span>Choose File</span>
            <input
              type="file"
              placeholder="No File Choosen"
              className="bg-white input input-bordered"
              onChange={(e) => {
                if (!e.currentTarget.files) {
                  return;
                }
                setPictures(URL.createObjectURL(e.currentTarget.files[0]));
                handleChange(e.currentTarget.files[0], "pictures");
              }}
            />
          </label>
        </div>
      </div>

      <div className="wrap gap-2 flex">
        <div className="flex-1">
          <div className="form-control w-96 pl-20 ml-48 mt-20">
            <label className="label">
              <span className="label-text text-black font-poppins font-bold">
                Nama Tempat
              </span>
            </label>
            <Input
              id="input-namaTempat"
              type="text"
              placeholder="Private Beach Villa - cook, dolphins, snorkeling"
              className="input input-bordered w-full max-w-xs bg-white font-poppins text-xs text-black"
              onChange={(e: any) => setName(e.target.value)}
            />
          </div>
          <div className="form-control w-96 pl-20 ml-48 mt-7">
            <label className="label">
              <span className="label-text text-black font-poppins font-bold">
                Alamat
              </span>
            </label>
            <textarea
              className="textarea textarea-bordered bg-white text-xs font-poppins text-black"
              placeholder="Private Beach Villa - cook, dolphins, snorkeling text-black "
              onChange={(e) => setLocation(e.target.value)}
            ></textarea>
          </div>
          <div className="form-control w-96 pl-20 ml-48 mt-7">
            <label className="label">
              <span className="label-text text-black font-poppins font-bold">
                Deskripsi Tempat
              </span>
            </label>
            <textarea
              className="w-50 h-60 textarea textarea-bordered bg-white text-xs font-poppins text-black"
              placeholder="The villa is located in the middle of the nature and culture of the north of Bali, between the beach and the rice fields, in a quiet bay with dolphins, away from text-black"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="form-control w-96 pl-20 ml-48 mt-7">
            <label className="label">
              <span className="label-text text-black font-poppins font-bold">
                Ketersediaan
              </span>
            </label>
            <Input
              id="input-ketersediaan"
              type="text"
              placeholder="Avalaible"
              value={availability}
              className="input input-bordered w-full max-w-xs bg-white font-poppins text-xs text-black"
            />
          </div>
        </div>
        <div className="flex-col">
          <div className="form-control w-96 pr-20 mr-48 mt-20">
            <label className="label">
              <span className="label-text text-black font-poppins font-bold">
                Harga Per Malam
              </span>
            </label>
            <Input
              id="input-price"
              type="number"
              placeholder="Private Beach Villa - cook, dolphins, snorkeling"
              className="input input-bordered w-full max-w-xs bg-white font-poppins text-xs text-black"
              onChange={(e: any) => setPrice(parseInt(e.target.value))}
            />
          </div>
          <div className="form-control w-96 pr-20 mr-48 mt-7">
            <label className="label">
              <span className="label-text text-black font-poppins font-bold">
                Biaya Kebersihan
              </span>
            </label>
            <Input
              id="input-cleaningfee"
              type="number"
              placeholder="Private Beach Villa - cook, dolphins, snorkeling"
              className="input input-bordered w-full max-w-xs bg-white font-poppins text-xs text-black"
              onChange={(e: any) => setCleaningFee(parseInt(e.target.value))}
            />
          </div>
          <div className="form-control w-96 pr-20 mr-48 mt-7">
            <label className="label">
              <span className="label-text text-black font-poppins font-bold">
                Biaya Layanan
              </span>
            </label>
            <input
              type="number"
              placeholder="Private Beach Villa - cook, dolphins, snorkeling"
              className="input input-bordered w-full max-w-xs bg-white font-poppins text-xs text-black"
              onChange={(e) => setServiceFee(parseInt(e.target.value))}
            />
          </div>
          <div className="form-control w-96 pr-20 mr-48 mt-7">
            <label className="label">
              <span className="label-text text-black font-poppins font-bold">
                Contact Person
              </span>
            </label>
            <input
              type="number"
              placeholder="Private Beach Villa - cook, dolphins, snorkeling"
              className="input input-bordered w-full max-w-xs bg-white font-poppins text-xs text-black"
              onChange={(e) => setUserPhone(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="wrap gap-2 flex">
        <div className="flex-1">
          <p className="text-black font-poppins font-bold pl-20 ml-48 mt-40 mb-10">
            Fasilitas Yang Ditawarkan:{" "}
          </p>
          <div className="form-control w-96 pl-20 ml-48 mt-10">
            <label className="label">
              <span className="label-text text-black font-poppins font-bold ">
                Akses Khusus
              </span>
            </label>
            <input
              type="text"
              placeholder="Akses Khusus ke Pantai Pribadi"
              className="input input-bordered w-full max-w-xs bg-white font-poppins text-xs text-black"
              onChange={(e) => setSpecialAccess(e.target.value)}
            />
          </div>
          <div className="flex-row form-control w-96 pl-20 ml-48 mt-7">
            <div className="flex-1">
              <label className="label">
                <span className="label-text text-black font-poppins font-bold">
                  Jumlah Kamar Tidur
                </span>
              </label>
              <input
                type="number"
                placeholder="Akses Khusus ke Pantai Pribadi"
                className="input input-bordered w-full max-w-xs bg-white font-poppins text-xs text-black"
                onChange={(e) => setBedroom(parseInt(e.target.value))}
              />
            </div>
            <div className="flex-col space-x-3">
              <label className="label ">
                <span className="ml-3 label-text text-black font-poppins font-bold">
                  Jumlah Ruangan
                </span>
              </label>
              <input
                type="number"
                placeholder="Akses Khusus ke Pantai Pribadi"
                className="input input-bordered w-full max-w-xs bg-white font-poppins text-xs text-black"
                onChange={(e) => setRoomTotal(parseInt(e.target.value))}
              />
            </div>
          </div>
          <div className="form-control w-96 pl-20 ml-48 mt-7">
            <label className="label">
              <span className="label-text text-black font-poppins font-bold">
                Apakah Memiliki Dapur?
              </span>
            </label>
            <select
              className="select select-bordered w-full max-w-xs bg-white font-poppins text-black"
              defaultValue={"DEFAULT"}
              onChange={(event: any) => setKitchen(event.target.value)}
            >
              <option disabled selected>
                Pilih Salah Satu
              </option>
              <option value="Akses Dapur Pribadi">Ya</option>
              <option value="Tidak memiliki akses dapur">Tidak</option>
            </select>
          </div>
          <div className="form-control w-96 pl-20 ml-48 mt-7">
            <label className="label">
              <span className="label-text text-black font-poppins font-bold">
                Apakah Memiliki Wifi?
              </span>
            </label>
            <select
              className="select select-bordered w-full max-w-xs bg-white font-poppins text-black"
              defaultValue={"DEFAULT"}
              onChange={(event: any) => setWifi(event.target.value)}
            >
              <option disabled selected>
                Pilih Salah Satu
              </option>
              <option value="Wifi">Ya</option>
              <option value="Tidak ada akses Wifi">Tidak</option>
            </select>
          </div>
          <div className="form-control w-96 pl-20 ml-48 mt-7">
            <label className="label">
              <span className="label-text text-black font-poppins font-bold">
                Apakah Memiliki Akses Parkir/Garasi?
              </span>
            </label>
            <select
              className="select select-bordered w-full max-w-xs bg-white font-poppins text-black"
              defaultValue={"DEFAULT"}
              onChange={(event: any) => setGarage(event.target.value)}
            >
              <option disabled selected>
                Pilih Salah Satu
              </option>
              <option value="Akses Parkir/Garasi">Ya</option>
              <option value="Tidak memiliki akses garasi">Tidak</option>
            </select>
          </div>
          <div className="form-control w-96 pl-20 ml-48 mt-7">
            <label className="label">
              <span className="label-text text-black font-poppins font-bold">
                Fitur Unggulan Lain
              </span>
            </label>
            <textarea
              className="w-50 h-60 textarea textarea-bordered bg-white text-xs font-poppins text-black"
              placeholder="Memiliki Kolam Renang Pribadi 24 Jam. text-black"
              onChange={(e) => setExcellentFEatures(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="flex-col">
          <p className="text-black font-poppins font-bold pr-20 mr-48 mt-40 mb-10">
            Peraturan Rumah:{" "}
          </p>
          <div className="form-control w-96 pr-20 mr-48 mt-10">
            <label className="label">
              <span className="label-text text-black font-poppins font-bold">
                Waktu Check-In:{" "}
              </span>
            </label>
            <input
              type="time"
              placeholder="Akses Khusus ke Pantai Pribadi"
              className="input input-bordered w-full max-w-xs bg-white font-poppins text-xs text-black"
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>
          <div className="form-control w-96 pr-20 mr-48 mt-7">
            <label className="label">
              <span className="label-text text-black font-poppins font-bold">
                Waktu Check-Out (Sebelum):{" "}
              </span>
            </label>
            <input
              type="time"
              placeholder="Akses Khusus ke Pantai Pribadi"
              className="input input-bordered w-full max-w-xs bg-white font-poppins text-xs text-black"
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>
          <div className="form-control w-96 pr-20 mr-48 mt-7">
            <label className="label">
              <span className="label-text text-black font-poppins font-bold">
                Maksimal Pengunjung
              </span>
            </label>
            <input
              type="text"
              placeholder="8"
              className="input input-bordered w-full max-w-xs bg-white font-poppins text-xs text-black"
              onChange={(e) => setMaxVisitors(e.target.value)}
            />
          </div>
          <div className="form-control w-96 pr-20 mr-48 mt-7">
            <label className="label">
              <span className="label-text text-black font-poppins font-bold">
                Apakah Pengunjung Diizinkan Membawa Hewan Peliharaan?
              </span>
            </label>
            <select
              className="select select-bordered w-full max-w-xs bg-white font-poppins text-black"
              defaultValue={"DEFAULT"}
              onChange={(event: any) => setBringAnimal(event.target.value)}
            >
              <option disabled selected>
                Pilih Salah Satu
              </option>
              <option value="Pengunjung Diperbolehkan Membawa Hewan Peliharaan">
                Ya
              </option>
              <option value="Pengunjung Tidak Diperbolehkan Membawa Hewan Peliharaan">
                Tidak
              </option>
            </select>
          </div>
          <div className="form-control w-96 pr-20 mr-48 mt-7">
            <label className="label">
              <span className="label-text text-black font-poppins font-bold">
                Apakah Pengunjung Diizinkan Melakukan Pemotretan Komersial?
              </span>
            </label>
            <select
              className="select select-bordered w-full max-w-xs bg-white font-poppins text-black"
              defaultValue={"DEFAULT"}
              onChange={(event: any) => setTakePhoto(event.target.value)}
            >
              <option disabled selected>
                Pilih Salah Satu
              </option>
              <option value="Pengunjung Diizinkan Melakukan Sesi Pemotretan Komersil">
                Ya
              </option>
              <option value="Pengunjung Tidak Diizinkan Melakukan Sesi Pemotretan Komersil">
                Tidak
              </option>
            </select>
          </div>

          <div className="form-control w-96 pr-20 mr-48 mt-7">
            <label className="label">
              <span className="label-text text-black font-poppins font-bold">
                Peraturan Tambahan
              </span>
            </label>
            <textarea
              className="w-50 h-60 textarea textarea-bordered bg-white text-xs font-poppins text-black"
              placeholder="Memiliki Kolam Renang Pribadi 24 Jam."
              onChange={(e) => setOther(e.target.value)}
            ></textarea>
          </div>
          <Button
            id="btn-upload"
            label="Upload Homestay"
            className="bg-bg-button w-96 lg:w-4/12 mt-10 ml-15 rounded-lg py-4 text-white font-poppins font-semibold hover:bg-red-600 text-xl"
            onClick={(e: any) => handlePostSubmit(e)}
          />
        </div>
      </div>
      <h1 className="text-slate-500 font-bold font-poppins text-center mt-20 pb-10 text-xl">
        Copyright @2023 StayApp
      </h1>
    </Layout>
  );
};

export default UploadNew;
