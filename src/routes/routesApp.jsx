import { Route, Routes } from "react-router-dom";

import { Home } from '../pages/Home/Home'
import { Calendar } from "../pages/Calendar/Calendar";
import { Pomodoro } from "../pages/Pomodoro/Pomodor";

  export default function RoutesApp() {
    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/pomodoro" element={<Pomodoro />} />
        </Routes>

    );
  }