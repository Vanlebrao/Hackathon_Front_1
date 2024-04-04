import styled from "styled-components"

export const TaskItem = styled.div`
    width:100%;
    padding: 10px 15px;
    background-color: ${props => props.theme.colors.white};
    border-radius:20px;
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 10px;
    cursor: pointer;
`

export const Selected = styled.div`
    width:25px;
    height:25px;
    border: 2px solid ${props => props.theme.colors.light_green_500};
    border-radius:50px;
    color: ${props => props.theme.colors.white};
    font-weight: bold;
   
    background-color: ${(props) => !props.status 
        ? props.theme.colors.white 
        : props.theme.colors.light_green_500
    };

    display: flex;
    justify-content: center;
    align-items: center;

`

export const Image = styled.div`
    width:60px;
    height:60px;
    background-color: ${props => props.theme.colors.gray_200};
    border-radius:10px;
    display:flex;
    align-items:center;
    justify-content:center;
`
export const Infos = styled.div`
    flex:1;
    display:flex;
    flex-direction: column;
    padding: 15px;
    gap:5px;
`

export const Title = styled.div`
    flex:1;
    display:flex;
    color:${props => props.status && props.theme.colors.gray_400 };
    text-decoration: ${props => props.status ? "line-through" : "none" };
    font-style: ${props => props.status ? "italic" : "normal" };
`

export const Description = styled.div`
    flex:1;
    display:flex;
    justify-content: space-between;
    font-size: 10px;
    color: gray;
`
