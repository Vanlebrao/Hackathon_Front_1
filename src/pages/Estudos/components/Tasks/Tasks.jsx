import * as S from "./styles";
import { TaskItem } from "./components/TaskItem/TaskItem";
import { useEffect, useState } from "react";

export function Tasks({ dataClass }) {
  const [aulas, setAulas] = useState([]);
  const [pendentes, setPendentes] = useState(0);
  const [dayWeek, setDayWeek] = useState("");

  function getDayWeek() {
    const date = new Date();
    const dayWeekNumber = date.getDay();
    setDayWeek(dayWeekNumber);
  }

  function sortByNumber(array, key) {
    return array.sort((a, b) => a[key] - b[key]);
  }

  useEffect(() => {
    getDayWeek();
    if (dataClass) {
      const aulasDoDia = dataClass.filter((item) => item.id_day === dayWeek);
      const sortAulasDoDia = sortByNumber(aulasDoDia, "id");
      console.log(sortAulasDoDia);
      console.log(aulasDoDia);
      setAulas(sortAulasDoDia);

      const pendentesCount = aulasDoDia.reduce((acc, aula) => {
        return aula.status ? acc : acc + 1;
      }, 0);

      setPendentes(pendentesCount);
    }
  }, [dayWeek, dataClass]);

  const handleStatusUpdate = (id, newStatus) => {
    setAulas((prevAulas) =>
      prevAulas.map((aula) =>
        aula.id === id ? { ...aula, status: newStatus } : aula,
      ),
    );
  };

  return (
    <S.TasksApp>
      <S.TaskHeader>
        <S.Title>
          Tarefas Dia{" "}
          <span>
            {pendentes !== null &&
              `( ${pendentes}/${aulas && aulas.length} pendentes )`}
          </span>
        </S.Title>
      </S.TaskHeader>
      <S.TaskContainer>
        {aulas &&
          aulas.map((item) => (
            <TaskItem
              key={item.id}
              idStatus={item.id}
              title={item.lesson}
              hour={item.time}
              initialStatus={item.status}
              onUpdateStatus={handleStatusUpdate}
            />
          ))}
      </S.TaskContainer>
    </S.TasksApp>
  );
}
