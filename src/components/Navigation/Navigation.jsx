import * as S from './styles'

import { NavMenuItem } from './components/NavMenuItem/NavMenuItem'

import { FaRegCalendarAlt, FaHome } from "react-icons/fa";
import { GiTomato } from "react-icons/gi";

export function Navigation(){
    return(
        <S.NavigationContainer>
            <h3>Dev Estudos</h3>
            <S.NavigationWrapper>
                <S.NavigationWrapperMenu>
                    <S.NavigationMenu>
                        <NavMenuItem icon={<FaHome />} text={'Home'} link={'/'}/>
                        <NavMenuItem icon={<FaRegCalendarAlt />} text={'Calendario'} link={'/calendar'}/>
                        <NavMenuItem icon={<GiTomato />} text={'Pomodoro'} link={'/pomodoro'}/>
                    </S.NavigationMenu>
                </S.NavigationWrapperMenu>
                    <p>Direitos</p>
            </S.NavigationWrapper>
        </S.NavigationContainer>
    )
}