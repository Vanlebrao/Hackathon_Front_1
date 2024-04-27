import { useState } from "react";
import * as S from "./styles";
import ModalClassEdit from "../../../../components/ModalClassEdit/ModalClassEdit";

import medalha from "../../../../assets/medalha.png";
import books from "../../../../assets/books.png";
import useCourseStore from "../../../../state/couserState";

export function ColunaTable({ classe, dataClass }) {
  const [isVisible, setIsVisibel] = useState(false);
  const [idClass, setIdClass] = useState(0);

  const setCourseEdit = useCourseStore((state) => {
    console.log("Chamando setCourseEdit com valores:", state);
    return state.setCourseEdit;
  });
  function handleText(string) {
    if (string.length > 20) {
      return `${string.slice(0, 20)}...`;
    } else {
      return string;
    }
  }

  async function handleEdit() {
    await setCourseEdit({
      course: classe.course,
      module: classe.module,
      lesson: classe.lesson,
      time: classe.time,
      weekday: classe.weekday.name,
    });
    setIdClass(classe.id);
    setIsVisibel(true);
  }

  return (
    <S.ContainerColunaTable>
      {isVisible && (
        <ModalClassEdit
          id={idClass}
          dataClass={dataClass}
          setIsVisibel={setIsVisibel}
        />
      )}

      <S.CelContent key={classe.id} status={classe.status} onClick={handleEdit}>
        <S.CelContentOne>
          <div>
            <span className="title">Curso: </span>
            <span>{handleText(classe.course)}</span>
          </div>
          <div>
            <span className="title">Module: </span>
            <span>{handleText(classe.module)}</span>
          </div>
          <div>
            <span className="title">Aula: </span>
            <span>{handleText(classe.lesson)}</span>
          </div>
          <div>
            <span className="title">Tempo: </span>
            <span>{handleText(classe.time)}</span>
          </div>
        </S.CelContentOne>
        <img src={classe.status ? medalha : books} />
      </S.CelContent>
    </S.ContainerColunaTable>
  );
}
