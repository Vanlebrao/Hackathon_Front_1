import { Pomodoro } from './components/Pomodoro/Pomodoro'
import { StatusEstudos } from './components/StatusEstudos/StatusEstudos'
import { Tasks } from './components/Tasks/Tasks'
import * as S from './styles'

export function Estudos(){
    return(
        <S.ContainerEstudos>
            <S.EstudosWrapper>
                <S.StatusWrapper>
                    <Pomodoro />
                    <StatusEstudos />
                </S.StatusWrapper>
                <Tasks />
            </S.EstudosWrapper>
        </S.ContainerEstudos>
        

    )
}