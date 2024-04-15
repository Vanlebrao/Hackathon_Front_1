import * as S from './styles'
import trofeu from '../../../../assets/trofeu.jpg'
import { useCallback, useEffect, useState } from 'react';

export default function PerfilHome(){
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [dayWeek, setDayWeek] = useState('');
    const [day, setDay] = useState(0);
    const [year, setYear] = useState(0);
    const [month, setMonth] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            getHour();
            getDate()
        }, 1000);

        return () => clearInterval(intervalId);
    }, []); 

    const getHour = useCallback(() =>{
        const date = new Date();
        const minuto = JSON.stringify(date).split('T')[1].split(':')[1];
        const hora = Number(JSON.stringify(date).split('T')[1].split(':')[0]);

        setHour(hora - 3);
        setMinute(minuto);
    }, [hour, minute])

    const getDate = useCallback(()=>{
        const date = new Date();
        const diaSemanaNumero = date.getDay();
        const yearNow = date.getFullYear()
        const dayNow = date.getUTCDate()

        const monthCurrent = date.getMonth()
        const mesesAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

        const monthNow = mesesAno[monthCurrent]

        
        const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
        const dayWeekNow = diasSemana[diaSemanaNumero];

        setDay(Number(dayNow));
        setYear(Number(yearNow));
        setDayWeek(dayWeekNow);
        setMonth(monthNow)
    })
    return(
        <S.WrapperPerfil>
            <S.Perfil>
                <S.PhotoPerfil>
                    <img src={trofeu}/>
                </S.PhotoPerfil>
                <S.Hello>
                    <S.TitlePerfil>Bom dia,<span> Leonardo</span> !</S.TitlePerfil>
                    <S.SubTitlePerfil>Hora de Organizar seus Estudos</S.SubTitlePerfil>
                </S.Hello>
            </S.Perfil>
            <S.WrapperDate>
                {!hour && !minute 
                ? <>
                    <S.Hour>--:--</S.Hour>
                </>
                :<>
                    <S.Hour>{hour < 10? `0${hour}`: hour}:{minute}</S.Hour>
                    <S.Date>{dayWeek}, {day} {month} {year}</S.Date>
                </>
                }  
            </S.WrapperDate>
        </S.WrapperPerfil>
    )
}