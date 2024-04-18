import * as C from './styles';

export const TimelineStudy = () => {
    return (
        <C.Wrapper>
            <C.Container>
                <C.InputsMain>
                    <C.Input type="text" placeholder="Módulo - Aula"/>
                    <C.Input type="text" placeholder="Título da Aula"/>
                    <C.Input type="text" placeholder="Duração da Aula"/>
                    <C.Button>Salvar</C.Button>
                </C.InputsMain>
            </C.Container>
        </C.Wrapper>
    );
}