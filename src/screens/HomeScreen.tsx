import { Container } from '../components/Home/styled/Home.styled';
import { FC } from 'react';
import { Header } from '../components/Home/Header';
import { Meetings } from '../components/Home/Meetings';

export const HomeScreen: FC = () => {
  return (
    <Container>
      <Header />
      <Meetings />
    </Container>
  )
}