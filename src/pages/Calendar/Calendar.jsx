import { ColunaTable } from "./components/ColunaTable/ColunaTable";
import * as S from "./styles";

import { useQuery } from "@tanstack/react-query";

import { FaPlus } from "react-icons/fa";

import apiHackathon from "../../config/axiosConfig";
import { useEffect, useState } from "react";
import { Tasks } from "../Estudos/components/Tasks/Tasks";

export function Calendar() {
  const [dataWeekDay, setDataWeekDay] = useState();
  const [dataClass, setDataClass] = useState();

  const fetchWeekDays = useQuery({
    queryKey: ["week-days"],
    queryFn: async () => {
      try {
        const { data } = await apiHackathon.get("/weekday");
        return data;
      } catch (error) {
        throw new Error("Erro ao buscar dias da semana: " + error.message);
      }
    },
  });

  const fetchClass = useQuery({
    queryKey: ["class"],
    queryFn: async () => {
      try {
        const { data } = await apiHackathon.get("/class");
        return data;
      } catch (error) {
        throw new Error("Erro ao buscar dias da semana: " + error.message);
      }
    },
  });

  useEffect(() => {
    setDataWeekDay(fetchWeekDays.data);
    if (dataWeekDay) {
    }
  }, [fetchWeekDays]);

  useEffect(() => {
    setDataClass(fetchClass.data);
    if (dataClass) {
    }
  }, [fetchClass]);

  return (
    <>
      <S.Calendar>
        <S.ContainerCalendar>
          <S.CalendarHeader>
            <S.Title>CRONOGRAMA SEMANAL</S.Title>
          </S.CalendarHeader>
          <S.Cronograma>
            <S.WeekWrapper>
              <S.ColunaHeader>Segunda</S.ColunaHeader>
              {dataClass &&
                dataClass
                  .filter((classe) => classe.weekday_id === 1)
                  .map((classe) => (
                    <>
                      <ColunaTable
                        key={classe.id}
                        classe={classe}
                        dataClass={dataClass}
                      />
                    </>
                  ))}
            </S.WeekWrapper>
            <S.WeekWrapper>
              <S.ColunaHeader>Terca</S.ColunaHeader>
              {dataClass &&
                dataClass
                  .filter((classe) => classe.weekday_id === 2)
                  .map((classe) => (
                    <>
                      <ColunaTable
                        key={classe.id}
                        classe={classe}
                        dataClass={dataClass}
                      />
                    </>
                  ))}
            </S.WeekWrapper>
            <S.WeekWrapper>
              <S.ColunaHeader>Quarta</S.ColunaHeader>
              {dataClass &&
                dataClass
                  .filter((classe) => classe.weekday_id === 3)
                  .map((classe) => (
                    <>
                      <ColunaTable
                        key={classe.id}
                        classe={classe}
                        dataClass={dataClass}
                      />
                    </>
                  ))}
            </S.WeekWrapper>
            <S.WeekWrapper>
              <S.ColunaHeader>Quinta</S.ColunaHeader>
              {dataClass &&
                dataClass
                  .filter((classe) => classe.weekday_id === 4)
                  .map((classe) => (
                    <>
                      <ColunaTable
                        key={classe.id}
                        classe={classe}
                        dataClass={dataClass}
                      />
                    </>
                  ))}
            </S.WeekWrapper>
            <S.WeekWrapper>
              <S.ColunaHeader>Sexta</S.ColunaHeader>
              {dataClass &&
                dataClass
                  .filter((classe) => classe.weekday_id === 5)
                  .map((classe) => (
                    <>
                      <ColunaTable
                        key={classe.id}
                        classe={classe}
                        dataClass={dataClass}
                      />
                    </>
                  ))}
            </S.WeekWrapper>
            <S.WeekWrapper>
              <S.ColunaHeader>Sabado</S.ColunaHeader>
              {dataClass &&
                dataClass
                  .filter((classe) => classe.weekday_id === 6)
                  .map((classe) => (
                    <>
                      <ColunaTable
                        key={classe.id}
                        classe={classe}
                        dataClass={dataClass}
                      />
                    </>
                  ))}
            </S.WeekWrapper>
            <S.WeekWrapper>
              <S.ColunaHeader>Domingo</S.ColunaHeader>
              {dataClass &&
                dataClass
                  .filter((classe) => classe.weekday_id === 7)
                  .map((classe) => (
                    <>
                      <ColunaTable
                        key={classe.id}
                        classe={classe}
                        dataClass={dataClass}
                      />
                    </>
                  ))}
            </S.WeekWrapper>
          </S.Cronograma>
        </S.ContainerCalendar>
      </S.Calendar>
    </>
  );
}
