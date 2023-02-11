import React, { useState } from "react";
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

function NewEntry() {
  const navigate = useNavigate();
  const initialValues = {
    value: "",
    subject: "",
  };
  const [values, setValues] = useState(initialValues);

  const [expenseform, toggleExpenseForm] = useState(false);
  const [moneygained, toggleMoneyGainedForm] = useState(false);
  const [optionsbuttons, displayOptionsButtons] = useState(true);
  const [valuecheck, setValueCheck] = useState(false);

  const toggleExpense = () => {
    toggleExpenseForm(true);
    displayOptionsButtons(false);
  };
  const toggleMoneyGained = () => {
    toggleMoneyGainedForm(true);
    displayOptionsButtons(false);
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });  
    setValueCheck(true);
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    navigate('/user', {state:{values, valuecheck}})
      //how to pass a state confirming that data has been sent ? is their a better way?
  }

  return (
    <ExpensesInputsContainer>
      {optionsbuttons ? (
        <ExpensesButtonsContainer>
          <ExpensesButton onClick={(e) => toggleExpense(e)}>
            I <u>Spent money</u>
          </ExpensesButton>
          <ExpensesButton onClick={(e) => toggleMoneyGained(e)}>
            I <u>Earned money</u>
          </ExpensesButton>
        </ExpensesButtonsContainer>
      ) : null}

      {/* Rendered after the selection above  */}

      {expenseform ? (
        <>
          <ExpensesForm id="expenseform" onSubmit={(e)=>handleSubmit(e)}>
            <ExpensesLabel htmlFor="amount">Value spent in (AUD)</ExpensesLabel>
            <ExpensesInputs
              type="number"
              id="amount"
              placeholder="Value Spent"
              value={values.value}
              onChange={handleInputChange}
              name="value"
              label="Value"
            />

            <ExpensesLabel htmlFor="whaton"> What did you spend this amount on? </ExpensesLabel>
            <ExpensesInputs 
            type="input" 
            id="whaton" 
            value={values.subject}
            onChange={handleInputChange}
            name="subject"
            label="Subject"
            />

          </ExpensesForm>
          <SubmitButton type="submit" form="expenseform">Submit</SubmitButton>
        </>
      ) : null}

      {moneygained ? (
        <>
          <ExpensesForm id="moneygainedform" onSubmit={(e)=>handleSubmit(e)}>
            <ExpensesLabel htmlFor="amount">
              Enter a value gained in (AUD)
            </ExpensesLabel>
            <ExpensesInputs 
            type="number" 
            id="amount" 
            placeholder="$(AUD)" 
            value={values.value}
            onChange={handleInputChange}
            name="value"
            label="Value"
            />
            <ExpensesLabel htmlFor="gainedfrom">
              Where did you gain this money from?
            </ExpensesLabel>
            <ExpensesInputs 
            type="input" 
            id="gainedfrom" 
            value={values.subject}
            onChange={handleInputChange}
            name="subject"
            label="Subject"
            />
          </ExpensesForm>
          <SubmitButton type="submit" form="moneygainedform">
            Submit
          </SubmitButton>
        </>
      ) : null}
    </ExpensesInputsContainer>
  );
}

export default NewEntry;
