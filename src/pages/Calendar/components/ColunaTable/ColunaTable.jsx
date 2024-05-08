import { useState } from "react";
import * as S from "./styles";

import useCourseStore from "../../../../state/couserState";

export function ColunaTable({ classe }) {
  const [idClass, setIdClass] = useState(0);

  const setCourseEdit = useCourseStore((state) => {
    return state.setCourseEdit;
  });

  const courseEdit = useCourseStore((state) => {
    return state.courseEdit;
  });

  async function handleEdit() {
    await setCourseEdit({
      id: classe.id,
      course: classe.course,
      module: classe.module,
      lesson: classe.lesson,
      time: classe.time,
      status: classe.status,
      id_day: classe.id_day,
    });
    setIdClass(classe.id);
  }

  function formatText(text) {
    return text.length > 8 ? `${text.slice(0, 9)}...` : text;
  }

  return (
    <S.ContainerColunaTable>
      <S.CelContent
        key={classe.id}
        status={classe.status}
        onClick={() => {
          handleEdit();
        }}
      >
        <S.CelContentOne>
          <div>
            {/* <span className="title">Curso: </span> */}
            <span style={{ fontWeight: "bold" }}>
              {formatText(classe.course)}
            </span>
          </div>
          <div>
            {/* <span className="title">Module: </span> */}
            <span>{formatText(classe.module)}</span>
          </div>
          <div>
            {/* <span className="title">Aula: </span> */}
            <span>{formatText(classe.lesson)}</span>
          </div>
        </S.CelContentOne>
        {/* <img src={classe.status ? medalha : books} /> */}
      </S.CelContent>
    </S.ContainerColunaTable>
  );
}
