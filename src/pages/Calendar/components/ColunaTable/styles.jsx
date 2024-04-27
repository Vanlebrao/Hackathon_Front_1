import styled from "styled-components";

export const ContainerColunaTable = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
`;
export const CelContent = styled.div`
  width: 100%;
  padding: 10px;
  min-height: 70px;
  display: flex;
  align-items: flex-end;
  cursor: pointer;

  background-color: ${({ status, theme }) =>
    !status ? theme.colors.gray_400 : theme.colors.light_green_700};
  color: ${({ theme }) => theme.colors.white};

  display: flex;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
  border-radius: 6px;
  position: relative;

  &:active {
    filter: brightness(0.9);
  }

  & img {
    width: 30px;
    position: absolute;
    right: 1px;
    bottom: 3px;
  }
`;
export const CelContentOne = styled.div`
  width: 100%;
  min-height: 70px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  flex: 1;
  font-size: 14px;

  & div {
    width: 100%;
    display: flex;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;

    & .title {
      font-weight: bold;
      font-size: 12px;
      text-transform: uppercase;
    }
  }
`;
