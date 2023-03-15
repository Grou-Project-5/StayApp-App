import Login from "pages/Auth/Login";
import Register from "pages/Auth/Register";
import DetailHomestay from "pages/DetailHomestay";
import { DetailPesanan, KonfirmasiPemesanan } from "pages/Order";
import Homepage from "pages/Homepage";
import React from "react";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import Profile from "pages/Profile";
import { Hosting, ListHosting, UploadHosting } from "pages/Hosting";
import useCookies from "react-cookie/cjs/useCookies";
import axios from "axios";

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
      element: checkToken ? <DetailPesanan /> : <Login />,
    },
    {
      path: "/konfirmasiPemesanan",
      element: checkToken ? <KonfirmasiPemesanan /> : <Login />,
    },
    {
      path: "/profile",
      element: checkToken ? <Profile /> : <Login />,
    },
    {
      path: "/landingPageListing",
      element: checkToken ? <Hosting /> : <Login />,
    },
    {
      path: "/listHosting",
      element: checkToken ? <ListHosting /> : <Login />,
    },
    {
      path: "/uploadHosting",
      element: checkToken ? <UploadHosting /> : <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
