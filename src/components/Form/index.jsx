import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { StyleForm } from "./styles";
import { StyleInputs } from "../../styles/stylesInputs";
import { Example, Subtitles } from "../../styles/globalTypografi";

export const Form = ({ setfinancesList }) => {
  const [description, setdescription] = useState("");
  const [value, setvalue] = useState("");
  const [valuetype, setvaluetype] = useState("Entrada");

  const addFinanceToList = () => {
    setfinancesList((financesList) => [
      ...financesList,
      { description, value, valuetype, id: uuidv4() },
    ]);
  };

  const submit = (event) => {
    event.preventDefault();

    addFinanceToList();

    setdescription("");
    setvalue("");
    setvaluetype("Entrada");
  };

  return (
    <StyleForm action="" onSubmit={submit}>
      <div className="flexBox">
        <Subtitles htmlFor="">Descrição</Subtitles>
        <StyleInputs
          placeholder="Digite aqui sua descrição"
          type="text"
          value={description}
          onChange={(event) => setdescription(event.target.value)}
          required
        />

        <Example>Ex: Compra de roupas</Example>

        <Subtitles htmlFor="">Valor (R$)</Subtitles>
        <StyleInputs
          placeholder="1"
          type="number"
          onChange={(event) => setvalue(event.target.value)}
          value={value}
          required
        />

        <Subtitles htmlFor="">Tipo de valor</Subtitles>
        <select
          className="selectContainer"
          name=""
          id=""
          onChange={(event) => setvaluetype(event.target.value)}
          value={valuetype}
          required
        >
          <option value="Entrada">Entrada</option>
          <option value="Despesas">Despesas</option>
        </select>

        <button type="submit" className="buttonSubmit">
          Inserir valor
        </button>
      </div>
    </StyleForm>
  );
};
