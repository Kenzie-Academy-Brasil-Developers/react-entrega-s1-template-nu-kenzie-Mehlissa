import styled from "styled-components";

export const StyledHeader = styled.header`
  -webkit-box-shadow: 0px 9px 17px -10px rgba(222, 219, 222, 1);
  -moz-box-shadow: 0px 9px 17px -10px rgba(222, 219, 222, 1);
  box-shadow: 0px 9px 17px -10px rgba(222, 219, 222, 1);

  top: 0px;
  width: 100%;

  position: absolute;

  .flexBox {
    background-color: var(--grey-1);

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    height: 69px;
    padding: 0px 30px;
  }

  @media (min-width: 768px) {
    .flexBox {
      padding: 15px 10%;
    }
  }
`;
