import { useState, useEffect } from "react";
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
import { useNavigate, useLocation } from "react-router-dom";

function BudgetingHome() {

  const location = useLocation();
  console.log(location);
  let navigate = useNavigate();


  //super messy and needs more work, look into redux

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
            <CardValue>$0</CardValue>
              {/* {location.state.valuecheck ? (
                <div>
                  <h3>${location.state.values.value}</h3>
                  <h3>{location.state.values.subject}</h3>
                </div>
              ) : null} */}
              {/* need a check for default off but turn on when state is sent */}
            </Card>
            <Card>
            <CardTitle>Current Losses</CardTitle>
            <CardValue>$0</CardValue>
            </Card>
            <Card>
              <CardTitle>Current Budget</CardTitle>
                <CardValue>$0</CardValue>
              {/* {location.state.budgetsent ? (
                <div>{location.state.budgetvalue.amount}</div>
              ) : null} */}
            </Card>
            <Card>
            <CardTitle>Budget Chart</CardTitle>
            <CardButton>Generate a customized chart</CardButton> 
            {/* Maybe */}
            </Card>
          </CardElements>
        </CardContainer>
      </BudgetElements>
    </BudgetContainer>
  );
}

export default BudgetingHome;
