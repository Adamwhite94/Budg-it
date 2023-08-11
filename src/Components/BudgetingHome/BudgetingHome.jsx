import { useState, useEffect} from "react";
import {
  BudgetContainer,
  BudgetElements,


  BudgetButton,
  BudgetBackground,
  CardContainer,
  CardElements,
  Card,
  BudgetTitle,
  BudgetButtonContainer,
  CardTitle,
  CardValue,

} from "./BudgetingHomeStyles";

import { AiFillDollarCircle, AiFillMail } from "react-icons/ai";
import { useNavigate } from "react-router-dom";


function BudgetingHome() {
  const gainedValue = JSON.parse((localStorage.getItem('gainedvalue')));
  const spentValue = JSON.parse((localStorage.getItem('spentvalue')));
  const budgetValue = JSON.parse((localStorage.getItem('budgetvalue')));

  const [budgetword, setBudgetWord] = useState("Neutral");

  let navigate = useNavigate();

  useEffect(()=>{
    gainedValue >= budgetValue ? setBudgetWord('Positive'):setBudgetWord('Neutral');
 
  });

  useEffect(()=>{
    spentValue < budgetValue ? setBudgetWord('Positive'):setBudgetWord('Negative');
  })

  return (
    <BudgetContainer>
      <BudgetElements>
  

        <CardContainer>
          <CardElements>
          <BudgetTitle>Budg-it</BudgetTitle>
            <Card>
              <CardTitle>Current Profits</CardTitle>

              <CardValue>${gainedValue}</CardValue>
            </Card>
            <Card>
              <CardTitle>Current Losses</CardTitle>
              <CardValue>${spentValue}</CardValue>
            </Card>
            <Card>
              <CardTitle>Current Budget</CardTitle>
              <CardValue>${budgetValue}</CardValue>
            </Card>
            <Card>
              <CardTitle>{budgetword}</CardTitle>
              <CardValue>Currently you are {budgetword}</CardValue>
            </Card>
            <BudgetButtonContainer>
              <BudgetButton onClick={() => navigate("/user/expenses")} >Manage Your Budget</BudgetButton>
                
            </BudgetButtonContainer>
          </CardElements>
        </CardContainer>
      </BudgetElements>
    </BudgetContainer>
  );
}

export default BudgetingHome;
