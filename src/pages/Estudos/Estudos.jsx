import { Pomodoro } from './components/Pomodoro/Pomodoro'
import { Tasks } from './components/Tasks/Tasks'
import * as S from './styles'

export function Estudos(){
    return(
        <S.ContainerEstudos>
            <S.EstudosWrapper>
                <div>
                    <Pomodoro />
                </div>
                <Tasks />
            </S.EstudosWrapper>
        </S.ContainerEstudos>
        

    )
}