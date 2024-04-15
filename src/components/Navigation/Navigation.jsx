import * as S from './styles'

import { NavMenuItem } from './components/NavMenuItem/NavMenuItem'

import { FaRegCalendarAlt, FaHome, FaBook } from "react-icons/fa";

export function Navigation(){
    return(
        <S.NavigationContainer>
            <S.NavigationWrapper>
                <S.NavigationWrapperMenu>
                    <S.NavigationMenu>
                        <NavMenuItem icon={<FaHome />} text={'Home'} link={'/'}/>
                        <NavMenuItem icon={<FaRegCalendarAlt />} text={'Calendario'} link={'/calendar'}/>
                        <NavMenuItem icon={<FaBook />} text={'Estudos'} link={'/estudos'}/>
                    </S.NavigationMenu>
                </S.NavigationWrapperMenu>
                    <p>Direitos</p>
            </S.NavigationWrapper>
        </S.NavigationContainer>
    )
}