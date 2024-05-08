import { useEffect, useState } from "react";
import * as S from "./styles";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiHackathon from "../../config/axiosConfig";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ModalCreate({ setIsVisible }) {
  const [courseRoom, setCourseRoom] = useState("");
  const [moduleRoom, setModuleRoom] = useState("");
  const [lessonRoom, setLessonRoom] = useState("");
  const [courseId, setCourseId] = useState("");
  const [moduleId, setModuleId] = useState("");
  const [timeRoom, setTimeRoom] = useState("");
  const [weekDay, setWeekday] = useState("");
  const queryClient = useQueryClient();

  const [dataCourse, setDataCourse] = useState();
  const [dataModule, setDataModule] = useState();
  const [dataLesson, setDataLesson] = useState();

  const fetchCourse = useQuery({
    queryKey: ["course"],
    queryFn: async () => {
      try {
        const { data } = await apiHackathon.get("/course");
        return data;
      } catch (error) {
        throw new Error("Erro ao buscar dias da semana: " + error.message);
      }
    },
  });

  const fetchModule = useQuery({
    queryKey: ["module"],
    queryFn: async () => {
      try {
        const { data } = await apiHackathon.get("/module");
        return data;
      } catch (error) {
        throw new Error("Erro ao buscar dias da semana: " + error.message);
      }
    },
  });

  const fetchLesson = useQuery({
    queryKey: ["lesson"],
    queryFn: async () => {
      try {
        const { data } = await apiHackathon.get("/class");
        return data;
      } catch (error) {
        throw new Error("Erro ao buscar dias da semana: " + error.message);
      }
    },
  });

  const mutationAula = useMutation({
    mutationFn: async () => {
      const response = await apiHackathon.post("/aula", {
        module: moduleRoom,
        course: courseRoom,
        lesson: lessonRoom,
        time: timeRoom,
        status: false,
        id_day: weekDay,
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["aula"]);
      toast.success("Aula criada com sucesso!");
      setIsVisible(false);
    },
    onError: (error) => {
      toast.error("Aula ja cadastrada!");
    },
  });

  useEffect(() => {
    if (fetchCourse.data) setDataCourse(fetchCourse.data);
    if (fetchModule.data) setDataModule(fetchModule.data);
    if (fetchLesson.data) setDataLesson(fetchLesson.data);
  }, [fetchCourse.data, fetchModule.data, fetchLesson.data]);

  const handleCreateAula = (e) => {
    e.preventDefault();
    mutationAula.mutate();
  };

  return (
    <>
      <S.ContainerModal>
        <S.WrapperModal onSubmit={handleCreateAula}>
          <>
            <S.WrapperInputs>
              <S.InputSelect>
                <label>Curso</label>
                <select
                  onChange={(e) => {
                    const courseId = e.target.value;
                    setCourseId(courseId);
                    const selectedCourse =
                      dataCourse &&
                      dataCourse.find(
                        (course) => course.id === Number(courseId),
                      );
                    setCourseRoom(
                      selectedCourse.course && selectedCourse.course,
                    );
                    setModuleRoom("");
                  }}
                >
                  <option value="">Selecione um curso</option>
                  {dataCourse &&
                    dataCourse.map((course, index) => (
                      <option key={index} value={course.id}>
                        {course.course}
                      </option>
                    ))}
                </select>
              </S.InputSelect>
              <S.InputSelect>
                <label>Módulo</label>
                <select
                  onChange={(e) => {
                    const moduleId = e.target.value;
                    setModuleId(moduleId);
                    const selectedModule = dataModule.find(
                      (module) => module.id === Number(moduleId),
                    );
                    setModuleRoom(
                      selectedModule.module && selectedModule.module,
                    );
                    setLessonRoom("");
                  }}
                  disabled={!courseId}
                >
                  <option value="">Selecione um módulo</option>
                  {dataModule &&
                    dataModule
                      .filter(
                        (modules) => modules.course_id === Number(courseId),
                      )
                      .map((modules) => (
                        <option key={modules.id} value={modules.id}>
                          {modules.module}
                        </option>
                      ))}
                </select>
              </S.InputSelect>
              <S.InputSelect>
                <label>Aula</label>
                <select
                  onChange={(e) => {
                    const selectedValue = e.target.value;
                    const lessonValues = selectedValue.split("|");
                    const lesson = {
                      lesson: lessonValues[0],
                      time: lessonValues[1],
                    };
                    setLessonRoom(lesson.lesson);
                    setTimeRoom(lesson.time);
                  }}
                  disabled={!moduleId}
                >
                  <option value="">Selecione uma aula</option>
                  {dataLesson &&
                    dataLesson
                      .filter((lesson) => lesson.module.id === Number(moduleId))
                      .map((lesson) => (
                        <option
                          key={lesson.id}
                          value={`${lesson.lesson}|${lesson.time}`}
                        >
                          {lesson.lesson}
                        </option>
                      ))}
                </select>
              </S.InputSelect>
              <S.InputSelect>
                <label>Dia da Semana</label>
                <select
                  value={weekDay}
                  onChange={(e) => {
                    setWeekday(e.target.value);
                  }}
                >
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
          <S.Controls>
            <S.Button type="submit" confirm={true}>
              Salvar
            </S.Button>
            <S.Button onClick={() => setIsVisible(false)}>Cancelar</S.Button>
          </S.Controls>
        </S.WrapperModal>
      </S.ContainerModal>
    </>
  );
}
