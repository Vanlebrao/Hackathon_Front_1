import styled from 'styled-components'

export const WrapperImgHome = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const NavHome = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 5px;
    list-style: none;

    & .active{
        color: ${props => props.theme.colors.purple_500};
        font-weight: bold;
        border-bottom: 2px solid ${props => props.theme.colors.purple_500};
    }
`
export const NavHomeItem = styled.a`
    font-weight: lighter;
    padding: 5px;
    border-bottom: 2px solid transparent;
    cursor: pointer; 

    &:hover{
        color: ${props => props.theme.colors.purple_500};
        font-weight: bold;
        border-bottom: 2px solid ${props => props.theme.colors.purple_500};
    }


`

export const CardImg = styled.div`
    width: 100%;
    max-height: 450px;
    background-color: ${props => props.theme.colors.gray_100};
    box-shadow: 1px 1px 15px ${props => props.theme.colors.gray_600};
    padding: 15px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    gap: 20px;

`

export const ImgTitle = styled.span`
    font-size: 20px;
    font-weight: bold;
`

export const WrapperImg = styled.div`
    width: 100%;
    border-radius: 15px;
    overflow: hidden;
    
    & img{
        width: 100%;
    }
`