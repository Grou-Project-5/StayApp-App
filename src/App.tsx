import Login from "pages/Auth/Login";
import Register from "pages/Auth/Register";
import DetailHomestay from "pages/DetailHomestay";
import { DetailPesanan, KonfirmasiPemesanan } from "pages/Order";
import Homepage from "pages/Homepage";
import React from "react";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import useCookies from "react-cookie/cjs/useCookies";
import axios from "axios";
import Profile from "pages/Profile";
import EditProfile from "pages/EditProfile";
import ListHomestay from "pages/ListingHomestay";
import DaftarUpload from "pages/DaftarUpload";
import UploadNew from "pages/UploadNewHomestay";
import DeactivateAcc from "pages/DeactivateAcc";
import EditUpdate from "pages/EditUpdateHomestay";

const App = () => {
  const [cookie, , removeCookie] = useCookies(["token"]);
  const checkToken = cookie.token;

  axios.interceptors.request.use(function (config) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${cookie.token}`;
    return config;
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/detailHomestay",
      element: <DetailHomestay />,
    },
    {
      path: "/detailPesanan",
      element: <DetailPesanan />,
    },
    {
      path: "/konfirmasiPemesanan",
      element: <KonfirmasiPemesanan />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/editProfile",
      element: <EditProfile />,
    },
    {
      path: "/listHomestay",
      element: <ListHomestay />,
    },
    {
      path: "/daftarUpload",
      element: <DaftarUpload />,
    },
    {
      path: "/deact",
      element: <DeactivateAcc />,
    },
    {
      path: "/uploadNew",
      element: <UploadNew />,
    },
    {
      path: "/editUpdate",
      element: <EditUpdate />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
