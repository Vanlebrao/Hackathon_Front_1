import styled from 'styled-components'

export const NavigationContainer = styled.div`
    width: 200px;
    height: 100%;
    color: white;
    padding: 15px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const NavigationWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    flex: 1;
    background-color: ${props => props.theme.colors.gray_900};
    color: white;
    padding: 5px;

`

export const NavigationWrapperMenu = styled.ul`
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

`

export const NavigationMenu = styled.ul`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`



