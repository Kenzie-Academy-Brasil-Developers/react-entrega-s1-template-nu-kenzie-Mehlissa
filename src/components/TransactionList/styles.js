import styled from "styled-components";

export const StyleList = styled.div`
  max-height: 447px;
  overflow: auto;

  .listContainer {
    display: flex;
    flex-direction: column;

    margin-bottom: 15px;

    gap: 0.9375rem;
  }

  .divContainerdescripitions {
    display: flex;
    flex-direction: column;

    gap: 13px;
  }

  .listStyle {
    background-color: var(--grey-1);

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    border-radius: 4px;
    border-left: solid 4px var(--color-Secondary);

    ${(financesList) => {
      financesList.financesList.map((finance) => {
        if (finance.valuetype == "Entrada") {
          `border-left: solid 2px var(--color-Secondary)`;
        }
      });
    }}

    gap: 17px;

    max-width: 100%;
    padding: 16px 20px;
  }

  .buttonRemove {
    background-color: var(--grey-2);
    color: var(--grey-4);

    height: 25px;

    border: none;
    border-radius: 2px;
  }

  .divContainerValue {
    display: flex;
    flex-direction: column;

    gap: 20px;
  }

  @media (min-width: 768px) {
    .listStyle {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;

      height: 70px;
    }

    .divContainerdescripitions {
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      height: 100%;

      gap: 20px;
    }

    .divContainerValue {
      gap: 15px;
    }
  }
`;
