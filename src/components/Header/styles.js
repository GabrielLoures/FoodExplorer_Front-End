import styled from 'styled-components'

export const Container = styled.header`

  grid-area: header;

  height: 105px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;

  padding: 23px 124px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_HEADER_FOOTER};

  > .logo {
    display: flex;
    gap: 12px;

    h1 {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 25.1109px;
      line-height: 29px;
      color: ${({ theme }) => theme.COLORS.WHITE};

      min-width: 150px;
    }
  }

  a {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.GRAY_H1};

    margin-left: 32px;
    margin-right: 32px;

    min-width: 140px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  > .order-button {
    max-width: 216px;
  }

`

export const Logout = styled.button`

  border: none;
  background: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 28px;
  }

`