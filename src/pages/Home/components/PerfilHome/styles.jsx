import styled from 'styled-components'

export const WrapperPerfil = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding: 15px;
    border-radius: 15px;
`

export const Perfil = styled.div`
    height: 100%;
   display: flex;
   gap: 10px;
`
export const PhotoPerfil = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

   & img{
    width: 100%;
   }
`

export const TitlePerfil = styled.div`
   font-size: 24px;
   font-weight: bold;

   & span {
      color: ${props => props.theme.colors.purple_500};
   }
`
export const SubTitlePerfil = styled.div`
   font-size: 12px;
   color: ${props => props.theme.colors.gray_600};
`

export const Hello = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const WrapperDate = styled.div`
   display: flex;
   align-items: flex-end;
   flex-direction: column;
`
export const Hour = styled.span`
   font-size: 42px;

`
export const Date = styled.span`
   font-size: 12px;
   color: ${props => props.theme.colors.gray_600}; 
`
