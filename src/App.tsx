import React from "react";
import { RouterProvider } from "react-router";
import { Navigate, createBrowserRouter } from "react-router-dom";
import useCookies from "react-cookie/cjs/useCookies";
import axios from "axios";

import Login from "pages/Auth/Login";
import Register from "pages/Auth/Register";
import DetailHomestay from "pages/DetailHomestay";
import { DetailPesanan, KonfirmasiPemesanan } from "pages/Order";
import Homepage from "pages/Homepage";
import Profile from "pages/Profile";
import EditProfile from "pages/EditProfile";
import ListHomestay from "pages/ListingHomestay";
import DaftarUpload from "pages/DaftarUpload";
import UploadNew from "pages/UploadNewHomestay";
import DeactivateAcc from "pages/DeactivateAcc";
import EditUpdate from "pages/EditUpdateHomestay";
import UlasanRating from "pages/UlasanRating";
import History from "pages/HistoryPemesanan";

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
      path: "/detailHomestay/:id",
      element: checkToken ? <DetailHomestay /> : <Navigate to="/" />,
    },
    {
      path: "/detailPesanan",
      element: checkToken ? <DetailPesanan /> : <Navigate to="/" />,
    },
    {
      path: "/konfirmasiPemesanan",
      element: checkToken ? <KonfirmasiPemesanan /> : <Navigate to="/" />,
    },
    {
      path: "/profile/:id",
      element: checkToken ? <Profile /> : <Navigate to="/" />,
    },
    {
      path: "/editProfile/:id",
      element: checkToken ? <EditProfile /> : <Navigate to="/" />,
    },
    {
      path: "/listHomestay",
      element: checkToken ? <ListHomestay /> : <Navigate to="/" />,
    },
    {
      path: "/daftarUpload",
      element: checkToken ? <DaftarUpload /> : <Navigate to="/" />,
    },
    {
      path: "/deact",
      element: checkToken ? <DeactivateAcc /> : <Navigate to="/" />,
    },
    {
      path: "/uploadNew",
      element: checkToken ? <UploadNew /> : <Navigate to="/" />,
    },
    {
      path: "/editUpdate/:id",
      element: checkToken ? <EditUpdate /> : <Navigate to="/" />,
    },
    {
      path: "/ulasanRating",
      element: checkToken ? <UlasanRating /> : <Navigate to="/" />,
    },
    {
      path: "/history",
      element: checkToken ? <History /> : <Navigate to="/" />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
