import { Texts, Titles, Values } from "../../styles/globalTypografi";
import { StyleList } from "./styles";

export const TransactionList = ({ financesList, setfinancesList }) => {
  const removeFinanceFromList = (financeId) => {
    setfinancesList((financesList) =>
      financesList.filter((finance) => finance.id !== financeId)
    );
  };

  return (
    <StyleList financesList={financesList}>
      <ul className="listContainer">
        {financesList.map((finance) => (
          <li key={finance.id} className="listStyle">
            <div className="divContainerdescripitions">
              <Titles>{finance.description}</Titles>
              <Texts>{finance.valuetype}</Texts>
            </div>
            <div className="divContainerValue">
              <Values>R$ {finance.value},00</Values>
              <button
                className="buttonRemove"
                onClick={() => removeFinanceFromList(finance.id)}
              >
                Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>
    </StyleList>
  );
};
