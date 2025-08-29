import React, {useState} from 'react';
import {Button} from '../ButtonElements';
import mantovaFundo from '../../images/BANNER MANTOVA.png'; 
import { 
   HeroContainer,
   Mantova,
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
            <Mantova src={mantovaFundo} />
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
