import styled from "styled-components";

export const StyleTotalValue = styled.div`
  width: 100%;

  .divContainer {
    display: flex;
    flex-direction: column;

    gap: 7px;

    height: 57px;
    padding: 20px 20px;
    margin-bottom: 25px;

    border: solid 1px var(--grey-2);
    border-radius: 4px;
  }

  .divValue {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
