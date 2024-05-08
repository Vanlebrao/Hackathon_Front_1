import * as C from "./styles";
import Logo from "../../assets/logo.png";
import { FaRegEyeSlash } from "react-icons/fa6";
import { theme } from "../../../theme";

import { useForm } from "react-hook-form";
import apiHackathon from "../../config/axiosConfig";
import { useNavigate } from "react-router-dom";
import useBearStore from "../../state/state";
import { useEffect } from "react";

export const Login = () => {
  const navigate = useNavigate();
  const setIsUserValid = useBearStore((state) => state.setIsUserValid);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (props) => {
    try {
      const { data } = await apiHackathon.post("/sessions", {
        email: props.email,
        password: props.password,
      });
      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("name", data.name);
        setIsUserValid(true);
        navigate("/home");
      }
    } catch (error) {}
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsUserValid(true);
      navigate("/home");
    }
  }, []);

  return (
    <C.Wrapper theme={theme.colors}>
      <div>
        <img src="" alt="" />
      </div>

      <C.Container theme={theme.colors}>
        <C.Logo src={Logo} alt="Logo" />

        <C.AreaInput onSubmit={handleSubmit(handleLogin)}>
          <C.InputLogin
            type="text"
            placeholder="Seu Email"
            {...register("email")}
          />
          <C.InputLogin
            type="password"
            placeholder="Sua Senha"
            {...register("password")}
          />
          <div className="forget">
            <FaRegEyeSlash />
            <p>Esqueci minha senha</p>
          </div>
          <C.ButtonLogin theme={theme.colors} type="submit">
            Login
          </C.ButtonLogin>
        </C.AreaInput>
      </C.Container>
    </C.Wrapper>
  );
};
