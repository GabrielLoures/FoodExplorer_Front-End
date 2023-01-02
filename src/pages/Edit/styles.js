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

  grid-area: content;

  padding: 32px 125px 125px 125px;

`;

export const ContentHeader = styled.div`

  width: 100%;

  > a {
    display: flex;
    gap: 11px;
    align-items: center;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.GRAY_H1};
  }

`;

export const Form = styled.form`

  width: 100%;

  header h1 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.GRAY_H1};

    margin-top: 24px;
    margin-bottom: 32px;
  }

  
  > .first-row {
    display: flex;
    gap: 100px;
  }

  > .first-row .plateName {
    margin-right: -75px;
  }

  > .second-row {
    display: flex;
    gap: 32px;
  }

  > .button-row {
    display: flex;
    justify-content: end;
  }

  > .button-row .add-button {
    background: rgba(255, 255, 255, 0.1);
    opacity: 0.8;
    border: 1px solid white;
    border-radius: 5px;

    max-width: 300px;
  }

  @media (max-width: 1612px) {
    > .first-row {
    display: block;
    }

    > .second-row {
      display: block;
    }

    > .button-row {
      display: block;
    }

    > .button-row .add-button {
      width: 100%;
      max-width: 1000px;
    }
  }

`;

export const InputWrapper = styled.div`

  display: flex;
  flex-direction: column;
  width: 100%;

  margin-bottom: 32px;

  > label {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    color: ${({ theme }) => theme.COLORS.GRAY_CARD};
    margin-bottom: 8px;
  }

  .bordered-input {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_MAIN};
    border: 1px solid white;
    border-radius: 5px;
  }

`;

export const ImageUpload = styled.div`

  position: relative;
  width: 300px;

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    color: ${({ theme }) => theme.COLORS.GRAY_CARD};
    margin-bottom: 8px;
  }

  input {
    display: none;
  }

  > label {
    width: 200px;
    height: 48px;
    background: transparent;
    border: 1px solid white;
    border-radius: 5px;

    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;

    position: absolute;

    cursor: pointer;
  }

  label svg {
    font-size: 32px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  label h2 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  @media (max-width: 1612px) {
    margin-bottom: 80px;
  }
`;

export const InputIngredients = styled.div`

  height: 48px;
  display: flex;
  gap: 8px;

  align-items: center;

  padding: 10px;

  border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 5px;

`;