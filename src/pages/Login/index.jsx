import * as C from './styles';
import Logo from '../../assets/logo.png';
import { FaRegEyeSlash } from "react-icons/fa6";
import { theme } from '../../../theme';

import { useForm } from "react-hook-form"
import apiHackathon from '../../config/axiosConfig';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const handleLogin = async (props) => {
        try {
            const {data} = await apiHackathon.post('/sessions', {
                email: props.email,
                password: props.password
            })
            const token = data.token
            if(token){
                localStorage.setItem('token', token)
               navigate('/')
            }         
        } catch (error) {
            console.log(error);
        }
      }
    return (
        <C.Wrapper theme={theme.colors}>
            <C.Container theme={theme.colors}>
                <C.Logo src={Logo} alt="Logo" />

                <C.AreaInput>
                    <C.InputLogin type="text" placeholder="Seu Email" />
                    <C.InputLogin type="password" placeholder="Sua Senha" />
                    <div className="icon">
                        <FaRegEyeSlash />
                    </div>                    
                    <div className="forgot-password">
                        <p>Esqueci minha senha</p>
                    </div>                    
                    <C.ButtonLogin theme={theme.colors}>Login</C.ButtonLogin>
                    <div className="register">
                        <p>Cadastre-se</p>
                    </div>

                </C.AreaInput>                                
            </C.Container>            
        </C.Wrapper>        
    );
}