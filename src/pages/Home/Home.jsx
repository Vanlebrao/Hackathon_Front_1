import * as S from './styles'

export function Home(){
    return(
        <S.HomeContainer>
            <S.HomeWrapper>
                <S.HomeWrapperTitle>
                    <h1>Home</h1>
                </S.HomeWrapperTitle>
                <S.HomeWrapperContent>
                    <S.HomeParagraphWrapper>
                        <S.HomeParagraph>
                            Organizar seus estudos é uma habilidade que você pode aprimorar com o tempo, Experimente diferentes abordagens para encontrar a mais eficaz. E lembre-se de ser consistente  e perveverante em sua fornada de aprendizado.
                        </S.HomeParagraph>
                    </S.HomeParagraphWrapper>
                    <S.HomeParagraphWrapper>
                        <S.HomeParagraph>
                            Algumas dicas para organização:
                        </S.HomeParagraph>
                            <S.HomeList>
                                <S.HomeListItem>
                                    Estabeleça metas claras e crie um cronograma para seus estudos.
                                </S.HomeListItem>
                                <S.HomeListItem>
                                    Priorize tarefas  e divida os estudos em segmentos menores.
                                </S.HomeListItem>
                                <S.HomeListItem>
                                    Utilize tecnicas de aprendizado ativo, elimine distrações e faça pausas regulares.
                                </S.HomeListItem>
                                <S.HomeListItem>
                                    Revise e atualize regularmente suas anotações e acompanhe seu progresso.
                                </S.HomeListItem>
                                <S.HomeListItem>
                                    Seja flexível e esteja aberto a ajustar seu plano de estudos conforme necessario.
                                </S.HomeListItem>
                            </S.HomeList>

                    </S.HomeParagraphWrapper>
                    <S.HomeParagraphWrapper>
                        <S.HomeParagraph>
                            Aqui, você pode criar um cronograma, planejar seu dia e semana fazer listas de tarefas e usar a tecnica pomodoro. Alcançar metas dá pontos para evoluir seu avatar.
                        </S.HomeParagraph>
                    </S.HomeParagraphWrapper>
                </S.HomeWrapperContent>
            </S.HomeWrapper>
        </S.HomeContainer>
    )
}