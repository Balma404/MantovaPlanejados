import React from 'react'

import {
   TecContainer, 
   TecH1, 
   TecWrapper, 
   TecCard, 
   TecH2, 
   TecP
} from './TechnologieElements'

const Technologies = () => {
   return (
      <TecContainer id='Tec'>
         <TecH1>Tecnologias:</TecH1>
         <TecWrapper>
            <TecCard>
               <TecH2></TecH2>
               <TecP></TecP>
            </TecCard>
            <TecCard>
               <TecH2></TecH2>
               <TecP></TecP>
            </TecCard>
            <TecCard>
               <TecH2></TecH2>
               <TecP></TecP>
            </TecCard>
            <TecCard>
               <TecH2></TecH2>
               <TecP></TecP>
            </TecCard>
            <TecCard>
               <TecH2></TecH2>
               <TecP></TecP>
            </TecCard>
            <TecCard>
               <TecH2></TecH2>
               <TecP></TecP>
            </TecCard>
         </TecWrapper>
      </TecContainer>
   )
}

export default Technologies
