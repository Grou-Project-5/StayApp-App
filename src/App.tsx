import React from "react";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";

import Login from "pages/Auth/Login";
import Register from "pages/Auth/Register";
import DetailHomestay from "pages/DetailHomestay";
import { DetailPesanan } from "pages/Order";
import { KonfirmasiPemesanan } from "pages/Order";
import Homepage from "pages/Homepage";
import Profile from "pages/Profile";
import EditProfile from "pages/EditProfile";
import ListHomestay from "pages/ListingHomestay";
import DaftarUpload from "pages/DaftarUpload";
import UploadNew from "pages/UploadNewHomestay";

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
    path: "/uploadNew",
    element: <UploadNew />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
