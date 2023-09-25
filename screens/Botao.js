import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';

import Buscar from './menus/Buscar';
import Principal from './menus/Principal';
import Perfil from './menus/Perfil';
import Pedidos from './menus/Pedidos';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function StackBuscar (){
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="StackBuscar" component={Buscar} />
    </Stack.Navigator>
  );
}

export default function Botao(){
  return(
    <Tab.Navigator screenOptions={{headerShown: false}} tabBarOptions={{ showLabel: false }} >
      <Tab.Screen name="Inicio" component={Principal} options={{
        tabBarIcon: ({focused}) => (
          <View className="">
            <Text className="text-orange-500 font-bold">Inicio</Text>
          </View> 
        )
      }}/>
      <Tab.Screen name="Buscar" component={StackBuscar} options={{
        tabBarIcon: ({focused}) => (
          <View className="">
            <Text className="text-orange-500 font-bold">Buscar</Text>
          </View> 
        )
      }} />
      <Tab.Screen name="Pedidos" component={Pedidos} options={{
        tabBarIcon: ({focused}) => (
          <View className="">
            <Text className="text-orange-500 font-bold">Pedidos</Text>
          </View> 
        )
      }} />
      <Tab.Screen name="Perfil" component={Perfil} options={{
        tabBarIcon: ({focused}) => (
          <View className="">
            <Text className="text-orange-500 font-bold">Perfil</Text>
          </View> 
        )
      }} />
      
    </Tab.Navigator>
  )
}



