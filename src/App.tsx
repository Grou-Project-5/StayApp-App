import Login from "pages/Auth/Login";
import Register from "pages/Auth/Register";
import DetailHomestay from "pages/DetailHomestay";
import DetailPesanan from "pages/DetailPesanan";
import Homepage from "pages/Homepage";
import React from "react";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";

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
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
