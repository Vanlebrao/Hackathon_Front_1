import * as C from './styles';
import Logo from '../../assets/logo.png';

export const Login = () => {
    return (
        <C.Wrapper>
            <C.Container>
                <C.Logo src={Logo} alt="Logo" />
                <C.AreaInput>
                    <C.InputLogin type="text" placeholder="Username" />
                    <C.InputLogin type="password" placeholder="Password" />
                    <p>Forgot Password</p>
                    <C.ButtonLogin>Login</C.ButtonLogin>
                </C.AreaInput>                                
            </C.Container>            
        </C.Wrapper>        
    );
}