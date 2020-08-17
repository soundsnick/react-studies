import styled from '@emotion/styled';
import { Props } from './props';

export const Card = styled.div<Props>`
   ${({ background, color, disableBorder}) => `
      background-color: ${ background  || '#fff' };
      color: ${ color || '#282828' };
      ${ disableBorder && 'border: 1px solid #282828;'};
   `}
`;
