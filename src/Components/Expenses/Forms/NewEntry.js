import React, { useState, useContext } from "react";
import {
  ExpensesInputsContainer,
  ExpensesInputs,
  ExpensesLabel,
  ExpensesButton,
  ExpensesForm,
  ExpensesButtonsContainer,
  SubmitButton,
  ExpenseFormHeader,
} from "../ExpensesStyles";
import { useNavigate } from "react-router-dom";
import { GainedContext, SpentContext } from "../Context/Contexts";


function NewEntry() {
  const { value, storeValue } = useContext(GainedContext);
  const { loss, storeSpentValue } = useContext(SpentContext);

  let navigate = useNavigate();
  const [gainedform, toggleGainedForm] = useState(false);
  const [expenseform, toggleExpenseForm] = useState(false);
  const [optionsbuttons, displayOptionsButtons] = useState(true);

  const toggleExpense = () => {
    toggleGainedForm(true);
    displayOptionsButtons(false);
  };
  const toggleMoneyGained = () => {
    toggleExpenseForm(true);
    displayOptionsButtons(false);
  };
  //logic for buttons

  //pretty sure all to do is pass the value into the expense file and its done
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/user");
  };

  return (
    <ExpensesInputsContainer>
      {optionsbuttons ? (
        <ExpensesButtonsContainer>
          <ExpensesButton onClick={(e) => toggleExpense(e)}>
            I <u>Earned</u> Money
          </ExpensesButton>
          <ExpensesButton onClick={(e) => toggleMoneyGained(e)}>
            I <u>Spent</u> Money
          </ExpensesButton>
        </ExpensesButtonsContainer>
      ) : null}

      {/* Rendered after the selection above  */}

      {gainedform ? (
        <>
          <ExpensesForm id="gainedform" onSubmit={(e) => handleSubmit(e)}>
            <ExpensesLabel htmlFor="amount">
              Value gained in (AUD)
            </ExpensesLabel>
            <ExpensesInputs
              type="number"
              id="amount"
              placeholder="Value Gained"
              defaultValue={value}
              onChange={(e) => {
                storeValue(e.target.value)
              }}
              name="value"
              label="Value"
            />
          </ExpensesForm>
          <SubmitButton type="submit" form="gainedform">
            Submit
          </SubmitButton>
        </>
      ) : null}

      {expenseform ? (
        <>
          <ExpensesForm id="expenseform" onSubmit={(e) => handleSubmit(e)}>
            <ExpensesLabel htmlFor="amount">
              Enter a value Spent in (AUD)
            </ExpensesLabel>
            <ExpensesInputs
              type="number"
              id="amount"
              placeholder="Enter a value spent"
              defaultValue={loss}
              onChange={(e) => {
                storeSpentValue(e.target.value);
              }}
              name="value"
              label="Value"
            />
          </ExpensesForm>
          <SubmitButton type="submit" form="expenseform">
            Submit
          </SubmitButton>
        </>
      ) : null}
    </ExpensesInputsContainer>
  );
}

export default NewEntry;
