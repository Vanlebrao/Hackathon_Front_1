import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const NavMenuItemContainer = styled(Link)`
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


    &:hover{
        color: black;
        background-color: #ffffff;
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




