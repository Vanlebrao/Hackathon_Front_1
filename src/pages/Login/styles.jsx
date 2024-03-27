import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #CCC;
    height: 100vh;
`;

export const Container = styled.div`
    background: linear-gradient(90deg, rgba(142,139,144,1) 41%, rgba(122,150,141,1) 50%);
    display: flex;  
    flex-direction: column; 
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    min-width: 425px;
    height: 550px;

`;

export const Logo = styled.img`
    width: 100px;
    height: 100px;
`;

export const AreaInput = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    margin-top: 15%;
    width: 90%;

    p {
        color: #63384a;
        cursor: pointer;
    }
`;

export const InputLogin = styled.input`
    padding: 15px;
    font-size: 18px;
    border-radius: 30px;
    border: 2px solid #1e6e36;
    width: 100%;
    font-size: 20px;
    color: #63384a;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    &::placeholder {
        color: #63384a;
    }

`

export const ButtonLogin = styled.button`
    background-color: #63384a;
    opacity: .8;
    padding: 5px 50px;
    color: #FFF;
    border: none;
    border-radius: 30px;
    margin-top: 30px;
    font-size: 25px;
    font-weight: bold;
    transition: all .3s ease;
    cursor: pointer;

    &:hover {
        opacity: .6;
    }

    &:active {
        opacity: .8;
    }
`;