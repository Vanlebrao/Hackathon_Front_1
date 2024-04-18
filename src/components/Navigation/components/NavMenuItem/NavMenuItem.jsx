import * as S from './styles'

export function NavMenuItem({text, icon, link}){
    return(
            <S.NavMenuItemContainer to={link} >
                <S.NavManuItemIcon>
                    {icon}
                </S.NavManuItemIcon>
            </S.NavMenuItemContainer>
    )
}