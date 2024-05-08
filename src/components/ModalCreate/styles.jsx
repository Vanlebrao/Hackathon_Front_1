import styled from "styled-components";

export const ContainerModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  text-align: center;
  background-color: ${(props) => `${props.theme.colors.white}70`};
  box-shadow: 1px 1px 15px ${(props) => props.theme.colors.gray_600};
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const WrapperModal = styled.form`
  width: 600px;
  height: 550px;
  text-align: center;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 1px 1px 15px ${(props) => props.theme.colors.gray_600};
  top: 0;
  left: 0;
  border-radius: 15px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

export const WrapperInputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  gap: 10px;
`;

export const InputSelect = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & label {
    color: ${(props) => props.theme.colors.purple_500};
  }

  & select {
    width: 100%;
    padding: 8px;
    border-radius: 5px;
    color: ${(props) => props.theme.colors.purple_500};
    border: 1px solid ${(props) => props.theme.colors.purple_500};
    background-color: ${(props) => props.theme.colors.white};

    & option {
      border: 3px solid black;
      color: ${(props) => props.theme.colors.purple_500};
    }

    &:active {
      border: 3px solid ${(props) => props.theme.colors.light_green_500};
      box-shadow: 0px 0px 10px ${(props) => props.theme.colors.light_green_500};
    }
  }
`;
export const Status = styled.div`
  width: 50%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  border: 1px solid ${(props) => props.theme.colors.purple_500};
  padding: 20px;
  border-radius: 15px;

  & p {
    width: 100%;
    font-size: 20px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.purple_500};
    display: flex;
    gap: 20px;

    & span {
      color: ${(props) => props.theme.colors.light_gray_200};
      font-weight: lighter;
      flex: 1;
    }
  }
`;

export const Controls = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  gap: 80px;
`;

export const Button = styled.button`
  min-width: 120px;
  padding: 8px;
  font-weight: bold;
  color: ${(props) =>
    props.confirm
      ? props.theme.colors.light_green_500
      : props.theme.colors.light_red_600};
  border: 1px solid
    ${(props) =>
      props.confirm
        ? props.theme.colors.light_green_500
        : props.theme.colors.light_red_600};
  border-radius: 5px;
  background-color: transparent;
  cursor: pointer;
  transition: 0.1s ease-in-out;

  &:hover {
    background-color: ${(props) =>
      props.confirm
        ? props.theme.colors.light_green_500
        : props.theme.colors.light_red_600};
    color: ${(props) => props.theme.colors.white};
  }

  &:disabled {
    color: ${(props) => props.theme.colors.gray_400};
    border: 1px solid ${(props) => props.theme.colors.gray_400};
    cursor: not-allowed;
    background-color: ${(props) => props.theme.colors.white};
  }
`;
