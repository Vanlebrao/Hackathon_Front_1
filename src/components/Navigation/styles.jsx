import styled from 'styled-components'

export const NavigationContainer = styled.div`
    /* width: 100px; */
    height: 100%;
    color: white;
    padding: 15px 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

`

export const NavigationWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    background-color: ${props => props.theme.colors.gray_900};
    color: white;
    padding-left: 15px;
`

export const NavigationWrapperMenu = styled.ul`
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

`

export const NavigationMenu = styled.ul`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

`



