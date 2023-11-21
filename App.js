import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Inicio from './screens/cadastros/Inicio';
import Login from './screens/cadastros/Login';
import Cadastro from './screens/cadastros/Cadastro';
import Mcadastro from './screens/cadastros/Mcadastro';
import Botao from './screens/Botao';
import Item from './components/Item';
import StackAPP from './screens/StackAPP';
import Senha from './screens/cadastros/Senha';
import Loading from './screens/cadastros/Loading';

const Stack = createStackNavigator();

function StackCadastro() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} >
      <Stack.Screen name="Loading" component={Loading} />
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Mcadastro" component={Mcadastro} />
      <Stack.Screen name="Principal" component={StackAPP} />
      <Stack.Screen name="Senha" component={Senha} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StackCadastro />
    </NavigationContainer>
  );
}




