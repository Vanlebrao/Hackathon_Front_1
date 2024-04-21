import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const Container = styled.div`
    background-color: #acc0a1;
    border-radius: 30px;
    width: 600px;
    padding: 70px;
`;

export const InputsMain = styled.div`
    max-width: 300px;       
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Input = styled.input`
    font-size: 20px;
    border: none;
    background-color: #acc0a1;
`;

export const Button = styled.button`
    background-color: #73cc43;
    color: #FFF;
    width: 90px;
    border-radius: 30px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    border: none;
    padding: 5px 55px;
    margin-top: 30px;
    cursor: pointer;

    &:hover {
        opacity: .8;
    }
`;