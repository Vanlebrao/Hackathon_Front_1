import * as S from "./styles";
import trofeu from "../../../../assets/trofeu.jpg";
import { useDate } from "../../../../components/DateProvider/DateProvider";
import { useEffect, useState } from "react";

export default function PerfilHome() {
  const { hour, day, minute, dayWeek, year, month } = useDate();
  const [name, setName] = useState("");

  function greetingPeople() {
    if (hour < 12) {
      return "Bom dia";
    } else if (hour < 18) {
      return "Boa tarde";
    } else {
      return "Boa noite";
    }
  }

  useEffect(() => {
    const name = localStorage.getItem("name");
    setName(name);
  }, []);

  return (
    <S.WrapperPerfil>
      <S.Perfil>
        <S.PhotoPerfil>
          <img src={trofeu} />
        </S.PhotoPerfil>
        <S.Hello>
          {hour ? (
            <>
              <S.TitlePerfil>
                {greetingPeople()},<span> {name}</span> !
              </S.TitlePerfil>
              <S.SubTitlePerfil>
                Hora de Organizar seus Estudos
              </S.SubTitlePerfil>
            </>
          ) : (
            <>
              <S.TitlePerfil>
                <span>Carregando...</span> !
              </S.TitlePerfil>
            </>
          )}
        </S.Hello>
      </S.Perfil>
      <S.WrapperDate>
        {!hour && !minute ? (
          <>
            <S.Hour>--:--</S.Hour>
          </>
        ) : (
          <>
            <S.Hour>
              {hour < 10 ? `0${hour}` : hour}:
              {minute < 10 ? `0${minute}` : minute}
            </S.Hour>
            <S.Date>
              {dayWeek}, {day} {month} {year}
            </S.Date>
          </>
        )}
      </S.WrapperDate>
    </S.WrapperPerfil>
  );
}
