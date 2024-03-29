import React, { useState, createContext} from "react";
import { Outlet } from "react-router-dom";
import {
  ExpensesContainer,
  ExpensesElements,
  ExpensesTitle,
  ExpensesLanes,
  ExpensesButtonsContainer,
  ExpensesButton,
  ExpenseBackground,
} from "./ExpensesStyles";

import { BsPen } from "react-icons/bs";
import { AiOutlineDollarCircle } from "react-icons/ai";
import NewEntry from "./Forms/NewEntry";
import SetBudget from './Forms/SetBudget'




function Expenses() {


  const [buttons, displayButtons] = useState(true);
  const [expense, displayExpense] = useState(false);
  const [budget, displayBudget] = useState(false);


  const newEntry = () => {
      displayButtons(false);
      displayExpense(true);
  };

  const setBudget = ()=>{
    displayButtons(false);
    displayBudget(true);
    
  }



  return (
    <ExpensesContainer>
 
      <ExpensesElements>
        <ExpensesTitle>Budg-It (Manage Your Budget)</ExpensesTitle>

    { buttons?
        <ExpensesButtonsContainer>
          <ExpensesButton onClick={(e)=>newEntry(e)}>
            <BsPen size={40} />
            <br />
            Create a new Entry
          </ExpensesButton>
          <ExpensesButton onClick={(e)=>setBudget(e)}>
            <AiOutlineDollarCircle size={40} />
            <br />
            Set Your Budget
          </ExpensesButton>
        </ExpensesButtonsContainer>:null}
       
        <ExpensesLanes>
        {expense === true ?

        <NewEntry/>
    
       
      
        :null}
        {budget === true ? <SetBudget />:null}
        </ExpensesLanes>
             {/* <ExpensesInputsContainerHighLow>
            <ExpensesSmallTitle>Expenses - Higher/Lower</ExpensesSmallTitle>
          </ExpensesInputsContainerHighLow> */}
      </ExpensesElements>

      <Outlet />
    </ExpensesContainer>
  );
}

export default Expenses;
