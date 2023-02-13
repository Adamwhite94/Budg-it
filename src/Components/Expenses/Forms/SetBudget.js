import React, { useState } from "react";
import {
  ExpensesForm,
  ExpensesInputs,
  ExpensesLabel,
  SubmitButton,
  ExpensesInputsContainer,
} from "../ExpensesStyles";
import { useNavigate } from "react-router-dom";

function SetBudget() {
  const navigate = useNavigate();
  const budget = {
    amount: "",
  };
  const [budgetvalue, setBudgetValue] = useState(budget);
  const [budgetsent, setBudgetSent] = useState(false);

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setBudgetValue({
      ...budgetvalue,
      [name]: value,
    });
    setBudgetSent(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/user", { state: { budgetvalue, budgetsent } });
    //how to pass a state confirming that data has been sent ? is their a better way?
  };

  return (
    <>
      <ExpensesInputsContainer onSubmit={(e) => handleSubmit(e)}>
        <ExpensesForm id="budgetform">
          <ExpensesLabel htmlFor="budgetvalue">
            What Budget would you like? (AUD)
          </ExpensesLabel>
          <ExpensesInputs 
          type="number" 
          value={budgetvalue.amount}
          onChange={handleInputChange}
          name="value"
          label="Value"
          />
          <ExpensesLabel htmlFor="date">
            Set a date this budget will expire
          </ExpensesLabel>
          <ExpensesInputs type="date" />
          <ExpensesLabel htmlFor="date">
            Receive warnings before this date?
          </ExpensesLabel>
          <ExpensesInputs type="checkbox" />
        </ExpensesForm>
        <SubmitButton type="submit" form="budgetform">
          Submit
        </SubmitButton>
      </ExpensesInputsContainer>
    </>
  );
}

export default SetBudget;
