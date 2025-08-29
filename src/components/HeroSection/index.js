import React, {useState} from 'react';
import {Button} from '../ButtonElements';
import mantovaDesktop from '../../images/desktop.png'; 
import mantovaMobile from '../../images/mobile.jpg'; 
import styled from "styled-components";

export const Banner = styled.div`
   width: 100%;
   height: 100vh;
   background-image: url(${mantovaDesktop});
   background-size: cover;
   background-position: center;

   @media (max-width: 768px) {
      background-image: url(${mantovaMobile});
   }
`;

import { 
   HeroContainer,
   HeroBg,
   HeroContent,
   HeroH1,
   HeroP,
   HeroBtnWrapper,
   ArrowForward,
   ArrowRight 
   } from './HeroElements'

const HeroSection = () => {
   const [hover, setHover] = useState(false)

   const onHover = () => {
      setHover(!hover)
   }
   return (
      <HeroContainer id='home'>
         <HeroBg>
            <Banner />
         </HeroBg> 
            <HeroContent>
               <HeroH1></HeroH1>
               <HeroH1></HeroH1>
               <HeroP>
               </HeroP>
               <HeroBtnWrapper>
               <Button to='about' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
               Veja Ele{hover ? <ArrowForward /> : <ArrowRight/>} 
               </Button>
               </HeroBtnWrapper>
            </HeroContent>
      </HeroContainer>
   )
}

export default HeroSection
