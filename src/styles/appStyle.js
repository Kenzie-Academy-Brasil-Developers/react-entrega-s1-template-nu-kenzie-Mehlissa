import styled from "styled-components";

export const StyleApp = styled.section`
  width: 100%;
  .titleFinance {
    margin-bottom: 25px;
    margin-top: 25px;
  }

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const StyleMainApp = styled.main`
  section {
    margin-top: 10px;
  }

  .divContainerMain {
    margin-top: 67px;
    padding: 15px 30px;
  }

  @media (min-width: 768px) {
    .divContainerMain {
      display: flex;
      flex-direction: row;
      gap: 5%;

      padding: 15px 10%;
    }
  }
`;
