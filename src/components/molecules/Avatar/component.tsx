import { Props } from './props';
import styled from '@emotion/styled';

export const Avatar = styled.div<Props>`
   ${({ url }) => `
   background-image: url(${ url });
   `}
   display: flex;
   position: relative;
   border-radius: 100%;
   overflow: hidden;
   background-position: top center;
   background-size: cover;
   &::before {
     content: '';
     display: block;
     padding-top: 100%;
   }
`;
