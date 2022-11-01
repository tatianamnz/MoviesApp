import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from '../screens/HomeScreen'
import { DetailScreen } from '../screens/DetailScreen'
import { NavigationParams } from './params'
import { NavigationContainer } from '@react-navigation/native'

export const RootNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: 'white' } }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  </NavigationContainer>
)

const Stack = createNativeStackNavigator<NavigationParams>()
