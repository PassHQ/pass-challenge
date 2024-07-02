import React from 'react';
import {View} from 'react-native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import LandingScreen from '../screens/Landing';
import UserDetailsScreen from '../screens/UserDetailsScreen';
import SendTokenScreen from '../screens/SendTokenScreen';

const Stack = createStackNavigator<RootStackParamList>();

const screenOptions: StackNavigationOptions = {
  headerBackground: () => <View />,
};

function MainNavigator() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Home" component={LandingScreen} />
      <Stack.Screen
        name="UserDetails"
        component={UserDetailsScreen}
        options={{
          title: 'User Details',
        }}
      />
      <Stack.Screen
        name="SendToken"
        component={SendTokenScreen}
        options={{
          title: 'Send Token',
        }}
      />
    </Stack.Navigator>
  );
}

export default MainNavigator;
