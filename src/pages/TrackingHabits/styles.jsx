import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
`;

export const Container = styled.div`
  min-height: 100%;

  padding: 20px;
  border-radius: 15px;

  align-items: flex-start;

  background-color: ${(props) => `${props.theme.colors.white}70`};
  box-shadow: 1px 1px 15px ${(props) => props.theme.colors.gray_600};

  & .habits {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;
