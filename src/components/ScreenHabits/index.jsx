import * as C from './styles';

export const ScreenHabits = () => {
    return (
        <C.Wrapper>
            <C.Container>
                <C.InputsMain>
                    <C.Input type="text" placeholder="Hábito"/>
                    <label>Data início</label>
                    <C.Input type="date" />
                    <label>Data fim</label>
                    <C.Input type="date" placeholder="Data de Fim"/>
                    <C.Input type="text" placeholder="Horário"/>
                    <C.Button>Salvar</C.Button>
                </C.InputsMain>
            </C.Container>
        </C.Wrapper>
    );
}