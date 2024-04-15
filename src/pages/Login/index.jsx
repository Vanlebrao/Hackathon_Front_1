import * as C from './styles';
import Logo from '../../assets/logo.png';


export const Login = () => {

    return (
        <C.Wrapper>
            <C.Container>
                <C.Logo src={Logo} alt="Logo" />
                <C.AreaInput>
                    <C.InputLogin type="text" placeholder="Seu Email" />
                    <C.InputLogin type="password" placeholder="Sua Senha" />
                    <p>Esqueci Minha Senha</p>
                    <C.ButtonLogin>Login</C.ButtonLogin>
                </C.AreaInput>                                
            </C.Container>            
        </C.Wrapper>        
    );
}