import { Login } from "../pages/Login/index";
import { Route, Routes } from "react-router-dom";

export default function PublicRoutes() {
    return (
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>

    );
  }