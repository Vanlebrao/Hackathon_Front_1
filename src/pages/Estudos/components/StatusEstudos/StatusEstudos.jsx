import * as S from './styles'
import { useState, useEffect } from 'react';
import pendente from '../../../../assets/pendente.png'
import concluido from '../../../../assets/concluido.png'

import { week } from '../../../../data/fakeDb';
export function StatusEstudos(){
    const [progress, setProgress] = useState(60)
    const [isFinish, setIsFinish] = useState(false)
 
    const [aulas, setAulas] = useState()
    const [pronto, setPronto] = useState(0)
    const [dayWeek, setDayWeek] = useState('');

    const [totalAulas, setTotalAulas] = useState(0)

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
        aulas && aulas.filter((aula) => aula.status === `pronto` && setPronto(current => current += 1)) 
        return 
    },[dayWeek, aulas])

    useEffect(() => {
        aulas && setTotalAulas(aulas.length)
        setProgress(Math.floor((pronto / totalAulas)*100))
        if(pronto>=totalAulas){
            setIsFinish(true)
        }else{
            setIsFinish(false)
        }
        return
    }, [aulas, pronto])

console.log(isFinish);
    return(
    <S.StatusEstudosApp> 
        <S.StatusTasks>
            <S.StatusTasksImg>
            <S.WrapperImg>
                <img src={pronto >= totalAulas ? concluido : pendente} alt="" />

                </S.WrapperImg>
                <S.WrapperImgText isFinish={isFinish}>
                {pronto >= totalAulas
                    ?  
                    <>
                    <p>Parabens!!!</p> 
                        <S.WrapperImgSubText>
                            <p>Voce possui nao possui mais nenhum tarefa pendente </p>
                        </S.WrapperImgSubText> 
                    </>
                    :
                    <>
                    <p>Urgente!</p>         
                        <S.WrapperImgSubText>
                            <p>Voce possui </p>
                            <S.PendenciasQuantity>
                                {totalAulas - pronto}
                            </S.PendenciasQuantity>
                            <p> Tarefas Pendentes</p>
                        </S.WrapperImgSubText> 
                    </> 
                }
                               
                </S.WrapperImgText>     
            </S.StatusTasksImg>
            <S.StatusNumberTasks isFinish={isFinish}>
                <span>{aulas && `${pronto}/${totalAulas}`}</span>
            </S.StatusNumberTasks>
        </S.StatusTasks>
        <S.TimerBar isFinish={isFinish}>
            <p>{progress}%</p>
            <S.TimerProgress progress={progress} isFinish={isFinish} />
        </S.TimerBar>
    </S.StatusEstudosApp>
    )
}