import styled from "styled-components";

export const LayoutContainer = styled.div`
    background-color: ${props => props.theme.colors.gray_900};
    width: 100vw;
    height: 100vh;
    display: flex;
`

export const LayoutMain = styled.div`
    width: 100%;
    height: 90%;
`

export const LayoutPages = styled.div`
    flex: 1;  
    height: 100%;  
    border-radius: 20px 0 0 0;
    background-color: #f4f0ff;
    padding: 20px;
    overflow-y: scroll;
`

