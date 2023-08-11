import React, {useState} from 'react'
import {HomeContainer, HomeElements, HomeTitle, HomeSmallTitle, HomeButton, HomeTitleContainer} from './HomeStyles'

import { useNavigate } from 'react-router-dom'
function Home() {

  const [title] = useState("Budg-it");
  const words = Array.from(title);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  let navigate=useNavigate();
  return (
    <HomeContainer>

        <HomeElements>
          <HomeTitleContainer
            variants={container}
            initial="hidden"
            animate="visible"
          >
          {words.map((word, index) => (
              <HomeTitle variants={child} key={index}>
                {word === " " ? "\u00A0" : word}
                </HomeTitle>
            ))}
        </HomeTitleContainer>
         
           
            <HomeSmallTitle>Your Savings Journey Begins Here</HomeSmallTitle>
            <HomeButton onClick={()=>navigate('/user')}>Begin</HomeButton>
        </HomeElements>
    </HomeContainer>
  )
}

export default Home;