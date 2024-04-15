import { useEffect } from "react";
import { Login } from "../pages/Login/index";
import { Route, Routes, useNavigate } from "react-router-dom";

export default function PublicRoutes({token}) {

  const navigate = useNavigate();

  const handleClick = () => {
      if(token){
          navigate("/");
      }
  }
  useEffect(() =>{
      handleClick()
  }, [token])

 
    return (
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>

    );
  }