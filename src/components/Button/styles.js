import styled from 'styled-components';

export const Container = styled.button`

  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.RED};
  color: ${({ theme }) => theme.COLORS.WHITE};

  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  line-height: 24px;

  height: 48px;
  padding: 12px 32px;

  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 5px;

`