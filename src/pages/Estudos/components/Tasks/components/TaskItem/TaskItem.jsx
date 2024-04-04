import * as S from "./styles"
import { MdTimer, MdCheck } from "react-icons/md";

export function TaskItem({title, hour, status}){

    return(
        <S.TaskItem>
            <S.Selected status={status}>
                <MdCheck/>
            </S.Selected>
            <S.Image><MdTimer /></S.Image>
            <S.Infos>
                <S.Title status={status}>{title}</S.Title>
                <S.Description>
                    <span>{!status ? "Pendente" : "Concluido"}</span>
                    <span>{hour}</span>
                </S.Description>
            </S.Infos>
        </S.TaskItem>
    )
}