import * as S from "./styles"
import { MdCheck } from "react-icons/md";
import trofeu from '../../../../../../assets/trofeu.jpg'
import pendente from '../../../../../../assets/pendente.png'

export function TaskItem({title, hour, status}){

    return(
        <S.TaskItem status={status}>
            <S.Selected status={status}>
                <MdCheck/>
            </S.Selected>
            <S.Image><img src={status === `pronto` ? trofeu : pendente} /> </S.Image>
            <S.Infos>
                <S.Title status={status}>{title}</S.Title>
                <S.Description status={status}>
                    <span>{!status ? "Pendente" : "Concluido"}</span>
                    <span>{hour}</span>
                </S.Description>
            </S.Infos>
        </S.TaskItem>
    )
}