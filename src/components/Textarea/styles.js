import styled from 'styled-components'

export const Container = styled.textarea`

  width: 100%;
  height: 200px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_MAIN};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  border: 1px solid white;
  border-radius: 5px;

  padding: 14px;

  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_INPUT};
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
  }

`