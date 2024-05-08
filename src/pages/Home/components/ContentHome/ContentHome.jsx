import { text } from "../../../../data/textsome";
import * as S from "./styles";

export default function ContentHome({ navLink }) {
  return (
    <S.ContentHomeContainer>
      <S.ContentHomeTitle>{text[navLink].title}</S.ContentHomeTitle>

      <S.ContentHomeText>{text[navLink].content}</S.ContentHomeText>
    </S.ContentHomeContainer>
  );
}
