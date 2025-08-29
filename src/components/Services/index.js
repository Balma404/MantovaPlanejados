import React from 'react'
import Img1 from '../../images/pricipal.png'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesH2, ServicesImg} from './ServiceElements'
const Services = () => {
   return (
      <ServicesContainer id='partner'>
         <ServicesH1>Benefícios</ServicesH1>
         <ServicesWrapper>
            <ServicesCard>
               <ServicesH2>•Exclusividade: cada projeto é único, feito sob medida.</ServicesH2>
               <ServicesImg src={Img1} />
            </ServicesCard>
            <ServicesCard>
               <ServicesH2>•Excelência: acabamentos premium e precisão milimétrica.</ServicesH2>
               {/* <ServicesImg2 src={''} /> */}
            </ServicesCard>
            <ServicesCard>
               <ServicesH2>•Sofisticação: design atemporal que valoriza seu estilo de vida.</ServicesH2>
               {/* <ServicesImg3 src={''} /> */}
            </ServicesCard>
            <ServicesCard>
               <ServicesH2>•Confiança: atendimento próximo e personalizado.</ServicesH2>
               {/* <ServicesImg4 src={''} /> */}
            </ServicesCard>
         </ServicesWrapper>
      </ServicesContainer>
   )
}

export default Services
// Balma:)