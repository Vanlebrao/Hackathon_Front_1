import styled from 'styled-components'


export const ModalContainer = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: #ffcdcd39;
    filter: blur(50%);

    display: flex;
    align-items:center;
    justify-content:center;
`

export const ModalWrapper = styled.div`
    width: 500px;
    min-height:450px;
    border-radius: 20px;
    box-shadow: 0px 0px 20px black;
    background: ${props => props.theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;
`

export const ModalHeader = styled.div`
    width: 100%;
    padding: 3px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const ModalContent = styled.div`
    width: 100%;
    flex:1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

export const InputWrapper = styled.div`
    width: 80%;

    display: flex;
    flex-direction: column;
    align-items: center;
    
`
export const InputLabel = styled.label`
    width: 100%;
    padding: 8px; 
    font-size: 16px;
    font-weight: bold;
    color: ${props => props.theme.colors.purple_500};

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Input = styled.input`
       -webkit-appearance: none;
        appearance: none;
        width: 100%;
        border-radius: 5px;
        outline: none;

    &::-webkit-slider-runnable-track {
        width: 100%;
        height: 15px;
        border-radius: 5px;
        background:  ${props => props.theme.colors.light_green_500};
    }

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 20px;
        height: 20px;
        border-radius: 20%;
        background: ${props => props.theme.colors.purple_500};
        cursor: pointer;
    }

`

export const Value = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 10px;
    border: 3px solid ${props => props.theme.colors.purple_500};

    display: flex;
    align-items: center;
    justify-content: center;  
    
    font-size: 18px;
    font-weight: bold;
    color: ${props => props.theme.colors.purple_500};
    
`

export const Button = styled.button`
        width: 150px;
        padding: 4px;
        border-radius: 10px;
        border: 3px solid ${props => props.theme.colors.purple_500};
        margin-top: 10px ; 

        display: flex;
        align-items: center;
        justify-content: center;  
        
        font-size: 16px;
        font-weight: bold;
        color: ${props => props.theme.colors.purple_500};
        cursor: pointer;

        &:hover{
            background-color: 
            ${props => props.theme.colors.purple_500};
            color: ${props => props.theme.colors.white};
        }
`