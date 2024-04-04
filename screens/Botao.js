import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { Text, View, ImageBackground, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Sacola from './menus/Sacola';
import Principal from './menus/Principal';
import Perfil from './menus/Perfil';
import Pedidos from './menus/Pedidos';
import Config from './perfil/Config';
import Pagamento from './perfil/Pagamento';
import Notificacoes from './perfil/Notificacoes';
import Ajuda from './perfil/Ajuda';
import Seguranca from './perfil/Seguranca';
import Dados from './perfil/Dados';
import Itemtwo from '../components/Itemtwo';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function StackBuscar (){
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="StackBuscar" component={Sacola} />
    </Stack.Navigator>
  );
}

function StackPerfil (){
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="StackPerfil" component={Perfil} />
      <Stack.Screen name="Config" component={Config} />
      <Stack.Screen name="Pagamento" component={Pagamento} />
      <Stack.Screen name="Notificacoes" component={Notificacoes} />
      <Stack.Screen name="Ajuda" component={Ajuda} />
      <Stack.Screen name="Seguranca" component={Seguranca} />
      <Stack.Screen name="Dados" component={Dados} />
      <Stack.Screen name="Itemtwo" component={Itemtwo} />
    </Stack.Navigator>
  );
}

function StackPrincipal(){
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="StackPrincipal" component={Principal} />
      <Stack.Screen name="Itemtwo" component={Itemtwo} />
    </Stack.Navigator>
  );
}

export default function Botao(){
  return(
    
    <Tab.Navigator 
    screenOptions={{headerShown: false, tabBarActiveTintColor:'#ea580c', tabBarInactiveTintColor:'gray', tabBarStyle:{height: Platform.OS === 'ios' ? 100:80}}} 
    tabBarOptions={{ showLabel: false, tabBarActiveTintColor:'#ea580c'}} >
      <Tab.Screen name="Inicio" component={StackPrincipal} options={{
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
      <Tab.Screen name="Perfil" component={StackPerfil} options={{
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



