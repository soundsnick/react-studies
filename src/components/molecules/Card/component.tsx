import styled from '@emotion/styled';
import { Props } from './props';

export const Card = styled.div<Props>`
   ${({ background, color, disableBorder}) => `
      background-color: ${ '#fff' ||  background };
      color: ${ '#282828' ||  color };
      border: ${ disableBorder ? '0' : '1px solid #282828'};
   `}
`;
