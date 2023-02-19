import { useState, useContext } from "react";
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
  CardButton
} from "./BudgetingHomeStyles";
import BudgetHomeBg from "../../Images/hdbg5.jpg";
import { AiFillDollarCircle, AiFillMail } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { budgetContext, GainedContext, SpentContext } from "../Expenses/Context/Contexts";




function BudgetingHome() {
  const {value} = useContext(GainedContext);
  const {loss} = useContext(SpentContext);
  const {budget} = useContext(budgetContext);

  const [budgetword, setBudgetWord] = useState('Neutral')


  let navigate = useNavigate();



 

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
          
            <CardValue>${value}</CardValue>
         
            </Card>
            <Card>
            <CardTitle>Current Losses</CardTitle>
            <CardValue>${loss}</CardValue>
            </Card>
            <Card>
              <CardTitle>Current Budget</CardTitle>
                <CardValue>${budget}</CardValue>
            
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
