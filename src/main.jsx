import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyles } from "./globalStyles";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Calendar } from "./pages/Calendar/Calendar";
import { Estudos } from "./pages/Estudos/Estudos";
import { Login } from "./pages/Login";
import { TrackingHabits } from "./pages/TrackingHabits";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="home" element={<Home />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="estudos" element={<Estudos />} />
          <Route path="habitos" element={<TrackingHabits />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Navigate to={"login"} />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
    <GlobalStyles />
  </>,

  {
    /* </React.StrictMode> */
  },
);
