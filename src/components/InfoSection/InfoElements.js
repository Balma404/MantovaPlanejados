import styled from 'styled-components';

export const InfoContainer = styled.div`
      width: 100%;
      min-height: 100vh;
      background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#012235')};
      display: flex;
      justify-content: center;
      align-items: center;
      overflow-x: hidden;
`
export const InfoWrapper = styled.div`
   display: grid;
   z-index: 1;
   width: 100%;
   max-width: 1100px;
   margin: 0 auto;
   padding: 0 24px;
   justify-content: center;
   min-height: 100vh;
`

export const InfoRow = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   flex-wrap: wrap;
   flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};

   @media screen and (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      text-align: center; 
}
`
export const Column1 = styled.div`
   flex: 1;
   padding: 1rem;
   min-width: 300px;
   display: flex;
   flex-direction: column;

   @media screen and (max-width: 768px) {
      max-width: 90%;
      width: 100%;
      margin-bottom: 2rem;
      align-items: center;
   }
`
export const Column2 = styled.div`
   flex: 1;
   padding: 1rem;
   min-width: 300px;
   display: flex;
   flex-direction: column;
   align-items: center;

      @media screen and (max-width: 768px) {
      max-width: 90%;
      width: 100%;
      margin-bottom: 2rem;
      align-items: center;
   }
`
export const TextWrapper = styled.div`
      max-width: 500px;
      width: 100%;
      display: flex;
      flex-direction: column;

      @media screen and (max-width: 768px) {
         max-width: 90%;
         text-align: center;
      }
`
export const TopLine = styled.p`
   color: #8b7a65;
   font-size: 16px;
   line-height: 16px;
   font-weight: 700;
   letter-spacing: 1.4px;
   text-transform: uppercase;
   margin-bottom: 16px;
`

export const Heading = styled.h1`
   margin-bottom: 24px;
   font-size: 48px;
   line-height: 1.1;
   font-weight: 600px;
   color: ${({lightText}) => (lightText ? '#f7f8fa' : '#012235')};

   @media screen and (max-width: 480px) {
      font-size: 32px;
   }
`
export const Subtitle  = styled.p`
   max-width: 440px;
   margin-bottom: 35px;
   font-size: 18px;
   line-height: 24px;
   color: ${({darkText}) => (darkText ? '#012235' : '#fff')};
`
export const BtnWrap = styled.div`
   display:flex;
   justify-content: flex-start;
`;
export const ImgWrap = styled.div`
   max-width: 555px;
   height: 100%;
`;
export const Img = styled.img`
   width: 100%;
   margin: 0 0 10px 0;
   padding-right: 0;
`;

export const Imgme = styled.img`
   width: 90%;
   margin: 0 0 10px 0;
   padding-right: 0;
   border-radius: 17rem;
`