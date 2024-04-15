import * as S from './styles'
import estudos from '../../../../assets/estudos.png'
import calendario from '../../../../assets/calendario.png'
import { useState } from 'react'
import { FaEye, FaEyeSlash} from "react-icons/fa";



export default function ImgHome({navLink, setNavLink}){

  const Titles = ['Bem Vindo', 'Cronograma Semanal', 'Estudos', 'Habitos']
  const Imgs = [ estudos, calendario, estudos, calendario ]
  // const [isVisible, setIsVisible] = useState(false)
    return(
        <S.WrapperImgHome>
            {/* <div style={{border: '1px solid #8a8a8a', width: '200px', display: 'flex', justifyContent: 'space-between', padding: '5px', borderRadius: '5px', }}>
                <input style={{border: 'none', color: '#8a8a8a'}} type={isVisible ? 'text' : 'password'} />
                <button style={{flex: 1, border: 'none', background: 'transparent', color: '#8a8a8a', cursor:'pointer'}} 
                  onMouseDown={() => setIsVisible(true)} 
                  onMouseUp={() => setIsVisible(false)} 
                >{isVisible ? <FaEye /> : <FaEyeSlash/>}</button>
            </div> */}
        <S.NavHome>
            <S.NavHomeItem className={navLink === 0 ? 'active' : ''} onClick={() => setNavLink(0)}>
              <span>Bem Vindo</span>
            </S.NavHomeItem>
            <S.NavHomeItem className={navLink === 1 ? 'active' : ''} onClick={() => setNavLink(1)}>
              <span>Cronograma</span>  
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