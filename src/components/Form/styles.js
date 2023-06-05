import styled from "styled-components";

export const StyleForm = styled.form`
  .flexBox {
    height: 400px;
    padding: 1.5625rem 1.25rem;
    margin-top: 1.5625rem;
    margin-bottom: 1.25rem;

    border: solid 1px var(--grey-5);

    display: flex;
    flex-direction: column;

    gap: 0.9375rem;
  }

  .selectContainer {
    background-color: var(--grey-1);

    height: 48px;
    max-width: 100%;
    padding: 0rem 1rem;

    border: none;
    border-radius: 0.5rem;
  }

  .buttonSubmit {
    background-color: var(--color-primary);
    color: var(--grey-1);

    height: 48px;
    max-width: 100%;
    padding: 0rem 1rem;

    border: none;
    border-radius: 8px;
  }

  @media (min-width: 768px) {
    .flexBox {
      min-width: 340px;
    }
  }
`;
