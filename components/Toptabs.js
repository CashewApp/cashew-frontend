import { View, Text } from 'react-native'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Salgados from '../screens/cardapio/Salgados';
import Bebidas from '../screens/cardapio/Bebidas';
import Sobremesas from '../screens/cardapio/Sobremesas';
import Refeicoes from '../screens/cardapio/Refeicoes';



const Tab = createMaterialTopTabNavigator();

export default function Toptabs() {
  return (
    <Tab.Navigator screenOptions={{tabBarActiveTintColor:"#ea580c", tabBarInactiveTintColor:"#71717a",tabBarIndicatorStyle: {backgroundColor:"#ea580c"},tabBarScrollEnabled: true }} >
        <Tab.Screen name="Salgados" component={Salgados}></Tab.Screen>
        <Tab.Screen name="Bebidas" component={Bebidas}></Tab.Screen>
        <Tab.Screen name="Sobremesas" component={Sobremesas}></Tab.Screen>
        <Tab.Screen name="Refeicoes" component={Refeicoes}></Tab.Screen>
    </Tab.Navigator>
  )
}