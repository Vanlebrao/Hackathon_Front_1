import styled from 'styled-components'


export const PomodoroApp = styled.div`
    width: 400px;
    min-height: 350px;
    border-radius: 25px;
    background-color: #e6e6e6;
    box-shadow: 1px 1px 15px black;
    padding: 15px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

`

export const Status = styled.div`
    width: 80%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 25px;
    background-color: ${props => props.theme.colors.light_green_500};
    padding: 0 10px 0 10px;
    color: #fff;
`
export const StatusStudy= styled.div`
    height: 80%;
    width: 50%;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background-color: ${({isRunning, isBreak, theme}) => isRunning && !isBreak ? theme.colors.purple_500 : theme.colors.green_500};

`

export const StatusBreak= styled.div`
    height: 80%;
    width: 50%;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background-color: ${({isBreak, theme}) => isBreak ? theme.colors.purple_500 : theme.colors.green_500};

`

export const TimerCard = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${props => props.theme.colors.purple_500};
`
export const Timer = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 8px;
    color: ${({ isFinishing, theme }) => !isFinishing ? theme.colors.purple_500  : theme.colors.light_red_500};
    font-size: ${({isRunning}) => !isRunning ? "65px" : "56px"};
    font-weight: 600;
    animation: ${({ isFinishing }) => isFinishing ? "alerta 1s infinite" : "none"};


    @keyframes alerta {
        from {
                opacity: 0.1;
        }

        to {
                opacity: 1;
        }
    }
`

export const TimerBar = styled.div`
    width:  100%;
    height: 5px;
    margin-bottom: 5px;
`

export const TimerProgress = styled.div`
    width: ${({progress}) => `${progress}%`};
    height: 10px;
	border-radius: 20px;
    background-color: ${({ isFinishing, theme }) => !isFinishing ? theme.colors.purple_500  : theme.colors.light_red_500 };
`

export const Controls = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-around;

`
export const PrimaryButton = styled.div`
    width: 150px;
    height: 50px;
    display: flex;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    background-color: ${props => props.theme.colors.light_green_500};
    color: #fff;
    cursor: pointer;

    &:hover{
        background-color: ${props => props.theme.colors.light_green_500};
    }

    &:active{
        background-color: ${props => props.theme.colors.light_green_500};
    }
`
export const SecondButton = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.purple_500};
    color: #fff;
    cursor: pointer;

    &:hover{
        background-color: ${props => props.theme.colors.purple_500};
    }

    &:active{
        background-color: ${props => props.theme.colors.purple_500};
    }


`
export const CiclosWrapper = styled.div`
    gap: 20px;
    color: ${props => props.theme.colors.purple_500};
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;  

    & div{
        width: 40px;
        height: 40px;
        border-radius: 10px;
        border: 3px solid ${props => props.theme.colors.purple_500};

        display: flex;
        align-items: center;
        justify-content: center;  
        
        font-size: 14px;


    }
`
