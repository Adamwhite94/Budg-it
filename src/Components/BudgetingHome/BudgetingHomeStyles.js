import styled from "styled-components";

const BudgetContainer = styled.div``;
const BudgetElements = styled.div`
`;

const BudgetNav = styled.div`

`;
const BudgetNavList = styled.ul`
list-style-type: none;
color: #fff;
display:flex;
align-items: center;
justify-content: space-between;
flex-direction: row;
z-index: 1;

margin: 0;
height: 6rem;

`;
const BudgetNavListElements = styled.button`
border-radius:50%;
width: 4rem;
height: 4rem;
background:none;
color: #fff;
border: none;
cursor:pointer;

&:hover {
  background-color: #2EE59D;
  box-shadow: 0px 10px 15px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translateY(-7px);
}
`;

const BudgetBackground = styled.img`
max-width: 100%;
background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1000;
  width: 100%;
  -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(5px);
  text-align: center;
`;

const CardContainer = styled.div`
display:flex;
align-items: center;
justify-content: center;
`;
const CardElements = styled.div`
display:grid;
grid-template-columns: repeat(2, 12rem);
`;
const Card = styled.div`
background-color: white;
width: 10rem;
height: 15rem;
border-radius: 10%;
text-align: center;
font-size: 1.5rem;
`;

const BudgetTitle = styled.h1`
font-size: 3rem;
`;
const BudgetButtonContainer = styled.div`
padding-right: 1rem;
`;



export {
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
    BudgetButtonContainer
}