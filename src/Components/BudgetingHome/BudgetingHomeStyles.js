import styled from "styled-components";
import BudgetHomeBg from "../../Images/hdbg13.jpg";


const BudgetContainer = styled.div`
background-image: url(${BudgetHomeBg});
background-size: cover;
background-position: center center;
background-repeat: no-repeat;
text-align: center;
margin: auto;
padding: 0;
height: 100vh;
`;
const BudgetElements = styled.div`
`;

const BudgetButton = styled.button`
background-color: #2F2B2Eff;
color: #fff;
width: 12rem;
height:3rem;
border: 1px solid white;
letter-spacing: 1px;
  font-weight: 500;
  border-radius: 5px;
  cursor: pointer;
  outline: none;

&:hover {
  background-color: #36343Dff;
}

`;


const CardContainer = styled.div`
display:flex;
align-items: center;
justify-content: center;
height: 100vh;



`;
const CardElements = styled.div`


`;
const Card = styled.div`
background-color: #211522;
color: #fff;
width: 20rem;

display:flex;
font-size: 1.2rem;
align-items: center;
justify-content: center;
flex-direction: column;
background:transparent;
letter-spacing: 1px;
  
`;

const BudgetTitle = styled.h1`
font-size: 5rem;
color: #fff;
height: 4rem;

`;
const BudgetButtonContainer = styled.div`

`;

const CardTitle = styled.h3`
height: 0;
`;
const CardValue = styled.h4``;


export {
    BudgetContainer,
    BudgetElements,
    BudgetButton,
    CardContainer,
    CardElements,
    Card,
    BudgetTitle,
    BudgetButtonContainer,
    CardTitle,
    CardValue
}