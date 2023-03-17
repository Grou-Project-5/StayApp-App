import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Input from "components/Input";
import Layout from "components/Layout";
import Button from "components/Button";
import img1 from "../assets/img-1 (1).webp";
import axios from "axios";
import { useCookies } from "react-cookie";
import { getDataHomestay } from "utils/Datatypes";
import withReactContent from "sweetalert2-react-content";
import Swal from "utils/Swal";
import { useNavigate } from "react-router-dom";

const EditUpdate = () => {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const [loading, setLoading] = useState<boolean>(false);
  const [cookie, setCookie] = useCookies(["token"]);
  const checkToken = cookie.token;
  const [homestayData, setHomestayData] = useState<getDataHomestay>({});

  const [updateHomestay, setUpdateHomestay] = useState<getDataHomestay>({});

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

  const { id } = useParams();
  const fetchDataGetUpdate = () => {
    axios
      .get(`https://group5.altapro.online/rooms/${id}`, {
        headers: {
          Authorization: `Bearer ${checkToken}`,
        },
      })
      .then((res) => {
        const { data } = res.data;
        setHomestayData(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchDataGetUpdate();
  }, []);

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();

    const formData = new FormData();
    let key: keyof typeof updateHomestay;
    for (key in updateHomestay) {
      formData.append(key, updateHomestay[key]);
    }

    axios
      .put(`https://group5.altapro.online/rooms/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${checkToken}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        const { message } = res.data;
        setPictures(res.data.picture);

        MySwal.fire({
          title: "Data Successfully Updated",
          text: message,
          showCancelButton: false,
        });
        navigate("/daftarUpload");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  };

  const handleChange = (
    value: string | File,
    key: keyof typeof updateHomestay
  ) => {
    let temp = { ...updateHomestay };
    temp[key] = value;
    setUpdateHomestay(temp);
  };

  return (
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
        <p className="text-black w-full  text-center flex font-extrabold font-poppins text-2xl">
          Upload Data Homestay
        </p>
        <div className="text-center w-full">
          <Button
            id="btn-update"
            label="Update"
            className="bg-bg-button w-96 lg:w-4/12 mt-10 ml-15 rounded-lg py-4 text-white font-poppins font-semibold hover:bg-red-600 text-xl"
            onClick={(e: any) => handleUpdate(e)}
          />
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
            <Input
              id="input-file"
              type="file"
              className="file-input h-10 w-10/12 lg:w-full lg:max-w-xs flex justify-center bg-white mx-auto mt-5 border-none"
              onChange={(e: any) => {
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
              defaultValue={homestayData.name}
              placeholder="Private Beach Villa - cook, dolphins, snorkeling"
              className="input input-bordered w-full max-w-xs bg-white font-poppins text-xs text-black"
              onChange={(e: any) => handleChange(e.target.value, "name")}
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
              defaultValue={homestayData.location}
              placeholder="Private Beach Villa - cook, dolphins, snorkeling text-black "
              onChange={(e: any) => handleChange(e.target.value, "location")}
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
              defaultValue={homestayData.description}
              placeholder="The villa is located in the middle of the nature and culture of the north of Bali, between the beach and the rice fields, in a quiet bay with dolphins, away from text-black"
              onChange={(e: any) => handleChange(e.target.value, "description")}
            ></textarea>
          </div>
          <div className="form-control w-96 pl-20 ml-48 mt-7">
            <label className="label">
              <span className="label-text text-black font-poppins font-bold">
                Ketersediaan
              </span>
            </label>
            <select
              className="select select-bordered w-full max-w-xs bg-white font-poppins text-black"
              defaultValue={homestayData.availability}
              onChange={(e: any) =>
                handleChange(e.target.value, "availability")
              }
            >
              <option disabled selected>
                Pilih Salah Satu
              </option>
              <option value="Available">Ya</option>
              <option value="Not Available">Tidak</option>
            </select>
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
              defaultValue={homestayData.price}
              placeholder="Private Beach Villa - cook, dolphins, snorkeling"
              className="input input-bordered w-full max-w-xs bg-white font-poppins text-xs text-black"
              onChange={(e: any) => handleChange(e.target.value, "price")}
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
              defaultValue={homestayData.cleaning_fee}
              placeholder="Private Beach Villa - cook, dolphins, snorkeling"
              className="input input-bordered w-full max-w-xs bg-white font-poppins text-xs text-black"
              onChange={(e: any) =>
                handleChange(e.target.value, "cleaning_fee")
              }
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
              defaultValue={homestayData.service_fee}
              placeholder="Private Beach Villa - cook, dolphins, snorkeling"
              className="input input-bordered w-full max-w-xs bg-white font-poppins text-xs text-black"
              onChange={(e: any) => handleChange(e.target.value, "service_fee")}
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
              defaultValue={homestayData.user_phone}
              placeholder="Private Beach Villa - cook, dolphins, snorkeling"
              className="input input-bordered w-full max-w-xs bg-white font-poppins text-xs text-black"
              onChange={(e: any) => handleChange(e.target.value, "user_phone")}
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
              defaultValue={homestayData.special_access}
              onChange={(e: any) =>
                handleChange(e.target.value, "special_access")
              }
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
                defaultValue={homestayData.bedroom}
                onChange={(e: any) => handleChange(e.target.value, "bedroom")}
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
                defaultValue={homestayData.room_total}
                onChange={(e: any) =>
                  handleChange(e.target.value, "room_total")
                }
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
              defaultValue={homestayData.kitchen}
              onChange={(e: any) => handleChange(e.target.value, "kitchen")}
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
              defaultValue={homestayData.wifi}
              onChange={(e: any) => handleChange(e.target.value, "wifi")}
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
              defaultValue={homestayData.garage}
              onChange={(e: any) => handleChange(e.target.value, "garage")}
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
              defaultValue={homestayData.excellent_features}
              onChange={(e: any) =>
                handleChange(e.target.value, "excellent_features")
              }
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
              defaultValue={homestayData.check_in}
              onChange={(e: any) => handleChange(e.target.value, "check_in")}
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
              defaultValue={homestayData.check_out}
              onChange={(e: any) => handleChange(e.target.value, "check_out")}
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
              defaultValue={homestayData.max_visitors}
              onChange={(e: any) =>
                handleChange(e.target.value, "max_visitors")
              }
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
              defaultValue={homestayData.bring_animal}
              onChange={(e: any) =>
                handleChange(e.target.value, "bring_animal")
              }
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
              defaultValue={homestayData.take_photo}
              onChange={(e: any) => handleChange(e.target.value, "take_photo")}
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
              defaultValue={homestayData.other}
              onChange={(e: any) => handleChange(e.target.value, "other")}
            ></textarea>
          </div>
        </div>
      </div>
      <h1 className="text-slate-500 font-bold font-poppins text-center mt-20 pb-10 text-xl">
        Copyright @2023 StayApp
      </h1>
    </Layout>
  );
};

export default EditUpdate;
