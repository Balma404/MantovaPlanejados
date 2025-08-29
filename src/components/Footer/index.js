import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { FooterContainer, FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
   const toggleHome = () => {
      scroll.scrollToTop();
   }

   return (
      <FooterContainer>
         <FooterWrap>
         <SocialMedia>
            <SocialMediaWrap>
               <SocialLogo to='/' onClick={toggleHome}>
               Mantova
               </SocialLogo>
               <WebsiteRights>Mantova © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
               <SocialIcons>
               <SocialIconLink href='https://www.facebook.com/profile.php?id=61561860547400' target='_blank' arial-label='Facebook'>
                  <FaFacebook />
               </SocialIconLink>
               <SocialIconLink href='https://www.instagram.com/mantova_moveisplanejados/' target='_blank' arial-label='Instagram'>
                  <FaInstagram/>
               </SocialIconLink>
               </SocialIcons>
            </SocialMediaWrap>
         </SocialMedia>
         </FooterWrap>
      </FooterContainer>
   )
}

export default Footer