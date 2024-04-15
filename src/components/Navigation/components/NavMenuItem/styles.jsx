import styled from 'styled-components'

import { NavLink } from 'react-router-dom'

export const NavMenuItemContainer = styled(NavLink)`
    width: 80px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    cursor: pointer;
    text-decoration: none;
    padding: 20px;
    color: ${props => props.theme.colors.white};
    border-radius: 5px 0px 0 15px;
    transition: 0.2s ease-in-out; 

    &.active {
        background-color: ${props => props.theme.colors.white};
        color: ${props => props.theme.colors.purple_500};
        border-radius: 5px 0px 0 15px;
    };

    &:hover{
        background-color: ${props => props.theme.colors.white};
        color: ${props => props.theme.colors.purple_500};
        border-radius: 5px 0px 0 15px;
    }
`

export const NavManuItemIcon = styled.li`
    left: 20px;
`




