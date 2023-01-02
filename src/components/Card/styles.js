import styled from "styled-components";

export const Container = styled.div`

  min-width: 300px;
  max-width: 300px;
  height: 512px;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  padding: 0 22.5px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_CARD};

  border: 1px solid ${({ theme }) => theme.COLORS.CARD_BORDER};

  border-radius: 8px;

  > .favorite-svg {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 26px;

    position: absolute;
    top: 21px;
    right: 19px;
  }

  img {
    width: 180px;
    height: 180px;
    margin-bottom: 16px;
  }

  h2 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.GRAY_H1};

    margin-bottom: 16px;
  }

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.GRAY_CARD};

    text-align: center;

    margin-bottom: 16px;
  }

  h1 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.BLUE};

    text-align: center;
  }

  > .bottom-card {
    display: flex;
    align-items: center;

    gap: 20px;
    margin-top: 12px;

    .plus-minus {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 17.5px;
    }

    h5 {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 160%;

      color: ${({ theme }) => theme.COLORS.GRAY_H1};
    }

    svg {
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.GRAY_H1}
    }
  }

`