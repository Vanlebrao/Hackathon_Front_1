import styled from 'styled-components'

export const HomeContainer = styled.div`
    width: 100%;
    height: 100%;

`
export const HomeWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 15px;
    gap: 15px;
`

export const WrapperControl = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const WrapperContent = styled.div`
    width: 100%;
    background-color: ${props => props.theme.colors.gray_100};
    box-shadow: 1px 1px 15px${props => props.theme.colors.gray_600};
    padding: 15px;
    border-radius: 15px;
`

