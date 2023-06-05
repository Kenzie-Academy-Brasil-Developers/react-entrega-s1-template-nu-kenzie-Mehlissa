import { Texts, Titles, ValuesTotal } from "../../styles/globalTypografi";
import { StyleTotalValue } from "./styles";

export const TotalValue = ({ financesList }) => {
  const totalValue = financesList.reduce((accValue, finance) => {
    if (finance.valuetype == "Entrada") {
      return accValue + parseInt(finance.value);
    } else {
      return accValue - parseInt(finance.value);
    }
  }, 0);

  return (
    <StyleTotalValue>
      <div className="divContainer">
        <div className="divValue">
          <Titles>Valor total: </Titles>
          <ValuesTotal>R$ {totalValue},00</ValuesTotal>
        </div>

        <Texts>O valor se refere ao saldo</Texts>
      </div>
    </StyleTotalValue>
  );
};
