import { Route, Routes, useNavigate } from "react-router-dom";

import { Calendar } from "../pages/Calendar/Calendar";
import { Home } from '../pages/Home/Home';
import { Estudos } from "../pages/Estudos/Estudos";
import { useEffect } from "react";

  export default function RoutesApp({token}) {

    const navigate = useNavigate()

    const isAuth = () => {
      !token && navigate("/login")
    }
  
    useEffect(() => {
      isAuth()
    }, [token])

    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/estudos" element={<Estudos />} />
        </Routes>

    );
  }