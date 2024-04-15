import styled from "styled-components"

export const ContainerColunaTable= styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 5px;
`
export const CelContent= styled.div`
    width: 100%;
    padding: 8px;
    min-height: 70px;
    cursor: pointer;

    background-color: 
    ${({status, theme}) => status === 'pendente' 
        ? theme.colors.gray_600
        : status === 'iniciado' 
        ? theme.colors.light_blue_700
        : theme.colors.light_green_700
    };
    color: ${({theme}) => theme.colors.white};

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius:6px;

    
    &:hover{
        filter: brightness(0.9)
    }
    &:active{
        filter: brightness(0.7)
    }


`

