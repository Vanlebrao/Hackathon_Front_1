import styled from "styled-components";

export const Calendar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  /* background-color: red; */
`;

export const ContainerCalendar = styled.div`
  width: 95%;
  text-align: center;
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 1px 1px 15px ${(props) => props.theme.colors.gray_600};
  padding: 15px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  overflow: auto;
`;
export const CalendarHeader = styled.div`
  width: 100%;
  display: flex;
  padding: 5px;
`;
export const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.purple_500};
`;

export const Button = styled.button`
  width: 45px;
  height: 45px;
  padding: 5px;
  border: none;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.purple_500};
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    filter: brightness(0.7);
  }
`;

export const Cronograma = styled.div`
  width: 100%;
  display: flex;
`;

export const WeekWrapper = styled.div`
  width: 100%;
  padding: 3px;
  gap: 10px;
  display: flex;
  flex-direction: column;
`;

export const ColunaHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.purple_500};
  color: ${(props) => props.theme.colors.white};
  padding: 15px 5px;
  border-radius: 6px;
`;

export const TaskContainer = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 1px 1px 15px ${(props) => props.theme.colors.gray_600};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
