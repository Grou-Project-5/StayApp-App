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
    path: "/landingPageListing",
    element: <Hosting />,
  },
  {
    path: "/listHosting",
    element: <ListHosting />,
  },
  {
    path: "/uploadHosting",
    element: <UploadHosting />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
