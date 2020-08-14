import React, { FC } from 'react';
import { Props } from './props';
import styled from '@emotion/styled';

export const Card = styled.div<Props>``;

Card.defaultProps = {
  background: '#fff',
  color: '#282828'
}
