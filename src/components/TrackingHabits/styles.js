import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: ${props => props.theme.light_gray_300};
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-bottom: 70px;
`;

export const ContainerDays = styled.div`  
    background-color: ${props => props.theme.light_green_300};
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    justify-items: center;    
    height: 400px;
    width: 700px;
`;

export const Input = styled.div`
    input {
        background-color: ${props => props.theme.gray_100};
        width: 700px;
        border: 1px solid rgba(0, 0, 0, 0.8);
        border-bottom: none;
        padding: 10px 5px;
        font-size: 18px;
    }
`;

export const Days = styled.div`    
    background-color: ${props => props.theme.light_green_300};
    border: 1px solid rgba(0, 0, 0, 0.8);
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;     
    cursor: pointer; 
`;