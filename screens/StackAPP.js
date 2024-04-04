import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Botao from './Botao';
import Item from '../components/Item';
import Itemtwo from '../components/Itemtwo';

const Stack = createStackNavigator();

export default function StackAPP() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false,  gestureEnabled: true, gestureDirection: 'vertical', cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,}}>
      <Stack.Screen name="TelaPrincipal" component={Botao} />
      <Stack.Screen name="Item" component={Item} />
      <Stack.Screen name="Itemtwo" component={Itemtwo} />
    </Stack.Navigator>
  )
}