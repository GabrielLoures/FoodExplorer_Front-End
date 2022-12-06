import styled from "styled-components";

export const Container = styled.div`

  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border-radius: 5px;

  > input {
    height: 48px;
    width: 100%;

    padding: 14px;

    color: ${({ theme }) => theme.COLORS.GRAY_CARD};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_INPUT};
    }
  }

  > svg {
    margin-left: 16px;
  }

`