import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Sacola from './menus/Sacola';
import Principal from './menus/Principal';
import Perfil from './menus/Perfil';
import Pedidos from './menus/Pedidos';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function StackBuscar (){
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="StackBuscar" component={Sacola} />
    </Stack.Navigator>
  );
}

export default function Botao(){
  return(
    <Tab.Navigator 
    screenOptions={{headerShown: false, tabBarActiveTintColor:'#ea580c', tabBarInactiveTintColor:'gray', tabBarStyle:{height:80,}}} 
    tabBarOptions={{ showLabel: false,  }} >
      <Tab.Screen name="Inicio" component={Principal} options={{
        tabBarIcon: ({color, focused}) => {
          if(focused){
            return <View className="flex justify-center items-center">
            <Ionicons name='home' size={20} color={color}></Ionicons>
            <Text className=" font-semibold text-center text-orange-500" >Inicio</Text>
          </View> 
          }
          return<View className="flex  items-center">
          <Ionicons name='home-outline' size={20} color={color}></Ionicons>
          <Text className=" font-semibold text-center text-black/50 " >Inicio</Text>
        </View> 
          
        }
      }}/>
      <Tab.Screen name="Buscar" component={StackBuscar} options={{
        tabBarIcon: ({color, focused}) => {
          if(focused){
            return <View className="flex justify-center items-center">
            <Ionicons name='basket' size={20} color={color}></Ionicons>
            <Text className=" font-semibold text-center text-orange-500" >Sacola</Text>
          </View> 
          }
          return<View className="flex  items-center">
          <Ionicons name='basket-outline' size={20} color={color}></Ionicons>
          <Text className=" font-semibold text-center text-black/50 " >Sacola</Text>
        </View> 
          
        }
      }} />
      <Tab.Screen name="Pedidos" component={Pedidos} options={{
        tabBarIcon: ({color, focused}) => {
          if(focused){
            return <View className="flex justify-center items-center">
            <Ionicons name='receipt' size={20} color={color}></Ionicons>
            <Text className=" font-semibold text-center text-orange-500" >Pedidos</Text>
          </View> 
          }
          return<View className="flex  items-center">
          <Ionicons name='receipt-outline' size={20} color={color}></Ionicons>
          <Text className=" font-semibold text-center text-black/50 " >Pedidos</Text>
        </View> 
          
        }
      }} />
      <Tab.Screen name="Perfil" component={Perfil} options={{
        tabBarIcon: ({color, focused}) => {
          if(focused){
            return <View className="flex justify-center items-center">
            <Ionicons name='person' size={20} color={color}></Ionicons>
            <Text className=" font-semibold text-center text-orange-500" >Perfil</Text>
          </View> 
          }
          return<View className="flex  items-center">
          <Ionicons name='person-outline' size={20} color={color}></Ionicons>
          <Text className=" font-semibold text-center text-black/50 " >Perfil</Text>
        </View> 
          
        }
      }} />
      
    </Tab.Navigator>
  )
}



