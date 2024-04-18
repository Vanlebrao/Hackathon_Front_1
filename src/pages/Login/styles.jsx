import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.light_gray_300};
    height: 100vh;
`;

export const Container = styled.div`    
    background-color: ${props => props.theme.white};
    display: flex;  
    flex-direction: column; 
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    min-width: 500px;
    height: 750px;

`;

export const Logo = styled.img`
    width: 100px;
    height: 100px;
    margin-top: -30%;
    position: absolute;
`;

export const AreaInput = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    margin-top: 15%;
    width: 90%;
    position: relative;

    .icon {
        position: absolute;
        right: 10px;
        top: 90px;
        font-size: 13px;
        color: #63384a;
        cursor: pointer;
    }

    .forgot-password {
        color: #63384a;
        position: absolute;
        left: 8px;
        top: 127px;
        font-size: 13px;        
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }

    .register {        
        color: #63384a;
        position: absolute;
        right: 10px;
        top: 287px;
        font-size: 13px;
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export const InputLogin = styled.input`
    padding: 10px;
    font-size: 15px;
    border-radius: 10px;
    border: 1px solid #1e6e36;
    width: 100%;
    color: #63384a;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    &::placeholder {
        color: #63384a;
        font-size: 15px;
    }

`

export const ButtonLogin = styled.button`
    background-color: ${props => props.theme.light_green_300};
    opacity: .8;
    padding: 10px;
    width: 100%;
    color: ${props => props.theme.white};
    border: none;
    border-radius: 10px;
    margin-top: 90px;
    font-size: 15px;
    font-weight: bold;
    transition: all .3s ease;
    cursor: pointer;

    &:hover {
        opacity: .6;
        color: #63384a;
    }

    &:active {
        opacity: .8;
    }
`;