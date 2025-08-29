import styled from 'styled-components';

export const FormContainer = styled.div`
      width: 100%;
      max-width: 450px; 
      margin: 0 auto;
      padding: 0 15px; // garante espaço nas laterais

      @media screen and (max-width: 768px) {
         margin-top: 2rem;
         max-width: 90%;
      }
`;

export const Form = styled.form`
      background: #fff;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      width: 100%;
      display: flex;
      flex-direction: column;
      width: 24rem;
      gap: 1rem;

      @media screen and (max-width: 768px) {
         padding: 20px;
         margin-left: -20px;
         width: 20rem;
      }
`;

export const FormRow = styled.div`
   display: flex;
   gap: 20px;
   flex-wrap: wrap;

   @media screen and (max-width: 768px) {
      flex-direction: column;
   }
`;

export const Column = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   gap: 15px;
`;

export const Inputt = styled.input`
   padding: 12px 16px;
   border: 1px solid #ccc;
   border-radius: 8px;
   font-size: 14px;
   outline: none;
   transition: border-color 0.2s ease;

   &:focus {
      border-color: #000;
   }
`;

export const TextArea = styled.textarea`
   padding: 12px 16px;
   border: 1px solid #ccc;
   border-radius: 8px;
   font-size: 14px;
   min-height: 120px;
   resize: none;
   outline: none;
   transition: border-color 0.2s ease;

   &:focus {
      border-color: #000;
   }
`;

export const BtnContainer = styled.button`
   padding: 12px;
   background: #000;
   color: #fff;
   font-size: 16px;
   border: none;
   border-radius: 8px;
   cursor: pointer;
   transition: background 0.3s ease;

   &:hover {
      background: #333;
   }
`;
