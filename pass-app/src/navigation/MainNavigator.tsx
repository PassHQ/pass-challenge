import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import LandingScreen from '../screens/Landing';
import UserDetailsScreen from '../screens/UserDetailsScreen';
import SendTokenScreen from '../screens/SendTokenScreen';

const Stack = createStackNavigator<RootStackParamList>();

const screenOptions: StackNavigationOptions = {
  headerShown: false,
};

function MainNavigator() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Home" component={LandingScreen} />
      <Stack.Screen name="UserDetails" component={UserDetailsScreen} />
      <Stack.Screen name="SendToken" component={SendTokenScreen} />
    </Stack.Navigator>
  );
}

export default MainNavigator;
