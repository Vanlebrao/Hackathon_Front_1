import * as S from './styles'
import { TaskItem } from './components/TaskItem/TaskItem';

import { week } from '../../../../data/fakeDb';
import { useEffect, useState } from 'react';

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
    
    const [aulas, setAulas] = useState()
    const [pendentes, setPendentes] = useState(0)

    useEffect(()=> {
        week.filter((item) => item.day === `segunda` && setAulas(item.aulas))  
    },[])

    useEffect(()=> {
        setPendentes(0)
        aulas && aulas.filter((aula) => aula.status === `pendente` && setPendentes(current => current +=1))  
    },[aulas])

    return(
    <S.TasksApp> 
        <S.TaskHeader>
           <S.Title>Tarefas Dia <span>{pendentes &&`( ${pendentes}/${aulas.length} pendentes )`}</span></S.Title> 
        </S.TaskHeader>
        <S.TaskContainer>
            {aulas && aulas.map((item) => (
                <TaskItem 
                    key={item.id}
                    title={item.materia}
                    hour={item.tempo}
                    status={item.status}
                />
            ))}
        </S.TaskContainer>
       
        
    </S.TasksApp>
    )
}