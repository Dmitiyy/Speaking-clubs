import { StatusBar } from 'expo-status-bar';
import { StatusBar as StatusBarRN } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import styled from 'styled-components/native';
import { Tabs } from './src/components/Tabs';

const MainArea = styled.SafeAreaView`
  flex: 1;
  margin-top: ${StatusBarRN.currentHeight || 0}px;
`;

export default function App() {
  return (
    <NavigationContainer theme={{
      ...DefaultTheme, colors: {...DefaultTheme.colors, background: '#EAF8EE'}
    }}>
      <MainArea>
        <Tabs />
        <StatusBar style="auto" />
      </MainArea>
    </NavigationContainer>
  );
}