import styled from 'styled-components'

export const Container = styled.div`

  display: flex;
  gap: 8px;
  align-items: center;
  height: 32px;

  padding: 10px 16px;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.GRAY_BUTTON};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_INPUT}` : "none"};

  border-radius: 8px;

  > button {
    border: none;
    background: none;
    display: flex;
    align-items: center;

    color: ${({ theme, isNew }) => isNew ? theme.COLORS.GRAY_INPUT : theme.COLORS.WHITE};
  }

  > input {
    height: 32px;
    width: 90px; 

    background: transparent;

    color: ${({ theme }) => theme.COLORS.WHITE};

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_INPUT};
    }

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }

`;