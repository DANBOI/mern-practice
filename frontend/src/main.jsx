import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/Home";
import Login from "./pages/Login";
// import Signup from "./pages/Signup";

import "bootstrap/dist/css/bootstrap.min.css";

// frontend router for multiple pages using outlet
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<Home />} />
      <Route index={true} path="/login" element={<Login />} />
      {/* <Route index={true} path="/signup" element={<Signup />} /> */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
