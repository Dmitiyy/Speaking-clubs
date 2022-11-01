import { useCallback, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StatusBar as StatusBarRN } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import styled from 'styled-components/native';
import { Tabs } from './src/components/Tabs';

const MainArea = styled.SafeAreaView`
  flex: 1;
  margin-top: ${StatusBarRN.currentHeight || 0}px;
`;

const FontsContainer = styled.View`flex: 1;`;

export default function App() {
  const [fontsLoaded] = useFonts({
    'Montserrat-Black': require('./assets/fonts/Montserrat-Black.ttf'),
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf')
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer theme={{
      ...DefaultTheme, colors: { ...DefaultTheme.colors, background: '#EAF8EE' }
    }}>
      <MainArea>
        <FontsContainer onLayout={onLayoutRootView}>
          <Tabs />
        </FontsContainer>
        <StatusBar style="auto" />
      </MainArea>
    </NavigationContainer>
  );
}