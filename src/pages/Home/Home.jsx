import * as S from "./styles";

import PerfilHome from "./components/PerfilHome/PerfilHome";
import ImgHome from "./components/ImgHome/ImgHome";
import ContentHome from "./components/ContentHome/ContentHome";
import { useState } from "react";

export function Home() {
  const [navLink, setNavLink] = useState(0);
  return (
    <S.HomeContainer>
      <S.HomeWrapper>
        <S.WrapperControl>
          <PerfilHome />
          <ImgHome navLink={navLink} setNavLink={setNavLink} />
        </S.WrapperControl>
        <S.WrapperContent>
          <ContentHome navLink={navLink} />
        </S.WrapperContent>
      </S.HomeWrapper>
    </S.HomeContainer>
  );
}
