import { Route, Routes, useNavigate } from "react-router-dom";

import { Home } from '../pages/Home/Home'
import { Calendar } from "../pages/Calendar/Calendar";
import { Pomodoro } from "../pages/Pomodoro/Pomodor";
import { useEffect } from "react";

  export default function RoutesApp({isAuthenticated}) {

    const navigate = useNavigate()

    const isAuth = () => {
      !isAuthenticated  && navigate("/login")
    }

    useEffect(() => {
      isAuth()
    }, [isAuthenticated])

    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/pomodoro" element={<Pomodoro />} />
        </Routes>

    );
  }