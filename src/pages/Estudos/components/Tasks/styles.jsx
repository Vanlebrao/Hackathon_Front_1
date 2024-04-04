import styled from 'styled-components'



export const TasksApp = styled.div`
    width: 600px;
    height: 100%;
    border-radius: 25px;
    background-color: ${props => props.theme.colors.gray_200};
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 1px 1px 15px black;

`

export const TaskContainer = styled.div`
    width: 100%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:8px;
    overflow: auto;

`
export const TaskHeader = styled.div`
    width: 100%;
    display: flex;


`

export const Title = styled.div`
    padding:15px;
    font-size: 16px;

    & span{
        font-size: 13px;
        color: ${props => props.theme.colors.gray_600};
    }


`

