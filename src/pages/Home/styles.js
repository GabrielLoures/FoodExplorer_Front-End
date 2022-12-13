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

export const FirstSection = styled.div`

  display: flex;
  gap: 100px;
  margin-bottom: 62px;
  
  > div h1 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.GRAY_H1};
    margin-bottom: 8px;
  }

  > div p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.GRAY_H1};
  }

  > img {
    width: 632px;
    height: 407px;
    margin-top: -147px;
    margin-left: -100px;
  }

`;

export const Content = styled.div`

  grid-area: content;

  padding: 164px 124px 99px;

  > div {
    height: 260px;
    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
    align-items: center; 
  }
`;