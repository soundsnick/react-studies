import React, { FC } from 'react';
import { Container } from '../atoms/Container';
import { Clicker } from '../molecules/Clicker';

export const Dashboard: FC = () => (
  <Container>
    <h1>Dashboard page</h1>
    <Clicker>Click times: </Clicker>
  </Container>
);
