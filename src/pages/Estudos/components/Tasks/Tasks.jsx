import * as S from './styles'
import { TaskItem } from './components/TaskItem/TaskItem';

import { week } from '../../../../data/fakeDb';
import { useEffect, useState } from 'react';

export function Tasks(){
    
    const [aulas, setAulas] = useState()
    const [pendentes, setPendentes] = useState(0)
    const [dayWeek, setDayWeek] = useState('');

    function getDayWeek() {
        const date = new Date();
        const dayWeekNumber = date.getDay();
        const dayWeekList = ['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'];
        const daWeekName = dayWeekList[dayWeekNumber];
        setDayWeek(daWeekName)  
        week.filter((item) => item.day === dayWeek && setAulas(item.aulas)) 
    }
    
    useEffect(()=> {
        getDayWeek()
        setPendentes(0)
        aulas && aulas.filter((aula) => aula.status === `pendente` && setPendentes(current => current +=1)) 
    },[dayWeek, aulas])

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