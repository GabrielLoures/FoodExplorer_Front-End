import styled from 'styled-components'

export const Container = styled.footer`

  grid-area: footer;

  width: 100%;
  height: 92px;

  position: fixed;
  z-index: 100;
  bottom: 0;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_HEADER_FOOTER};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 30px 123px;

  > .logo {
    display: flex;
    gap: 12px;

    h1 {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 25.1109px;
      line-height: 29px;
      color: ${({ theme }) => theme.COLORS.GRAY_LOGO};
    }
  }

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  @media (max-width: 1142px) {
    
    padding: 23px 10px;

  }
  
  @media (max-width: 820px) {
    
    display: none;
    
  }

`