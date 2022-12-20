import styled from 'styled-components'

export const Container = styled.div`

  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto 92px;
  grid-template-areas:
  "header"
  "content"
  "footer"

`;

export const Content = styled.div`

  width: 100%;
  grid-area: content;

  padding: 90px 110px 135px;

  display: flex;
  gap: 310px;
  align-items: center;
  justify-content: center;

  > .logo {

    display: flex;
    gap: 20px;

    img {
      width: 50px;
      height: 50px;
    }

    h1 {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 42.4815px;
      line-height: 50px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  @media (max-width: 820px) {
    
    display: flex;
    flex-direction: column;
    gap: 50px;
    
  }

`;

export const Form = styled.form`

  width: 475px;

  display: flex;
  flex-direction: column;

  padding: 64px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BOX};
  border-radius: 16px;

  h1 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};

    text-align: center;
    margin-bottom: 8px;
  }

  label {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    color: ${({ theme }) => theme.COLORS.GRAY_CARD};

    margin-bottom: 8px;
    margin-top: 24px;
  }

  .sign-input {
    border: 2px solid ${({theme}) => theme.COLORS.WHITE};
    border-radius: 5px;
  }

  .sign-btn {
    margin-top: 32px;
    margin-bottom: 32px;
  }

  a {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};

    text-align: center;
  }


`