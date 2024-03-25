import * as C from './styles';
import Logo from '../../assets/logo.png';

export const Login = () => {
    return (
        <C.Wrapper>
            <C.Container>
                <C.Logo src={Logo} alt="Logo" />
                <C.AreaInput>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <p>Forgot Password</p>
                    <C.ButtonLogin>Login</C.ButtonLogin>
                </C.AreaInput>                                
            </C.Container>            
        </C.Wrapper>        
    );
}