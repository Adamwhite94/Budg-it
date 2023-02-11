import styled from "styled-components";

const HomeContainer = styled.div``;
const HomeElements = styled.div`
display:flex;
align-items: center;
justify-content: center;
flex-direction: column;
height: 90vh;


`;
const HomeTitle = styled.h1`
color:white;
height: 4rem;
font-size: 5rem;
padding-top: 3rem;
`;
const HomeSmallTitle = styled.h3`
color: white;
font-size: 1.5rem;
`;
const HomeButton = styled.button`
background-color: #211522;
color: #fff;
width: 8rem;
height:3rem;
border: none;
letter-spacing: 1px;
  font-weight: 500;
  border-radius: 45px;
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
const HomeBackground = styled.img`
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


export{
    HomeContainer,
    HomeElements,
    HomeTitle,
    HomeSmallTitle,
    HomeButton,
    HomeBackground
}
