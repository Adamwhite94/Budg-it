import { useState } from 'react'
import {BudgetContainer, BudgetElements, BudgetNav, BudgetNavList, BudgetNavListElements, BudgetBackground, CardContainer, CardElements,Card, BudgetTitle, BudgetButtonContainer} from './BudgetingHomeStyles'
import BudgetHomeBg from '../../Images/hdbg5.jpg'
import {AiFillDollarCircle, AiFillMail} from 'react-icons/ai'
import { useNavigate, useLocation } from 'react-router-dom'


function BudgetingHome() {
  const location = useLocation();
  console.log(location);

  let navigate = useNavigate();

  return (
    
    <BudgetContainer>
      <BudgetBackground src = {BudgetHomeBg} alt = "hallway"/>
      <BudgetElements>
        <BudgetNav>
          <BudgetNavList>
            <BudgetTitle>Budg-it</BudgetTitle>
            <BudgetButtonContainer>
            <BudgetNavListElements onClick={()=>navigate('/user/expenses')}><AiFillDollarCircle size={40}/></BudgetNavListElements>
            <BudgetNavListElements><AiFillMail size={40}/></BudgetNavListElements>
            </BudgetButtonContainer>
          </BudgetNavList>
        </BudgetNav>

        <CardContainer>
          <CardElements>
            <Card>
             {/* {location.state.valuecheck ? <div> 
                <h3>{location.state.value}</h3>
                <h3>{location.state.subject}</h3>
              </div>:null } */}
              {/* need a check for default off but turn on when state is sent */}
            </Card>
              <Card>
                {/* {Location.state.value} */}
              </Card>
          </CardElements>
        </CardContainer>

      </BudgetElements>
    </BudgetContainer>
  )
}

export default BudgetingHome