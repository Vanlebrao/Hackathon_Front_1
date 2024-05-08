import * as S from "./styles";
import { useState, useEffect } from "react";
import pendente from "../../../../assets/pendente.png";
import concluido from "../../../../assets/concluido.png";

export function StatusEstudos({ dataClass }) {
  const [progress, setProgress] = useState();
  const [isFinish, setIsFinish] = useState(false);
  const [aulas, setAulas] = useState([]);
  const [pendentes, setPendentes] = useState(0);
  const [dayWeek, setDayWeek] = useState("");
  const [totalAulas, setTotalAulas] = useState(0);

  function getDayWeek() {
    const date = new Date();
    const dayWeekNumber = date.getDay();
    setDayWeek(dayWeekNumber);
  }

  useEffect(() => {
    getDayWeek();
    if (dataClass) {
      const aulasDoDia = dataClass.filter((item) => item.id_day === dayWeek);
      setAulas(aulasDoDia);

      const pendentesCount = aulasDoDia.reduce((acc, aula) => {
        return !aula.status ? acc : acc + 1;
      }, 0);

      setPendentes(pendentesCount);
    }
  }, [dayWeek, dataClass]);

  useEffect(() => {
    setTotalAulas(aulas.length);
    const pronto = aulas.reduce((acc, aula) => {
      return aula.status ? acc + 1 : acc;
    }, 0);
    setProgress(Math.floor((pronto / totalAulas) * 100));
    setIsFinish(pronto >= totalAulas);
  }, [aulas, totalAulas]);

  return (
    <S.StatusEstudosApp>
      <S.StatusTasks>
        <S.StatusTasksImg>
          <S.WrapperImg>
            <img src={isFinish ? concluido : pendente} />
          </S.WrapperImg>
          <S.WrapperImgText isFinish={isFinish}>
            {isFinish ? (
              <>
                <p>Parabéns!!!</p>
                <S.WrapperImgSubText>
                  <p>Você não possui mais nenhuma tarefa pendente.</p>
                </S.WrapperImgSubText>
              </>
            ) : (
              <>
                <p>Urgente!</p>
                <S.WrapperImgSubText>
                  <p>Você possui </p>
                  <S.PendenciasQuantity>{pendentes}</S.PendenciasQuantity>
                  <p>Tarefas Pendentes</p>
                </S.WrapperImgSubText>
              </>
            )}
          </S.WrapperImgText>
        </S.StatusTasksImg>
        <S.StatusNumberTasks isFinish={isFinish}>
          <span>{`${pendentes}/${totalAulas}`}</span>
        </S.StatusNumberTasks>
      </S.StatusTasks>
      <S.TimerBar isFinish={isFinish}>
        <p>{progress}%</p>
        <S.TimerProgress progress={progress} isFinish={isFinish} />
      </S.TimerBar>
    </S.StatusEstudosApp>
  );
}
