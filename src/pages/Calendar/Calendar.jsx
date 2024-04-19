import { ColunaTable } from "./ColunaTable/ColunaTable"
import * as S from "./styles"

import { useQuery } from "@tanstack/react-query";

import { FaPlus } from "react-icons/fa";

import { week } from "../../data/fakeDb"
import apiHackathon from "../../config/axiosConfig";
import { useEffect, useState } from "react";

export function Calendar(){

    const [dataWeekDay, setDataWeekDay] = useState()
    const [dataClass, setDataClass] = useState()
    const [newArray, setNewArray] = useState()

    const fetchWeekDays = useQuery({
        queryKey: ['week-days'],
        queryFn: async () => {
          try {
            const { data } = await apiHackathon.get('/weekday');        
            return data;
          } catch (error) {
            throw new Error('Erro ao buscar dias da semana: ' + error.message);
          }
        }
      });

      const fetchClass = useQuery({
        queryKey: ['class'],
        queryFn: async () => {
          try {
            const { data } = await apiHackathon.get('/class');
            return data;
          } catch (error) {
            throw new Error('Erro ao buscar dias da semana: ' + error.message);
          }
        }
      });

      useEffect(() => {
        setDataWeekDay(fetchWeekDays.data)
        if(dataWeekDay){
            console.log(dataWeekDay);
        }
      }, [fetchWeekDays])

      useEffect(() => {
        setDataClass(fetchClass.data)
        if(dataClass){
            console.log(dataClass[0].weekday);
        }
      }, [dataClass])


    return (
        <>    
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
                {dataWeekDay && dataWeekDay.map((day) => (
                <S.ColunaHeader key={day.id}>
                    {day.name.toUpperCase()}
                </S.ColunaHeader>
                ))}
            </S.WeekWrapper>
            <S.WeekWrapper>   
               {week.map((day) => (
                    <ColunaTable key={day.id} day={day.day} aulas={day.aulas}/>
                ))} 
            </S.WeekWrapper>         
        </S.ContainerCalendar>
        </>
    )
}