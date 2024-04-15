import * as S from './styles'
import { useState, useEffect } from 'react';
import pendente from '../../../../assets/pendente.png'

import { week } from '../../../../data/fakeDb';
export function StatusEstudos(){
    const [progress, setProgress] = useState(100)
 
    const [aulas, setAulas] = useState()
    const [pronto, setPronto] = useState(0)
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
        setPronto(0)
        aulas && aulas.filter((aula) => aula.status === `pronto` && setPronto(current => current +=1)) 
    },[dayWeek, aulas])

    return(
    <S.StatusEstudosApp> 
        <S.StatusTasks>
            <S.StatusTasksImg>
            <S.WrapperImg>
                    <img src={pendente} alt="" />
                </S.WrapperImg>
                <S.WrapperImgText>
                    <p>Urgente!</p>
                    <S.WrapperImgSubText>
                        <p>Voce possui </p>
                         <S.PendenciasQuantity>
                            {aulas && aulas.length - pronto }
                        </S.PendenciasQuantity>
                        <p> Tarefas Pendentes</p>
                    </S.WrapperImgSubText>             
                </S.WrapperImgText>     
            </S.StatusTasksImg>
            <S.StatusNumberTasks>
                <span>{aulas && `${pronto}/${aulas.length}`}</span>
            </S.StatusNumberTasks>
        </S.StatusTasks>
        <S.TimerBar >
            <S.TimerProgress progress={progress} />
        </S.TimerBar>
    </S.StatusEstudosApp>
    )
}