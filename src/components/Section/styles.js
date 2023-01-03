import styled from 'styled-components'

export const Container = styled.section`

  width: 100%;
  margin-top: 40px;
  
  > h2 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.GRAY_H1};
    margin-bottom: 9.5px;
  }
`;

export const Scroll = styled.div`

position: relative;

  > div {
    
    max-width: 1640px;
    overflow: auto;
    display: flex;
    gap: 27px;

    ::-webkit-scrollbar {
      width: auto;
      color: white;
    }
  }

  > button {
    position: absolute;
    z-index: 99;
    
    width: 116px;
    height: 512px;
    background: linear-gradient(90deg, rgba(0, 10, 15, 0.272541) 0%, #000A0F 100%);

    border: none;

    svg {
      font-size: 40px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  .btn-right {
    position: absolute;
    bottom: 17.8px;
    right: 0;
  }

  .hidden {
    display: none;
  }

  @media (max-width: 1142px) {
    > div {
      max-width: 1100px;
    }
  }
  
`


