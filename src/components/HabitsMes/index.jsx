import * as C from './styles';

export const HabitsMes = () => {
    return (
        <C.Wrapper>
            <C.Container>
                <C.InputsMain>
                    <C.Input type="text" placeholder="Mês"/>
                    <C.Button>Salvar</C.Button>
                </C.InputsMain>
            </C.Container>
        </C.Wrapper>
    );
}