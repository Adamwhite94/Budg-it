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
height: 70vh;

`;
const CardElements = styled.div`
display:grid;
grid-template-columns: repeat(2, 20rem);
grid-column-gap: 2rem;
grid-row-gap: 2rem;

`;
const Card = styled.div`
background-color: #211522;
color: #fff;
width: 20rem;
height:10rem;
display:flex;
font-size: 1.2rem;
align-items: center;
justify-content: center;
flex-direction: column;
background:transparent;

border-radius: 2rem;
border: 1px solid white;
letter-spacing: 1px;
  font-weight: 1000;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);

  outline: none;
 
`;

const BudgetTitle = styled.h1`
font-size: 3rem;
`;
const BudgetButtonContainer = styled.div`
padding-right: 1rem;
`;

const CardTitle = styled.h3``;
const CardValue = styled.h4``;
const CardButton = styled.button`
background-color: #211522;
color: #fff;
width: 13rem;
height:4rem;
display:flex;
font-size: 0.8rem;
align-items: center;
justify-content: center;
flex-direction: column;
background: transparent;
border-radius: 2rem;
border: 1px solid white;
letter-spacing: 1px;
  font-weight: 1000;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  outline: none;
  &:hover {
  background-color: #2EE59D;
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translateY(-7px);
  }
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
    BudgetButtonContainer,
    CardTitle,
    CardValue,
    CardButton
}