import * as C from './styles';
import Logo from '../../assets/logo.png';
import { FaRegEyeSlash } from "react-icons/fa6";
import { theme } from '../../../theme';


export const Login = () => {

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