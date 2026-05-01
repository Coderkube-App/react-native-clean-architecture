import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../modules/auth/views/login_screen';
import { HomeScreen } from '../modules/home/views/home_screen';

const Stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};
