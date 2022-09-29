import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OcticonsIcons from 'react-native-vector-icons/Octicons';
import FeatherIcons from 'react-native-vector-icons/Feather';
import { StyleSheet } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { HomeScreen } from '../screens/HomeScreen';
import { ProfileScreen } from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const HomeIcon = ({ color }: { color: string }) => {
  return (<OcticonsIcons name="home" size={33} color={color} />);
};

const ProfileIcon = ({ color }: { color: string }) => {
  return (<FeatherIcons name="user" size={33} color={color} />);
};

export const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => {
      return {
        tabBarStyle: { height: 75 },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon({ focused }) {
          const color = focused ? '#fff' : '#000';
          
          if (route.name === 'Home') {
            return <Gradient active={focused}><HomeIcon color={color} /></Gradient>;
          } else if (route.name === 'Profile') {
            return <Gradient active={focused}><ProfileIcon color={color} /></Gradient>;
          }
        }
      }
    }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
};

const Gradient = ({ children, active }: { children: JSX.Element, active: boolean }) => {
  return (
    <LinearGradient 
      start={{x: 0, y: 0}} end={{x: 1, y: 1}} 
      colors={!active ? ['transparent', 'transparent'] : ['#92E5B0', '#36C95B']} 
      style={styles.wrapStyles}
    >
      {children}
    </LinearGradient>
  )
};

const styles = StyleSheet.create({
  wrapStyles: {
    width: 60,
    height: 60,
    borderRadius: 17,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all .2s'
  }
});