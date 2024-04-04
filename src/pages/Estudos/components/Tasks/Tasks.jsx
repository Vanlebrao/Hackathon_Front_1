import * as S from './styles'
import { TaskItem } from './components/TaskItem/TaskItem';


const fakeData =[
    {
        id: 1,
        title: "Estudar Logica de programacao",
        status: true,
        hour: "01:00"
    },
    {
        id: 2,
        title: "Estudar React",
        status: false,
        hour: "02:00"
    },
    {
        id: 3,
        title: "Fazer Exercicios Node",
        status: true,
        hour: "01:00"
    },
    {
        id: 4,
        title: "Academia",
        status: false,
        hour: "01:20"
    },
    {
        id: 5,
        title: "Ler  livro",
        status: true,
        hour: "01:00"
    },
]

export function Tasks(){

    return(
    <S.TasksApp> 
        <S.TaskHeader>
           <S.Title>Tarefas Dia <span>{`(${fakeData.length} pendentes)`}</span></S.Title> 
        </S.TaskHeader>
        <S.TaskContainer>
            {fakeData.map((item) => (
                <TaskItem 
                    key={item.id}
                    title={item.title}
                    hour={item.hour}
                    status={item.status}
                />
            ))}
        </S.TaskContainer>
       
        
    </S.TasksApp>
    )
}