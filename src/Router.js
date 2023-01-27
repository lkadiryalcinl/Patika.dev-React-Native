import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import InfoPage from './pages/InfoPage/InfoPage';

const Stack = createNativeStackNavigator();

export default function() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome Page" component={WelcomePage} options={{headerShown: false}}/>
        <Stack.Screen name="Register Page" component={RegisterPage} options={{headerShown: false}}/>
        <Stack.Screen name="Info Page" component={InfoPage} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};