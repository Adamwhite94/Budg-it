import styled from "styled-components";
import {motion} from 'framer-motion'
import Background from '../../Images/hdbg8.jpg'

const HomeContainer = styled.div`
background-image: url(${Background});
background-size: cover;
background-position: center center;
background-repeat: no-repeat;
text-align: center;
margin: auto;
padding: 0;
height: 100vh;
`;
const HomeElements = styled.div`
display:flex;
align-items: flex-start;
justify-content: center;
flex-direction: column;
height: 96vh;
margin-left: 5.5rem;


`;
const HomeTitle = styled(motion.span)`
color:white;
font-size: 6rem;


`;
const HomeSmallTitle = styled.h3`
color: white;
font-size: 1.5rem;
padding-left: 0.4rem;
`;
const HomeButton = styled.button`
background-color: #2F2B2Eff;
color: #fff;
width: 8rem;
height:3rem;
border: 1px solid white;
letter-spacing: 1px;
  font-weight: 500;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  margin-top: 5rem;
&:hover {
  background-color: #36343Dff;
}
`;


const HomeTitleContainer = styled(motion.div)`
height: 5.8rem;
`;
export{
    HomeContainer,
    HomeElements,
    HomeTitle,
    HomeSmallTitle,
    HomeButton,
    HomeTitleContainer
}
