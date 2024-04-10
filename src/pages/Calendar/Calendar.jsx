import { ColunaTable } from "./ColunaTable/ColunaTable"
import * as S from "./styles"

import { FaPlus } from "react-icons/fa";

import { week } from "../../data/fakeDb"

export function Calendar(){
    return (
        <S.ContainerCalendar>
            <S.CalendarHeader>
                <S.Title>CRONOGRAMA SEMANAL</S.Title>
                <S.Controls>
                    <S.Button>
                        <FaPlus />
                    </S.Button>
                </S.Controls>
            </S.CalendarHeader>
            <S.WeekWrapper>   
                {week.map((day) => (
                <S.ColunaHeader>
                    {day.day.toUpperCase()}
                </S.ColunaHeader>
                ))}
            </S.WeekWrapper>
            <S.WeekWrapper>   
                {week.map((day) => (
                    <ColunaTable key={day.id} day={day.day} aulas={day.aulas}/>
                ))}
            </S.WeekWrapper>
            
        </S.ContainerCalendar>
    )
}