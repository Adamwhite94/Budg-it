import styled from "styled-components";
import {motion} from 'framer-motion'
import Background from '../../Images/hdbg8.jpg'
import { device } from "../Breakpoints/Breakpoints";


// @media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
// }
// @media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
// }
// @media only screen and (${device.mobileLSmallerBP}) and (${device.pixelBP}) {
// }
// @media only screen and (${device.tabletSmallerBP}) and (${device.tablet}) {
// }
// @media only screen and (${device.laptopSmallerBP}) and (${device.laptop}) {
// }

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

@media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
  margin-left: 0;
  text-align: center;
  display:flex;
  align-items: center;
  justify-content: center;
} 
@media only screen and (${device.mobileLSmallerBP}) and (${device.pixelBP}) {
  margin-left: 0;
  text-align: center;
  display:flex;
  align-items: center;
  justify-content: center;

} 
 @media only screen and (${device.mobileLSmallerBP}) and (${device.pixelBP}) {
  margin-left: 0;
  text-align: center;
  display:flex;
  align-items: center;
  justify-content: center;
  height: 75vh;
}

 @media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
  margin-left: 0;
  text-align: center;
  display:flex;
  align-items: center;
  justify-content: center;
  height: 75vh;
 }
  

`;
const HomeTitle = styled(motion.span)`
color:white;
font-size: 6rem;

@media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
  font-size: 4rem;
} 

@media only screen and (${device.mobileLSmallerBP}) and (${device.pixelBP}) {
 font-size: 4rem;

} 
@media only screen and (${device.pixelBP}) and (${device.mobileL}) {
  font-size: 4rem;
} 

`;
const HomeSmallTitle = styled.h3`
color: white;
font-size: 1.5rem;
padding-left: 0.4rem;
@media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
  font-size: 1rem;
} 
@media only screen and (${device.mobileLSmallerBP}) and (${device.pixelBP}) {
 font-size: 1rem;

} 
@media only screen and (${device.pixelBP}) and (${device.mobileL}) {
  font-size: 1rem;
} 
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

@media only screen and (${device.tabletSmallerBP}) and (${device.tablet}) {
  margin-left: 0.4rem;
}

@media only screen and (${device.laptopSmallerBP}) and (${device.laptop}) {
  margin-left: 0.4rem;
}
`;


const HomeTitleContainer = styled(motion.div)`
height: 5.8rem;
@media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
  height: 4rem;
} 
@media only screen and (${device.mobileLSmallerBP}) and (${device.pixelBP}) {
 height: 4rem;

} 
`;
export{
    HomeContainer,
    HomeElements,
    HomeTitle,
    HomeSmallTitle,
    HomeButton,
    HomeTitleContainer
}
