import React, { useState, useContext } from "react";
import {
  ExpensesForm,
  ExpensesInputs,
  ExpensesLabel,
  SubmitButton,
  ExpensesInputsContainer,
} from "../ExpensesStyles";
import { useNavigate } from "react-router-dom";
import { budgetContext } from "../Context/Contexts";

function SetBudget() {
  const navigate = useNavigate();
 
  const { budget, storeBudget } = useContext(budgetContext);
 
  const handleSubmit = (e) => {
    e.preventDefault();

    navigate('/user')
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
          value={budget}
          onChange={(e)=>{
          storeBudget(e.target.value)
          }}
          name="value"
          label="Value"
          />
        </ExpensesForm>
        <SubmitButton type="submit" form="budgetform">
          Submit
        </SubmitButton>
      </ExpensesInputsContainer>
    </>
  );
}

export default SetBudget;
