import { ColunaTable } from "./components/ColunaTable/ColunaTable";
import * as S from "./styles";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FaPlus } from "react-icons/fa";
import apiHackathon from "../../config/axiosConfig";
import { useEffect, useState } from "react";
import ModalCreate from "../../components/ModalCreate/ModalCreate";
import useCourseStore from "../../state/couserState";
import logo from "../../assets/logo.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Calendar() {
  const [dataWeekDay, setDataWeekDay] = useState();
  const [dataAula, setAula] = useState();
  const [isVisible, setIsVisible] = useState(false);
  const response = useCourseStore((state) => state.courseEdit);
  const setCourseEdit = useCourseStore((state) => state.setCourseEdit);
  const [status, setStatus] = useState(response.status);
  const queryClient = useQueryClient();

  const fetchWeekDays = useQuery({
    queryKey: ["weekdays"],
    queryFn: async () => {
      try {
        const { data } = await apiHackathon.get("/weekday");
        return data;
      } catch (error) {
        throw new Error("Erro ao buscar dias da semana: " + error.message);
      }
    },
  });

  const fetchAula = useQuery({
    queryKey: ["aula"],
    queryFn: async () => {
      try {
        const { data } = await apiHackathon.get("/aula");
        return data;
      } catch (error) {
        throw new Error("Erro ao buscar dias da semana: " + error.message);
      }
    },
  });

  const deleteAula = useMutation({
    mutationFn: async (id) => {
      try {
        await apiHackathon.delete(`/aula/${id}`);
        queryClient.invalidateQueries("aula");
      } catch (error) {
        throw new Error("Erro ao deletar aula: " + error.message);
      }
    },
    onSuccess: () => {
      setCourseEdit({
        id: "",
        course: "",
        module: "",
        lesson: "",
        time: "",
        id_day: "",
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const updateAula = useMutation({
    mutationFn: async (data) => {
      try {
        await apiHackathon.put(`/aula/${data.id}`, {
          id_day: data.id_day,
        });
        queryClient.invalidateQueries("aula");
      } catch (error) {
        throw new Error("Erro ao atualizar aula: " + error.message);
      }
    },
    onSuccess: () => {
      toast.success("Aula atualizada com sucesso!");
    },
    onError: (error) => {
      toast.error("Erro ao atualizar aula: " + error.message);
    },
  });

  const mutation = useMutation({
    mutationFn: async (idParam) => {
      const { data } = await apiHackathon.put(`/aula/${idParam}`, {
        status: !status,
      });
      return data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries("dataClass");
      setStatus(!status);
      toast.success("Status atualizado com sucesso");
    },
    onError: (data) => {
      toast.error("Erro ao atualizar status");
      console.log("error: ", data.message);
    },
  });

  function handleCheck() {
    mutation.mutate(response.id);
  }

  const handleDelete = () => {
    deleteAula.mutate(response.id);
  };

  const handleUpdate = (id_day) => {
    const data = {
      id: response.id,
      id_day: id_day,
    };
    updateAula.mutate(data);
  };

  useEffect(() => {
    setCourseEdit({
      id: response.id,
      course: response.course,
      module: response.module,
      lesson: response.lesson,
      time: response.time,
      id_day: response.id_day,
      status: status,
    });
  }, [status]);

  useEffect(() => {
    setDataWeekDay(fetchWeekDays.data);
    setAula(fetchAula.data);
    console.log(response.id_day == 4);
  }, [fetchWeekDays, fetchAula]);

  return (
    <>
      {isVisible && <ModalCreate setIsVisible={setIsVisible} />}
      <S.Calendar>
        <S.ContainerCalendar>
          <S.CalendarHeader>
            <S.Title>CRONOGRAMA SEMANAL</S.Title>
            <S.Button onClick={() => setIsVisible(true)}>
              <FaPlus />
            </S.Button>
          </S.CalendarHeader>
          <S.Cronograma>
            <S.WeekWrapper>
              <S.ColunaHeader>Segunda</S.ColunaHeader>
              {dataAula &&
                dataAula
                  .filter((classe) => classe.id_day === 1)
                  .map((classe) => (
                    <>
                      <ColunaTable key={classe.id} classe={classe} />
                    </>
                  ))}
            </S.WeekWrapper>
            <S.WeekWrapper>
              <S.ColunaHeader>Terca</S.ColunaHeader>
              {dataAula &&
                dataAula
                  .filter((classe) => classe.id_day === 2)
                  .map((classe) => (
                    <>
                      <ColunaTable
                        key={classe.id}
                        classe={classe}
                        dataAula={dataAula}
                      />
                    </>
                  ))}
            </S.WeekWrapper>
            <S.WeekWrapper>
              <S.ColunaHeader>Quarta</S.ColunaHeader>
              {dataAula &&
                dataAula
                  .filter((classe) => classe.id_day === 3)
                  .map((classe) => (
                    <>
                      <ColunaTable
                        key={classe.id}
                        classe={classe}
                        dataAula={dataAula}
                      />
                    </>
                  ))}
            </S.WeekWrapper>
            <S.WeekWrapper>
              <S.ColunaHeader>Quinta</S.ColunaHeader>
              {dataAula &&
                dataAula
                  .filter((classe) => classe.id_day === 4)
                  .map((classe) => (
                    <>
                      <ColunaTable
                        key={classe.id}
                        classe={classe}
                        dataAula={dataAula}
                      />
                    </>
                  ))}
            </S.WeekWrapper>
            <S.WeekWrapper>
              <S.ColunaHeader>Sexta</S.ColunaHeader>
              {dataAula &&
                dataAula
                  .filter((classe) => classe.id_day === 5)
                  .map((classe) => (
                    <>
                      <ColunaTable
                        key={classe.id}
                        classe={classe}
                        dataAula={dataAula}
                      />
                    </>
                  ))}
            </S.WeekWrapper>
            <S.WeekWrapper>
              <S.ColunaHeader>Sabado</S.ColunaHeader>
              {dataAula &&
                dataAula
                  .filter((classe) => classe.id_day === 6)
                  .map((classe) => (
                    <>
                      <ColunaTable
                        key={classe.id}
                        classe={classe}
                        dataAula={dataAula}
                      />
                    </>
                  ))}
            </S.WeekWrapper>
            <S.WeekWrapper>
              <S.ColunaHeader>Domingo</S.ColunaHeader>
              {dataAula &&
                dataAula
                  .filter((classe) => classe.id_day === 7)
                  .map((classe) => (
                    <>
                      <ColunaTable
                        key={classe.id}
                        classe={classe}
                        dataAula={dataAula}
                      />
                    </>
                  ))}
            </S.WeekWrapper>
          </S.Cronograma>
        </S.ContainerCalendar>
        <S.EditWrapper>
          {response.course !== "" ? (
            <div>
              <div className="logo">
                <img src={logo} alt="Logo Dev Club" />
              </div>

              <h4>
                <span>Curso: </span>
                {response.course}
              </h4>
              <p>
                <span>Modulo: </span>
                {response.module}
              </p>

              <p>
                <span>Status:</span>
                <S.StatusCheck status={response.status}>
                  {response.status ? "Concluido" : "Pendente"}
                </S.StatusCheck>
              </p>

              <p>
                <span>Aula: </span>
                {response.lesson}
              </p>
              <p>
                <span>Time: </span>
                {response.time}
              </p>

              <div className="control">
                <div className="edit_day">
                  <button
                    className="day"
                    day={response.id_day == 1}
                    onClick={() => handleUpdate(1)}
                  >
                    SEG
                  </button>
                  <button
                    className="day"
                    day={response.id_day == 2}
                    onClick={() => handleUpdate(2)}
                  >
                    TER
                  </button>
                  <button
                    className="day"
                    day={response.id_day == 3}
                    onClick={() => handleUpdate(3)}
                  >
                    QUA
                  </button>
                  <button
                    className="day"
                    day={response.id_day == 4}
                    onClick={() => handleUpdate(4)}
                  >
                    QUI
                  </button>
                  <button
                    className="day"
                    day={response.id_day == 5}
                    onClick={() => handleUpdate(5)}
                  >
                    SEX
                  </button>
                  <button
                    className="day"
                    day={response.id_day == 6}
                    onClick={() => handleUpdate(6)}
                  >
                    SAB
                  </button>
                  <button
                    className="day"
                    day={response.id_day == 7}
                    onClick={() => handleUpdate(7)}
                  >
                    DOM
                  </button>
                </div>
                <div className="action_check">
                  <button
                    status={response.status}
                    onClick={() => handleCheck()}
                    className="edit"
                  >
                    Alterar Status
                  </button>
                  <button className="delete" onClick={() => handleDelete()}>
                    Deletar
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="noItens">
              <h3>Nao ha itens selecionados</h3>
            </div>
          )}
        </S.EditWrapper>
      </S.Calendar>
    </>
  );
}
