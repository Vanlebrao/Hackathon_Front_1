import { useEffect, useState } from "react";
import { Pomodoro } from "./components/Pomodoro/Pomodoro";
import { StatusEstudos } from "./components/StatusEstudos/StatusEstudos";
import { Tasks } from "./components/Tasks/Tasks";
import * as S from "./styles";
import { useQuery } from "@tanstack/react-query";
import apiHackathon from "../../config/axiosConfig";

export function Estudos() {
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
    <S.ContainerEstudos>
      <S.EstudosWrapper>
        <S.StatusWrapper>
          <Pomodoro />
          <StatusEstudos dataClass={dataClass} />
        </S.StatusWrapper>
        <Tasks dataClass={dataClass} />
      </S.EstudosWrapper>
    </S.ContainerEstudos>
  );
}
