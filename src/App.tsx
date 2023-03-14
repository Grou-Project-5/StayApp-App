import React from "react";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {}
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
