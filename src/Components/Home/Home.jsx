import React from 'react'
import {HomeContainer, HomeElements, HomeTitle, HomeSmallTitle, HomeButton, HomeBackground} from './HomeStyles'
import Background from '../../Images/hdbg4.jpg'
import { useNavigate } from 'react-router-dom'
function Home() {
  let navigate=useNavigate();
  return (
    <HomeContainer>
      <HomeBackground  src = {Background} alt = "blur_hd_bg" />
        <HomeElements>
            <HomeTitle>Budg-it</HomeTitle>
            <HomeSmallTitle>Your Savings Journey Begins Here</HomeSmallTitle>
            <HomeButton onClick={()=>navigate('/user')}>Begin</HomeButton>
        </HomeElements>
    </HomeContainer>
  )
}

export default Home;