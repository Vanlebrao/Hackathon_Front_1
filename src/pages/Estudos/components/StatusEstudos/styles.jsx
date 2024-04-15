import styled from 'styled-components'


export const StatusEstudosApp = styled.div`
    min-width: 350px;
    height: 180px;
    border-radius: 25px;
    background-color: ${props => props.theme.colors.gray_100};
    box-shadow: 1px 1px 15px ${props => props.theme.colors.gray_600};
    padding: 15px;
    gap:20px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

`
export const StatusTasks = styled.div`
    width: 100%;
    padding: 15px;
    flex: 1;
    display: flex;
    justify-content: space-between;
`

export const StatusTasksImg = styled.div`
    /* width: 100%; */
    height: 50px;
    display: flex;
    gap: 15px;
    align-items: center;

`

export const WrapperImg = styled.div`
    width: 50px;
    height: 50px;
    overflow:hidden;
    border-radius:15px;

    & img{
        width: 100%;
    }

`


export const WrapperImgText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    
    
    & p {
        font-size: 32px;
        font-weight: bold;
        color: ${props => props.theme.colors.light_red_600};
    }

    & span{ 
        font-size:14px;
        color: ${props => props.theme.colors.gray_600};
    }
`
export const WrapperImgSubText = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

    & p {
        font-size: 12px;
        font-weight: normal;
        color: ${props => props.theme.colors.gray_600};
    }
`




export const StatusNumberTasks = styled.div`
    display: flex;
    gap: 5px;
    font-weight: bold;
    font-size: 42px;
    color: ${props => props.theme.colors.light_red_600};
`
export const TimerBar = styled.div`
    width:  100%;
    height: 30px;
    margin-bottom: 5px;
`

export const TimerProgress = styled.div`
    width: ${({progress}) => `${progress}%`};
    height: 30px;
	border-radius: 5px;
    background-color: ${({ isFinishing, theme }) => !isFinishing ? theme.colors.purple_500  : theme.colors.light_red_500 };
`

export const PendenciasQuantity = styled.div`
    font-size: 18px;
    font-weight: bold;
    color: ${props => props.theme.colors.light_red_600};
`
