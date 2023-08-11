import styled from "styled-components";
import Background from "../../Images/hdbg15.jpg";

const ExpensesContainer = styled.div`
background-image: url(${Background});
background-size: cover;
background-position: center center;
background-repeat: no-repeat;
text-align: center;
margin: auto;
padding: 0;
height: 100vh;
`;
const ExpensesElements = styled.div``;
const ExpensesInputsContainer = styled.div`
display:flex;
align-items: center;
flex-direction: column;


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

color: black;

`;
const ExpensesTitle = styled.h1`
color: #fff;
margin: 0;
padding: 2rem;

`;
const ExpensesLanes = styled.div`
display:flex;
align-items: center;
justify-content: center;


`;



const ExpensesButtonsContainer = styled.div`
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 65vh;
gap: 2rem;
`;
const ExpensesButton = styled.button`
background-color: #2F2B2Eff;
color: #fff;
width: 20rem;
height:8rem;
border: 1px solid white;
letter-spacing: 2px;
  font-weight: 500;
  border-radius: 5px;
  cursor: pointer;
  outline: none;

&:hover {
  background-color: #36343Dff;
}
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
    ExpensesLabel,
    SubmitButton,
    ExpenseFormHeader,
  
}
