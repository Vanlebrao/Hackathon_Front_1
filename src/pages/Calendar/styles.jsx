import styled from "styled-components";

export const Calendar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
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
  overflow: auto;
`;
export const CalendarHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

export const EditWrapper = styled.div`
  width: 35%;
  display: flex;
  gap: 20px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 1px 1px 15px ${(props) => props.theme.colors.gray_600};
  padding: 15px;

  & .noItens {
    width: 100%;
    height: 100%;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  & div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    & .logo {
      width: 100%;
      align-items: center;
      margin-bottom: 20px;

      & img {
        width: 150px;
      }
    }

    & h3 {
      margin-bottom: 10px;
    }

    & .control {
      display: flex;
      justify-content: flex-end;
      flex: 1;
      gap: 10px;
      padding: 10px;

      & .edit_day {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 5px;
        justify-content: center;
        align-items: center;

        & button {
          flex: 1;
          padding: 5px;
          border: none;
          border-radius: 5px;
          color: ${(props) => props.theme.colors.white};
          background-color: ${(props) => props.theme.colors.purple_500};
          cursor: pointer;

          &:hover {
            filter: brightness(0.9);
          }
          &:active {
            filter: brightness(0.7);
          }
        }
      }
      & .action_check {
        display: flex;
        flex-direction: column;

        & .edit {
          width: 100%;
          padding: 10px;
          border: none;
          border-radius: 5px;
          background-color: ${(props) => props.theme.colors.purple_500};
          color: ${(props) => props.theme.colors.white};
          cursor: pointer;

          &:hover {
            filter: brightness(0.9);
          }
          &:active {
            filter: brightness(0.7);
          }
        }

        & .delete {
          width: 100%;
          padding: 10px;
          border: none;
          border-radius: 5px;
          background-color: ${(props) => props.theme.colors.light_red_600};
          color: ${(props) => props.theme.colors.white};
          cursor: pointer;

          &:hover {
            filter: brightness(0.9);
          }
          &:active {
            filter: brightness(0.7);
          }
        }
      }
    }
  }
`;

export const StatusCheck = styled.span`
  width: 100px;
  padding: 5px;
  border: none;
  border-radius: 5px;
  color: ${(props) =>
    props.status ? props.theme.colors.white : props.theme.colors.gray_900};
  background-color: ${(props) =>
    props.status
      ? props.theme.colors.light_green_500
      : props.theme.colors.light_yellow_700};
  cursor: pointer;
  margin-left: 10px;
`;
