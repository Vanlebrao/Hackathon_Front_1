import * as S from './styles'

import { NavMenuItem } from './components/NavMenuItem/NavMenuItem'

import { FaRegCalendarAlt, FaHome, FaBook, FaRegCalendarCheck, FaOutdent  } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export function Navigation(){
    const navigate = useNavigate()

    function signOut(){
        localStorage.clear('token')
        navigate('/login')
    }
    

    return(
        <S.NavigationContainer>
            <S.NavigationWrapper>
                <S.NavigationWrapperMenu>
                    <S.NavigationMenu>
                        <NavMenuItem icon={<FaHome />} text={'Home'} link={'/'}/>
                        <NavMenuItem icon={<FaRegCalendarAlt />} text={'Calendario'} link={'/calendar'}/>
                        <NavMenuItem icon={<FaBook />} text={'Estudos'} link={'/estudos'}/>
                        <NavMenuItem icon={<FaRegCalendarCheck  />} text={'Habitos'} link={'/habitos'}/>
                    </S.NavigationMenu>
                </S.NavigationWrapperMenu>
                    <span onClick={signOut}><FaOutdent /></span>
            </S.NavigationWrapper>
        </S.NavigationContainer>
    )
}