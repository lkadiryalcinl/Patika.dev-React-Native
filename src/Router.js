import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';

const Stack = createNativeStackNavigator();
export default function Routers(){
  
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomePage} options={
          {title: 'YALÇIN STORE',
          headerTitleAlign: 'center',
          headerTintColor: '#ff5e62',
        }}/>
        <Stack.Screen name='Details' component={DetailsPage} options={
          {title: 'PRODUCT DETAILS',
          headerTitleAlign: 'center',
          headerTintColor: '#ff5e62',
        }
        }/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
