import { useState } from "react";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { TotalValue } from "./components/TotalValue";
import { TransactionList } from "./components/TransactionList";
import { GlobalStyles } from "./styles/globalStyles";
import { Reset } from "./styles/reset";
import { StyleApp } from "./styles/appStyle";
import { StyleMainApp } from "./styles/appStyle";
import { TextEmpyt, Titles } from "./styles/globalTypografi";

function App() {
  const [financesList, setfinancesList] = useState([]);

  return (
    <>
      <Reset />
      <GlobalStyles />

      <header>
        <Header />
      </header>
      <StyleMainApp>
        <div className="divContainerMain">
          <section>
            <Form setfinancesList={setfinancesList} />
            <TotalValue financesList={financesList} />
          </section>

          <StyleApp>
            <Titles className="titleFinance">Resumo financeiro</Titles>

            {financesList.length > 0 ? (
              <TransactionList
                financesList={financesList}
                setfinancesList={setfinancesList}
              />
            ) : (
              <TextEmpyt>Você ainda não possui nenhum lançamento</TextEmpyt>
            )}
          </StyleApp>
        </div>
      </StyleMainApp>
    </>
  );
}

export default App;
