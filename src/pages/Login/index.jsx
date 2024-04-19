import * as C from './styles';
import Logo from '../../assets/logo.png';

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
        <C.Wrapper>
            <C.Container>
                <C.Logo src={Logo} alt="Logo" />
                <C.AreaInput onSubmit={handleSubmit(handleLogin)}>
                    <C.InputLogin type="text" placeholder="Seu Email" {...register('email')}/>
                    <C.InputLogin type="password" placeholder="Sua Senha"  {...register('password')}/>
                    <p>Esqueci Minha Senha</p>
                    <C.ButtonLogin type="submit">Login</C.ButtonLogin>
                </C.AreaInput>                                
            </C.Container>            
        </C.Wrapper>        
    );
}