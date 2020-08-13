import styled from "@emotion/styled";
import {Props} from "./props";

export const Container = styled.div<Props>`
  position: relative;
  max-width: ${({ mini }) => mini ? `600px` : `1200px`};
  margin: auto;
`;
