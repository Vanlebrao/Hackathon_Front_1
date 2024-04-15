import * as S from './styles'

export default function ImgHome({navLink, setNavLink}){

  const Titles = ['Bem Vindo', 'Cronograma Semanal', 'Estudos', 'Habitos']
  const Imgs = [
      'https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg',
      'https://t.ctcdn.com.br/JlHwiRHyv0mTD7GfRkIlgO6eQX8=/640x360/smart/i257652.jpeg',
      'https://imagens.usp.br/wp-content/uploads/Campus-15-Foto-Marcos-Santos20101220_066.jpg',
      'https://img.freepik.com/fotos-gratis/uma-pintura-de-um-lago-de-montanha-com-uma-montanha-ao-fundo_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1712966400&semt=ais'
    
    ]
  
    return(
        <S.WrapperImgHome>
        <S.NavHome>
            <S.NavHomeItem className={navLink === 0 ? 'active' : ''} onClick={() => setNavLink(0)}>
              <span>Bem Vindo</span>
            </S.NavHomeItem>
            <S.NavHomeItem className={navLink === 1 ? 'active' : ''} onClick={() => setNavLink(1)}>
              <span>Cronograma Semanal</span>  
            </S.NavHomeItem>
            <S.NavHomeItem className={navLink === 2 ? 'active' : ''} onClick={() => setNavLink(2)}>
              <span>Estudos</span>  
            </S.NavHomeItem>
            <S.NavHomeItem className={navLink === 3 ? 'active' : ''} onClick={() => setNavLink(3)}>
              <span>Habitos</span>  
            </S.NavHomeItem>
        </S.NavHome>
        <S.CardImg>
            <S.ImgTitle>{Titles[navLink]}</S.ImgTitle>
            <S.WrapperImg>
                <img src={Imgs[navLink]} alt="" />
            </S.WrapperImg>
        </S.CardImg>

    </S.WrapperImgHome>
    )
}