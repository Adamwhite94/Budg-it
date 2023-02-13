import styled from "styled-components";

const ExpensesContainer = styled.div``;
const ExpensesElements = styled.div``;
const ExpensesInputsContainer = styled.div`
display:flex;
align-items: center;
flex-direction: column;
width: 20rem;
height: 30rem;

`;

const ExpensesInputsContainerHighLow = styled.div`
display:flex;
align-items: center;
justify-content: center;
`;
const ExpensesInputs = styled.input`
width: 22rem;
height: 2rem;
border: none;
border-bottom:2px solid grey;
outline: none;
background: none;
transition: padding 0.3s 0.2s ease;
color: #fff;


&:focus {
    padding-bottom: 5px;
  }

`;
const ExpensesTitle = styled.h1`
color: #fff;
padding: 2rem;
`;
const ExpensesLanes = styled.div`
display:flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding: 3rem;

`;



const ExpensesButtonsContainer = styled.div`
display:flex;
justify-content: center;
align-items: center;
height: 65vh;
gap: 2rem;
`;
const ExpensesButton = styled.button`
background-color: #211522;
color: #fff;
width: 20rem;
height:10rem;
display:flex;
font-size: 1.2rem;
align-items: center;
justify-content: center;
flex-direction: column;

border-radius: 2rem;
border: none;
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

const ExpenseBackground = styled.img`
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
const ExpensesLabel = styled.label`
font-size: 1.8rem;
color: #fff;

`;
const ExpensesForm = styled.form`
display:flex;
align-items: center;
border-radius:10px;
flex-direction: column;
justify-content: center;
background-color: #211522;
gap: 2rem;
border:3px solid white;
width: 40rem;
height: 30rem;


`;

const SubmitButton = styled.button`
background-color: #211522;
color: #fff;
width: 10rem;
height: 5rem;
display:flex;
font-size: 1rem;
align-items: center;
justify-content: center;
flex-direction: column;
margin-top: 2rem;
border-radius: 2rem;
border: none;
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

const ExpenseFormHeader = styled.div`
background-color: white;
width: 39rem;
height: 5rem;
display:flex;
align-items: center;
justify-content: center;
border-radius: 10px;

`;




export {
    ExpensesContainer,
    ExpensesElements,
    ExpensesInputs,
    ExpensesInputsContainer,
    ExpensesLanes,
    ExpensesTitle,
    ExpensesForm,
    ExpensesButtonsContainer,
    ExpensesButton,
    ExpensesInputsContainerHighLow,
    ExpenseBackground,
    ExpensesLabel,
    SubmitButton,
    ExpenseFormHeader,
  
}
