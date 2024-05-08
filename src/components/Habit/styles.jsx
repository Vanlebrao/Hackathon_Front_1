import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-bottom: 70px;
`;

export const ContainerDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: center;
  width: 350px;
`;

export const Title = styled.div`
  width: 350px;
  border-bottom: none;
  padding: 10px 5px;
  font-size: 10px;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.gray_900};
  border-radius: 5px 5px 0 0;

  & h4 {
    color: ${(props) => props.theme.gray_200};
    font-size: 18px;
  }

  & input {
    width: 70%;
    padding: 5px;
    border-radius: 5px;
    border: none;
    outline: none;
    color: ${(props) => props.theme.purple_500};
  }
  & button {
    width: 35px;
    height: 35px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.purple_500};
    border: none;
    color: ${(props) => props.theme.white};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;

    &:hover {
      filter: brightness(80%);
    }
  }
`;

export const Days = styled.div`
  background-color: ${(props) =>
    props.status ? props.theme.light_green_300 : props.theme.gray_200};
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
