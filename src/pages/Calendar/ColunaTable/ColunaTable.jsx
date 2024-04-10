import { useEffect, useState } from "react"
import * as S from "./styles"

export function ColunaTable({day, aulas}){

    function handleText(string) {
        if (string.length > 20) {
            return `${string.slice(0, 20)}...`;
        } else {
            return string;
        }
    }

    return(
        <S.ContainerColunaTable>  
            {aulas.map(aula => 
                <S.CelContent key={aula.id} status={aula.status} onClick={() => console.log(aula.id, day,aula.status)}>
                    {handleText(aula.materia)}
                </S.CelContent>
            )}
        </S.ContainerColunaTable>
    )
}