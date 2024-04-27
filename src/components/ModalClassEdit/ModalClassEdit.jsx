import { useEffect, useState } from "react";
import * as S from "./styles";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiHackathon from "../../config/axiosConfig";
import useCourseStore from "../../state/couserState";

export default function ModalClassEdit({ id, dataClass, setIsVisibel }) {
  const [courseRoom, setCourseRoom] = useState("");
  const [moduleRoom, setModuleRoom] = useState("");
  const [lessonRoom, setLessonRomm] = useState("");
  const [weekDay, setWeekday] = useState("");
  const [courseRooms, setCourseRooms] = useState([]);
  const queryClient = useQueryClient();
  const [edit, setEdit] = useState(false);

  const courseEdit = useCourseStore((state) => state.courseEdit);

  const handleDayChange = (e) => {
    setWeekday(e.target.value);
  };

  useEffect(() => {
    handleCourse();
  }, [dataClass]);

  function handleCourse() {
    const uniqueCourses = new Set();
    if (dataClass) {
      dataClass.forEach((classs) => {
        uniqueCourses.add(classs.course);
      });
    }
    setCourseRooms([...uniqueCourses]);
  }

  function handleCourse() {
    const uniqueCourses = new Set();
    if (dataClass) {
      dataClass.forEach((classs) => {
        uniqueCourses.add(classs.course);
      });
    }
    setCourseRooms([...uniqueCourses]);
  }

  const mutation = useMutation({
    mutationFn: async () => {
      const { data } = await apiHackathon.put(`/class/${id}`, {
        course: courseRoom,
        module: moduleRoom,
        lesson: lessonRoom,
        status: false,
        weekday_id: weekDay,
      });
      return data;
    },
    onSuccess: (data) => {
      console.log(data.message);
      queryClient.invalidateQueries("dataClass");
    },
    onError: (data) => {
      console.log("error: ", data.message);
    },
  });

  return (
    <>
      <S.ContainerModal>
        <S.WrapperModal>
          {edit ? (
            <>
              <S.WrapperInputs>
                <S.InputSelect>
                  <label>Curso</label>
                  <select
                    onChange={(e) => {
                      setCourseRoom(e.target.value);
                      setModuleRoom("");
                    }}
                  >
                    <option value="">{courseEdit.course}</option>
                    {courseRooms.map((course, index) => (
                      <option key={index}>{course}</option>
                    ))}
                  </select>
                </S.InputSelect>
                <S.InputSelect>
                  <label>Módulo</label>
                  <select
                    onChange={(e) => {
                      setModuleRoom(e.target.value);
                      setLessonRomm("");
                    }}
                    disabled={!courseRoom}
                  >
                    <option value="">Selecione um módulo</option>
                    {dataClass &&
                      dataClass
                        .filter((classes) => classes.course === courseRoom)
                        .map((classs) => classs.module)
                        .filter(
                          (value, index, self) => self.indexOf(value) === index,
                        )
                        .map((module, index) => (
                          <option key={index} value={module}>
                            {module}
                          </option>
                        ))}
                  </select>
                </S.InputSelect>
                <S.InputSelect>
                  <label>Aula</label>
                  <select
                    onChange={(e) => setLessonRomm(e.target.value)}
                    disabled={!moduleRoom}
                  >
                    <option value="">Selecione uma aula</option>
                    {dataClass &&
                      dataClass
                        .filter((classs) => classs.module === moduleRoom)
                        .map((classs) => classs.lesson)
                        .filter(
                          (value, index, self) => self.indexOf(value) === index,
                        )
                        .map((lesson, index) => (
                          <option key={index} value={lesson}>
                            {lesson}
                          </option>
                        ))}
                  </select>
                </S.InputSelect>
                <S.InputSelect>
                  <label>Dia da Semana</label>
                  <select value={weekDay} onChange={handleDayChange}>
                    <option value="">Selecione um dia da semana</option>
                    <option value={1}>Segunda</option>
                    <option value={2}>Terça</option>
                    <option value={3}>Quarta</option>
                    <option value={4}>Quinta</option>
                    <option value={5}>Sexta</option>
                    <option value={6}>Sábado</option>
                    <option value={7}>Domingo</option>
                  </select>
                </S.InputSelect>
              </S.WrapperInputs>
            </>
          ) : (
            <S.Status>
              <p>
                Curso: <span>{courseEdit.course}</span>
              </p>
              <p>
                Modulo: <span>{courseEdit.module}</span>
              </p>
              <p>
                Aula: <span>{courseEdit.lesson}</span>
              </p>
              <p>
                Tempo: <span>{courseEdit.time}</span>
              </p>
              <p>
                Dia: <span>{courseEdit.weekday}</span>
              </p>
            </S.Status>
          )}
          <S.Controls>
            {edit ? (
              <S.Button
                confirm={true}
                onClick={() => {
                  mutation.mutate();
                  setIsVisibel(false);
                }}
                disabled={!lessonRoom || !weekDay}
              >
                Confirmar
              </S.Button>
            ) : (
              <S.Button
                confirm={true}
                onClick={() => {
                  setEdit(true);
                }}
              >
                Editar
              </S.Button>
            )}
            <S.Button onClick={() => setIsVisibel(false)}>Cancelar</S.Button>
          </S.Controls>
        </S.WrapperModal>
      </S.ContainerModal>
    </>
  );
}
