import * as S from "./styles"

export function ColunaTable({day, aulas}){
    return(
        <S.ContainerColunaTable>  
            {aulas.map(aula => 
                <S.CelContent key={aula.id} status={aula.status} onClick={() => console.log(aula.id, day,aula.status)}>
                    {aula.materia}
                </S.CelContent>
            )}
        </S.ContainerColunaTable>
    )
}