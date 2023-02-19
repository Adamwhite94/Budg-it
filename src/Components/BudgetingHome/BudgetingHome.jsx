import { useState, useEffect} from "react";
import {
  BudgetContainer,
  BudgetElements,
  BudgetNav,
  BudgetNavList,
  BudgetNavListElements,
  BudgetBackground,
  CardContainer,
  CardElements,
  Card,
  BudgetTitle,
  BudgetButtonContainer,
  CardTitle,
  CardValue,
  CardButton,
} from "./BudgetingHomeStyles";
import BudgetHomeBg from "../../Images/hdbg5.jpg";
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
      <BudgetBackground src={BudgetHomeBg} alt="hallway" />
      <BudgetElements>
        <BudgetNav>
          <BudgetNavList>
            <BudgetTitle>Budg-it</BudgetTitle>
            <BudgetButtonContainer>
              <BudgetNavListElements onClick={() => navigate("/user/expenses")}>
                <AiFillDollarCircle size={40} />
              </BudgetNavListElements>
            </BudgetButtonContainer>
          </BudgetNavList>
        </BudgetNav>

        <CardContainer>
          <CardElements>
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
          </CardElements>
        </CardContainer>
      </BudgetElements>
    </BudgetContainer>
  );
}

export default BudgetingHome;
