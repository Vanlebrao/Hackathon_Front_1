import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyles } from "./globalStyles";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Calendar } from "./pages/Calendar/Calendar";
import { Estudos } from "./pages/Estudos/Estudos";
import { Login } from "./pages/Login";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="home" element={<Home />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="estudos" element={<Estudos />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Navigate to={"login"} />} />
      </Routes>
    </BrowserRouter>
    <GlobalStyles />
  </>,

  {
    /* </React.StrictMode> */
  },
);
