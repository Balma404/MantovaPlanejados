import React from 'react';
import { 
      InfoContainer, 
      InfoWrapper,
      InfoRow,
      TextWrapper,
      TopLine,
      Heading,
      VideoWrapper,
      Video,
      Column1,
      Column2,
      Subtitle,
   } from './InfoElements';

import FormComponent from '../InfoSection/Form';

const InfoSection = ({lightBg, id, topLine, lightText, headline, darkText, description, description2, forms, video}) => {
   
   return (
      <div>
         <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
               <InfoRow>
                  <Column1>
                  <TextWrapper>
                     <TopLine>{topLine}</TopLine>
                     <Heading lightText={lightText}>{headline}</Heading>
                     <Subtitle darkText={darkText}>{description}</Subtitle>
                     <Subtitle darkText={darkText}>{description2}</Subtitle>
                  </TextWrapper>
                  </Column1>
                  <Column2>
                     {forms && <FormComponent />}
                   {video && ( // <-- só renderiza se existir video: true no objeto
                        <VideoWrapper>
                           <Video autoPlay muted loop playsInline>
                              <source src="/videos/video1.mov" type="video/mp4" />
                              <source src="/videos/video2.mov" type="video/mp4" />
                           </Video>
                        </VideoWrapper>
                     )}
                  </Column2>
               </InfoRow>
            </InfoWrapper>
         </InfoContainer>
      </div>
   )
   }

export default InfoSection
