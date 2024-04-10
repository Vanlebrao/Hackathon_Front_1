import styled from 'styled-components'

import { NavLink } from 'react-router-dom'

export const NavMenuItemContainer = styled(NavLink)`
    width: 120%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    cursor: pointer;
    text-decoration: none;
    padding: 8px;
    color: white;
    transition: 0.1s ease-in-out;
    gap: 20px;    
    position:relative;

    &.active {
        background-color: ${props => props.theme.colors.purple_500};
    };

    &:hover{
        background-color: ${props => props.theme.colors.purple_500};
    }
`

export const NavManuItemIcon = styled.li`
    position: relative;
    left: 20px;

`

export const NavManuItemText = styled.li`
    position: relative;
    left: 20px;
    flex: 1;

`




