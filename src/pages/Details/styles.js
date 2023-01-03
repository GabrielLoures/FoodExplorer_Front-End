import styled from "styled-components";

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

  padding: 25px 300px 168px 130px;

  @media (max-width: 820px) {
    
    padding: 25px 100px;
    
  }

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

export const MainContent = styled.div`

  display: flex;
  align-items: center;
  gap: 200px;
  margin-top: 55px;

  > img {
    width: 545px;
    height: 545px;
  }

  > .description .texts {
    h1 {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 40px;
      line-height: 140%;
      color: ${({ theme }) => theme.COLORS.GRAY_H1};

      margin-bottom: 8px;
    }

    p {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 140%;
      color: ${({ theme }) => theme.COLORS.GRAY_H1};
    }
  }

  > .description .products-list {

    margin-top: 35px;

    ul {
      display: flex;
      list-style: none;
    }

    ul li {
      margin-right: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    ul li p {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 140%;
      text-transform: capitalize;
      color: ${({ theme }) => theme.COLORS.GRAY_H1};

      margin-top: 8px;
    }

    img {
      width: 100px;
      height: 100px;
    }
  }

  > .description .payments-details {
    display: flex;
    align-items: center;
    gap: 100px;
    margin-top: 45px;

    .value {
      display: flex;
      gap: 10px;
    }

    .value h1 {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 32px;
      line-height: 160%;
      color: ${({ theme }) => theme.COLORS.BLUE};

      text-align: center;
    }

    .plus-minus {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 17.5px;
    }

    .plus-minus h5 {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      line-height: 160%;

      color: ${({ theme }) => theme.COLORS.GRAY_H1};
    }
  }

  @media (max-width: 820px) {
    
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

`

