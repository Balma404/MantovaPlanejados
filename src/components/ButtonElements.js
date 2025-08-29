import styled from 'styled-components';
import {Link} from 'react-scroll'

export const Button = styled(Link)`
   border-radius: 50px;
   background: ${({ primary }) => primary ? 'linear-gradient(to right, #8b7a65, #9e8a72, #b19b82)' : '#fff'};
   white-space: nowrap;
   padding: ${({big}) =>  (big ? '14px  48px' : '12px 30px')};
   color: ${({dark}) =>  (dark ? '#fff' : '#b19b82')};
   font-size:${({fontBig}) =>  (fontBig ? '20px' : '16px')};
   outline: none;
   border: none;
   cursor: pointer;
   display: flex;
   justify-content: center;
   align-items: center;
   transition: all 0.2s ease-in-out;
   &:hover {
      transition: all 0.2s ease-in-out;
      background: ${({primary}) => (primary ?  '#b19b82' : '#8b7a65')};
   }
`