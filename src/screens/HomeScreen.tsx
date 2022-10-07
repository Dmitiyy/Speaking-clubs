import { Container } from '../components/Home/styled/Home.styled';
import { FC, Fragment } from 'react';
import { StyleSheet } from 'react-native';

import { Header } from '../components/Home/Header';
import { Meetings } from '../components/Home/Meetings';
import { MeetingsCardComponent } from '../components/Home/MeetingsCard';
import { FlatGrid } from 'react-native-super-grid';

export const HomeScreen: FC = () => {
  return (
    <Container>
      <FlatGrid
        data={[1,2,3,4,5,6]}
        renderItem={() => (<MeetingsCardComponent />)}
        ListHeaderComponent={() => (
          <Fragment>
            <Header />
            <Meetings />
          </Fragment>
        )}
        spacing={15}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
    </Container>
  )
}

const styles = StyleSheet.create({
  list: {
    marginTop: -5,
  },
});