import { Navigation } from "../Navigation/Navigation";
import * as S from "./styles";

export function Layout({ children }) {
  return (
    <>
      <S.LayoutContainer>
        <Navigation />
        <S.LayoutMain>
          <S.LayoutPages>{children}</S.LayoutPages>
        </S.LayoutMain>
      </S.LayoutContainer>
    </>
  );
}
