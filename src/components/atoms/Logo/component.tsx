import styled from '@emotion/styled';
import { Props } from './props';

export const Logo = styled.span<Props>`
  display: inline-block;
  font-size: 20px;
  color: ${({ color }) => color};
`;

Logo.defaultProps = {
  color: "yellow",
}
