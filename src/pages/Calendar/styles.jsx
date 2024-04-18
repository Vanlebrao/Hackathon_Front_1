import styled from "styled-components"

export const ContainerCalendar = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    border-radius: 25px;
    background-color: ${props => props.theme.colors.white};
    box-shadow: 1px 1px 15px${props => props.theme.colors.gray_600};
    padding: 15px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`
export const CalendarHeader = styled.div`
    width: 98%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 40px;
`
export const Title = styled.div`
    font-size: 24px;
    font-weight: 700;
    color:${props => props.theme.colors.purple_500};
`
export const Controls = styled.div`
    width: 250px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 10px 10px;
    gap: 10px;
`

export const Button = styled.button`
    width: 45px;
    height: 45px;
    padding: 5px;
    border: none;
    border-radius: 10px;
    background-color: ${props => props.theme.colors.purple_500};
    color: ${props => props.theme.colors.white};
    cursor: pointer;


    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
        filter: brightness(0.9)
    }
    &:active{
        filter: brightness(0.7)
    }

`

export const WeekWrapper = styled.div`
    width: 100%;
    min-height: 99px;
    overflow: auto;
    display: flex;
    padding: 15px;
    gap: 10px;
`

export const ColunaHeader = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.purple_500};
    color: ${props => props.theme.colors.white};
    padding: 5px;
    border-radius:6px;

`

